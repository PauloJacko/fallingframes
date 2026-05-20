"use client";

import { useState } from "react";

const videos = [
  {
    id: "3fV6oqml0oM",
    title: "Grito Subterráneo",
  },
  {
    id: "xZAMULGgSWE",
    title: "Videoclip II",
  },
  {
    id: "9E0cwYMdM68",
    title: "Videoclip III",
  },
  {
    id: "9uQ7n8IcP60",
    title: "Live Session",
  },
];

export default function VideoSection() {

  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <section
      id="videos"
      className="border-t border-zinc-900 py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:grid-cols-2">

        {/* LEFT */}
        <div>

          {/* MAIN VIDEO */}
          <div className="overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl">

            <div className="aspect-video">

              <iframe
                key={activeVideo.id}
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

            </div>
          </div>

          {/* THUMBNAILS */}
          <div className="mt-6 grid grid-cols-3 gap-4">

            {videos
              .filter((video) => video.id !== activeVideo.id)
              .map((video) => (

                <button
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                  className="group overflow-hidden rounded-2xl border border-zinc-800 transition hover:border-emerald-400"
                >

                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="aspect-video h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                </button>
              ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-center">

          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-emerald-400">
            Experiencia visual
          </p>

          <h2 className="text-5xl font-bold uppercase leading-tight tracking-[0.12em] md:text-6xl">
            Disfruta
            <br />
            nuestros videos
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
            Videoclips, sesiones en vivo y producciones audiovisuales de alto nivel
            creadas para expandir la experiencia de cada canción.
          </p>

          <div className="mt-10">

            <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">
              Reproduciendo
            </p>

            <h3 className="mt-3 text-2xl font-bold uppercase tracking-[0.12em]">
              {activeVideo.title}
            </h3>

          </div>
        </div>
      </div>
    </section>
  );
}