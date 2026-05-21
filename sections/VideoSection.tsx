"use client";

import { useState } from "react";

const videos = [
  {
    id: "3fV6oqml0oM",
    title: "Grito Subterráneo",
    subtitle: "feat. Popin",
  },
  {
    id: "xZAMULGgSWE",
    title: "El Encuentro",
    subtitle: "Videoclip Oficial",
  },
  {
    id: "9E0cwYMdM68",
    title: "Crisis de pánico",
    subtitle: "Videoclip Oficial",
  },
  {
    id: "9uQ7n8IcP60",
    title: "Live in 12 lunas",
    subtitle: "SESIÓN EN VIVO",
  },
];

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  const [hasInteracted, setHasInteracted] = useState(false);

  const handleVideoSelect = (video: typeof videos[0]) => {
    setActiveVideo(video);
    setHasInteracted(true);
  };

  return (
    <section id="videos" className="border-t border-zinc-900 bg-black py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12">
        
        {/* LEFT: REPRODUCTOR PRINCIPAL */}
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 shadow-2xl">
            <div className="aspect-video w-full">
              <iframe
                key={activeVideo.id}
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=${hasInteracted ? "1" : "0"}&modestbranding=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* RIGHT: PLAYLIST INTERACTIVO */}
        <div className="flex flex-col justify-between lg:col-span-5">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-emerald-400 font-semibold block mb-6">
              // REPRODUCTOR AUDIOVISUAL
            </span>
            
            <div className="flex flex-col gap-3">
              {videos.map((video) => {
                const isActive = video.id === activeVideo.id;
                return (
                  <button
                    key={video.id}
                    onClick={() => handleVideoSelect(video)}
                    className={`group flex items-center gap-4 p-2 rounded-xl border text-left transition-all duration-300 ${
                      isActive 
                        ? "border-emerald-500/30 bg-zinc-900/50" 
                        : "border-zinc-900 bg-transparent hover:border-zinc-800 hover:bg-zinc-900/20"
                    }`}
                  >
                    {/* Miniatura del Video */}
                    <div className="relative aspect-video w-24 flex-shrink-0 overflow-hidden rounded-lg bg-zinc-900 md:w-32">
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                        alt={video.title}
                        className={`h-full w-full object-cover transition duration-500 ${
                          isActive ? "scale-100 opacity-100" : "opacity-60 group-hover:scale-105 group-hover:opacity-100"
                        }`}
                      />
                      {isActive && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px]">
                          <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold animate-pulse">
                            {hasInteracted ? "Sonando" : "Seleccionado"}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Textos de la fila */}
                    <div className="flex flex-col truncate pr-2">
                      <h3 className={`text-base font-bold uppercase tracking-wider transition-colors truncate ${
                        isActive ? "text-emerald-400" : "text-zinc-200 group-hover:text-white"
                      }`}>
                        {video.title}
                      </h3>
                      <p className="text-xs uppercase tracking-widest text-zinc-500 mt-0.5 truncate">
                        {video.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <p className="mt-8 text-[11px] uppercase tracking-[0.25em] text-zinc-600 hidden lg:block">
            Sumérgete en la experiencia visual de Falling Frames.
          </p>
        </div>

      </div>
    </section>
  );
}