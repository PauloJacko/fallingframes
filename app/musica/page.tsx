"use client";

import { useState } from "react";
import Image from "next/image";

// 1. DATA ESTRUCTURADA POR LANZAMIENTOS (DISCOS / SINGLES)
type Track = {
  id: number;
  title: string;
  tag: string;
  hasVideo: boolean;
  spotifyEmbedId: string;
  lyrics: string;
  youtubeUrl?: string;
};

type Album = {
  title: string;
  status: string;
  tracks: Track[];
};

const discography: Record<string, Album> = {
  disco1: {
    title: "Disco 1 // Grito Subterráneo",
    status: "disponible",
    tracks: [
      {
        id: 1,
        title: "Frenesí",
        tag: "Acto I - El Detonante",
        hasVideo: false,
        spotifyEmbedId: "4LOJcIsAGEmtqzEYHcKx5K",
        lyrics: `Laaa puerta corrediza\nMe quiere parar\nEsa última birra que tomé\nEstuvo de más\nMe lanzé a la vida, como suelo\nPara ahogar\nPenas que enseguida\nVeré en el suelo de un bar\n\nPido en la tarima una cerveza\nPa' llevar\nGrito al maquinista "Dame más velocidad"\nFijo que en la esquina\nFrenaría pa' maniobrar\n¡Pero no me veo parar!\n\n¡No! ¡No!\n¡No! ¡Ya no más!\n¡No! ¡No!\n¡No! ¡Ya no más!\n\nAposté mi vida\nValoré todo mal\nY ahora sé que está mal\nPues, ¿Qué hago ahora yo?\n\nHace tiempo que me da\nQue no puedo respirar\nY no sé, si es normal\nNo querer, ¡despertar!\n\n¡No! ¡No es normal!\n¡No!\n\nRenacer creo que no volvería\nEstá lleno de controversias`
      },
      {
        id: 2,
        title: "Ni estaciones ni paradas",
        tag: "Acto II - Depresión Profunda",
        hasVideo: false,
        spotifyEmbedId: "0FxEtfMcjydtYGaFLFsQ26",
        lyrics: `Por el riel pasé mi vida aquí\nEsperé porque esperaba aquel lugar que un día mañana\nAl fin me haría feliz\nLo que sé y lo que me tiene así\nEs que ya no queda nada, ni estaciones ni paradas\nBuenas para mí\n\nUna no es ninguna en el arte de perdonar\nCulpas a la duda\nPero pierdes lo que quieres cuando piensas que no puedes\nEse es tu karma\n\nMe cansé de ser quien se lamenta\nMe ahogaré en este riel que me lleva\nYa no queda más que nada ni el café de las mañanas me hace despertar\nÁNGEL: No te rindas jamás\nAunque duela está en ti el valor para despertar\n\nTrabajé sin fijarme una meta\nY ahora tengo las manos deshechas\nYa no queda más que nada ni un desmadre a la semana me puede calmar\nÁNGEL: Con paciencia verás\nQue no hay nada que fé y amor no puedan calmar`
      },
      {
        id: 3,
        title: "Sal de mis ojos",
        tag: "Acto III - El Desgaste",
        hasVideo: false,
        spotifyEmbedId: "4O6abV4iFeQWTVu1yD7tOt",
        lyrics: `Canto para que veas\nQue el llanto es una marea\nY es tanto lo que menea\nEste barco que apenas\nUn santo me lleva a tierra\nMe espanto todo da vueltas\nEs tanto lo que marea\nQue pronto aprendí a soportar\nSolo tenía que llorar\nSiempre\n\nY gritar\nSiempre\n\nCielo de luna llena\nVeo un ciego por la vereda\nNo entiendo como la lleva\nPresiento su pena\nNo tengo ni una moneda\nGasté todo en esa peda\nMe siento como la mierda\nMe alejo y comienzo a llorar\nAlgo aquí adentro está mal\n\nNo es normal\nEl llorar\nSiempre\nSiempre`
      },
      {
        id: 4,
        title: "El encuentro",
        tag: "Acto IV - Encuentro con la muerte",
        hasVideo: true,
        youtubeUrl: "https://www.youtube.com/embed/xZAMULGgSWE",
        spotifyEmbedId: "6T5VIceRpBAa32qnoIN7aj",
        lyrics: `Deja que te cuente una historia que me fue a pasar\nUna noche en la orilla del mar\nNo soy de esa gente que toma después de fumar\nPero entonces mi vida iba mal oh\nLo peor que haya estado jamás oh\n\nAlgo como un puente formado por rocas de sal\nEmergió desde el fondo del mar\nLo tenía de frente y llenando mis botas de agua\nCaminé como un tonto hacia allá oh\n¡oh!\n\nComencé a sentir comencé a creer\nTodo sobre mí es una broma cruel\nNo quería seguir, no quería saber\nCayó sobre mí el peso de mi ser oh\n¡oh!\n\nFue como despertar\nSin saber respirar\nComo una crisis de pánico\nDentro de un viaje astral\n\nUna sombra voraz\nSe acercó por atrás\nPude ver un rostro pálido\nBajo un negro telar\n\nSoy la muerte comenzó a decir\nNo cuentes con nadie\nHoy la suerte no te trajo a mí\nNo culpes a nadie\n¿Cómo puede alguien desistir\nal juego del aire?\nSolo, pues, dejaste de existir\n\n¿Dónde está tu Dios?\n¿Dónde está tu Dios?\n¡¿Dónde está?!\n\n¡oh!`
      },
      {
        id: 5,
        title: "Crisis de pánico",
        tag: "Acto V - El Descenso",
        hasVideo: true,
        youtubeUrl: "https://www.youtube.com/embed/9E0cwYMdM68",
        spotifyEmbedId: "7MwW6aUbgBLvVuRC9hkAOb",
        lyrics: `Pura verdad, ya se intentó\nHoy caerás al infierno\nTardarás un poco en digerir\nQue la gravedad\nEs aceleración no tiene fin\nEs infinita\n\nMUERTE: Prepárate para caer\nÁNGEL: Nunca sabrás\nPERSONAJE: No puedo no entiendo\nDIABLO: Prepárate para caer\n\nNunca tuviste nada\nNunca supiste nada\nTe convertiste en nada\n\n¿Cómo pasó? ¿Qué sabía yo?\n¿Soy realmente yo el que falló?\n¿Cómo distinguir lo bueno y malo?\nSoy tan solo un simple humano\nPiénsalo bien, mírame bien\n¿Cómo no pecar si te lo exigen?\nSoy el resultado de todo lo que\nComo humano experimente\n\nNunca tuviste nada\nNunca supiste nada\nTe convertiste en nada\n\nNo volverás\nNo volverás\nWelcome\nWelcome`
      },
      {
        id: 6,
        title: "Grito Subterráneo",
        tag: "Acto VI - El infierno existe",
        hasVideo: true,
        youtubeUrl: "https://www.youtube.com/embed/3fV6oqml0oM",
        spotifyEmbedId: "1pBW3DqI8LB6ZSQjZ27bM7",
        lyrics: `Muy pronto despertarás, solo\nEntre cianuro y benceno\nOlerás el hedor que hay al quemar, todo\nCada uno de tus cabellos\n\nInterrogantes habrán\n¿Cómo será el sol del cielo?\nPorque el fuego que verás\nNo alumbra ni al mismo suelo\n\nLo pierdes\nTodo\nSalvo soledad\n\nHombre mortal\nConsciente total\nHombre mortal\nConsciente total\nHaré de la mente que te forma\nUna sombra por la eternidad\n\n¿Quién será el genio,\nQué advierta al gremio,\nQue no es un sueño?\nQue tus lamentos (que no podrás)\nSerán eternos (volver atrás)\nEn el infierno (te quemarás por siempre)\n\nCuando vives arriba no es fácil predecir (lo sientes)\nParece que no hay nadie que te pueda decir (consciente)\nQue cuando te animas a dejar de vivir\nLa muerte viene por ti\nTe congela el alma y no puedes respirar (paciente)\nTe revela el karma que no quieres mirar (te pierdes)\nPone en ti una carga que tienes que arrastrar\nPor siempre en la oscuridad\n\n¡Por siempre!\n¡Solo!\n¡En la oscuridad!`
      }
    ]
  },
  disco2: {
    title: "Disco 2 // En Desarrollo",
    status: "proximamente",
    tracks: [
      {
        id: 1,
        title: "Avance Track 01",
        tag: "Pre-Production",
        hasVideo: false,
        spotifyEmbedId: "",
        lyrics: "[ MATERIAL EN PROCESO DE GRABACIÓN ]\n\nPróximamente líricas oficiales y maquetas de estudio."
      }
    ]
  },
  singles: {
    title: "Lanzamientos // Singles Independientes",
    status: "disponible",
    tracks: [
      {
        id: 1,
        title: "Próximo Single Instrumental",
        tag: "Lanzamiento Especial",
        hasVideo: false,
        spotifyEmbedId: "",
        lyrics: "[ SESIÓN INSTRUMENTAL ]\n\nLíricas no asignadas para este track."
      }
    ]
  }
};

const extraVideos = [
  { title: "Live en 12 Lunas", type: "en-vivo", info: "Concierto completo disco Grito Subterráneo", embedUrl: "https://www.youtube.com/embed/9uQ7n8IcP60" },
  { title: "Frenesí // Sesión en Vivo", type: "en-vivo", info: "Captura cruda en directo", embedUrl: "https://www.youtube.com/embed/fybIiE2wJ8I" },
  { title: "Crisis de Pánico // Sesión en Vivo", type: "en-vivo", info: "Captura cruda en directo", embedUrl: "https://www.youtube.com/embed/4dp1vmfUiDU" },
  { title: "Grito Subterráneo // Sesión en Vivo", type: "en-vivo", info: "Captura cruda en directo", embedUrl: "https://www.youtube.com/embed/cPfgmP43t6E" },
  { title: "Ni Estaciones ni Paradas // Sesión en Vivo", type: "en-vivo", info: "Captura cruda en directo", embedUrl: "https://www.youtube.com/embed/hlz1mCn-yoQ" },
  { title: "Sal de mis Ojos — El Encuentro // Sesión en Vivo", type: "en-vivo", info: "Captura cruda en directo", embedUrl: "https://www.youtube.com/embed/LmXBtZNOJqA" },
  { title: "Fear of the Dark (Iron Maiden cover en español) — Nico Borie ft. Falling Frames", type: "colaboracion", info: "Colaboración con Nico Borie", embedUrl: "https://www.youtube.com/embed/iozOguBwZ1Q" }
];

export default function MusicaVideosPage() {
  const [selectedRelease, setSelectedRelease] = useState<keyof typeof discography>("disco1");
  const currentTracks = discography[selectedRelease].tracks;
  const [activeTrack, setActiveTrack] = useState(currentTracks[0]);
  const [activeVideoTab, setActiveVideoTab] = useState("oficial");
  
  // Estado para controlar qué video se está reproduciendo activamente por su índice/url
  const [playingVideoUrl, setPlayingVideoUrl] = useState<string | null>(null);

  const handleReleaseChange = (releaseKey: keyof typeof discography) => {
    setSelectedRelease(releaseKey);
    setActiveTrack(discography[releaseKey].tracks[0]);
  };

  const handleTabChange = (tabId: string) => {
    setActiveVideoTab(tabId);
    setPlayingVideoUrl(null); // Resetear videos en reproducción al cambiar de pestaña
  };

  const officialVideos = Object.values(discography)
    .flatMap(album => album.tracks)
    .filter(track => track.hasVideo)
    .map(track => ({
      title: `${track.title} (Official Video)`,
      type: "oficial",
      info: track.title === "Grito Subterráneo" ? "Feat. Popin" : "Alineación Oficial",
      embedUrl: track.youtubeUrl || ""
    }));

  const allVideos = [...officialVideos, ...extraVideos];
  const filteredVideos = allVideos.filter(video => video.type === activeVideoTab);

  // Función ayudante para extraer el ID de video de YouTube desde la URL de embed
  const getYouTubeId = (url: string) => {
    const parts = url.split("/embed/");
    return parts.length > 1 ? parts[1].split("?")[0] : "";
  };

  return (
    <section className="min-h-screen bg-black pt-32 pb-24 text-zinc-400 font-sans relative overflow-hidden wrapper-industrial">
      
      {/* INYECCIÓN DE CSS NATIVO */}
      <style jsx global>{`
        .wrapper-industrial {
          background-color: #050505 !important;
          background-image: 
            linear-gradient(rgba(16, 185, 129, 0.04) 1.5px, transparent 1.5px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.04) 1.5px, transparent 1.5px) !important;
          background-size: 30px 30px !important;
        }
        .wrapper-industrial::before {
          content: "";
          position: absolute;
          top: 25%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }
        .glow-active {
          background: rgba(16, 185, 129, 0.12) !important;
          border-color: rgba(16, 185, 129, 0.6) !important;
          color: #ffffff !important;
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.25), inset 0 0 10px rgba(16, 185, 129, 0.1) !important;
        }
        .glow-tab-active {
          background-color: #10b981 !important;
          color: #000000 !important;
          box-shadow: 0 0 25px rgba(16, 185, 129, 0.5) !important;
        }
        .panel-metalico {
          background-color: rgba(10, 10, 10, 0.95) !important;
          border: 2px solid #27272a !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.9) !important;
        }
        .subpanel-metalico {
          background-color: #020202 !important;
          border: 1px solid #1f1f23 !important;
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        
        {/* ENCABEZADO */}
        <header className="mb-16 border-b border-zinc-900 pb-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-emerald-400" style={{ textShadow: "0 0 8px rgba(16,185,129,0.5)" }}>
            // La Falling emisora
          </p>
          <h1 className="text-5xl font-black uppercase tracking-[0.1em] text-white md:text-7xl">
            Canciones
          </h1>
        </header>

        {/* ================= SECCIÓN 1: EL CANCIONERO INTERACTIVO ================= */}
        <div className="mb-32">
          
          {/* SELECTOR DE DISCOS */}
          <div className="flex flex-wrap gap-3 mb-8 border-b border-zinc-900 pb-6">
            {(Object.keys(discography) as Array<keyof typeof discography>).map((key) => (
              <button
                key={key}
                onClick={() => handleReleaseChange(key)}
                className={`px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 border ${
                  selectedRelease === key
                    ? "glow-active font-bold"
                    : "border-zinc-900 bg-zinc-950/90 text-zinc-500 hover:text-zinc-300 hover:border-zinc-800"
                }`}
              >
                {key === "disco1" && "• Disco 1 - Grito Subterráneo"}
                {key === "disco2" && "• Disco 2 - Próximamente"}
                {key === "singles" && "• Singles / Extras"}
              </button>
            ))}
          </div>
          
          {/* CONTENEDOR PRINCIPAL */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 rounded-3xl p-6 md:p-10 panel-metalico">
            
            {/* Lista de Canciones */}
            <div className="lg:col-span-5 space-y-3">
              <p className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase mb-2">// TRACKLIST ACTIVO</p>
              {currentTracks.map((track, index) => (
                <button
                  key={track.id}
                  onClick={() => setActiveTrack(track)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex flex-col gap-1 ${
                    activeTrack.title === track.title
                      ? "glow-active"
                      : "border-zinc-900 bg-transparent text-zinc-400 hover:border-zinc-800 hover:bg-zinc-900/40"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-mono text-zinc-600">0{index + 1}.</span>
                    {activeTrack.title === track.title && (
                      <span className="text-[9px] font-mono tracking-widest text-emerald-400 animate-pulse" style={{ textShadow: "0 0 5px rgba(16,185,129,0.6)" }}>[ FOCUS ]</span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mt-1">{track.title}</h3>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">{track.tag}</span>
                </button>
              ))}
            </div>

            {/* Letra Dinámica y Reproductor */}
            <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl p-6 md:p-8 min-h-[500px] subpanel-metalico">
              
              <div className="overflow-y-auto max-h-[380px] pr-4 custom-scrollbar mb-6">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-6 sticky top-0 bg-[#020202] z-10">
                  <h4 className="text-xs font-bold font-mono tracking-widest text-emerald-400 uppercase">// LÍRICAS</h4>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">{activeTrack.title}</span>
                </div>
                
                <pre className="font-sans text-xs md:text-sm tracking-wide text-zinc-300 leading-relaxed whitespace-pre-line uppercase">
                  {activeTrack.lyrics}
                </pre>
              </div>

              {/* Spotify Embed */}
              <div className="mt-auto pt-4 border-t border-zinc-900">
                {activeTrack.spotifyEmbedId ? (
                  <iframe
                    src={`https://open.spotify.com/embed/track/${activeTrack.spotifyEmbedId}?utm_source=generator&theme=0`}
                    width="100%"
                    height="80"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-xl border border-zinc-800 bg-black"
                  ></iframe>
                ) : (
                  <div className="bg-black rounded-xl border border-zinc-900 p-4 text-center">
                    <p className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase">// ENLACE DE TRANSMISIÓN DE AUDIO EN CONFIGURACIÓN //完成</p>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>

        {/* ================= SECCIÓN 2: ARCHIVO DE VIDEOS OPTIMIZADO ================= */}
        <div>
          <div className="flex flex-col items-start justify-between gap-6 mb-12 md:flex-row md:items-end">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-500">// TRANSMISIONES VISUALES</h2>
              <p className="text-xs text-zinc-600 mt-1 uppercase tracking-widest">Registro de videos</p>
            </div>

            {/* Categorías de Videos */}
            <div className="flex flex-wrap gap-2 border border-zinc-800 bg-zinc-950 p-1.5 rounded-xl">
              {[
                { id: "oficial", label: "Oficiales" },
                { id: "en-vivo", label: "Sesiones en Vivo" },
                { id: "colaboracion", label: "Colaboraciones" },
                { id: "complemento", label: "Promos / Extras" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all ${
                    activeVideoTab === tab.id
                      ? "glow-tab-active font-black"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredVideos.map((video, index) => {
                const youtubeId = getYouTubeId(video.embedUrl);
                const isPlaying = playingVideoUrl === video.embedUrl;

                return (
                  <div 
                    key={index} 
                    className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 p-4 transition-all duration-300 hover:border-zinc-700"
                  >
                    <div className="aspect-video w-full rounded-xl bg-black border border-zinc-900 overflow-hidden relative">
                      
                      {isPlaying ? (
                        /* El iframe real de YouTube solo se renderiza si el usuario presionó la tarjeta */
                        <iframe
                          width="100%"
                          height="100%"
                          src={`${video.embedUrl}?autoplay=1`} // Se añade autoplay automático al activarse
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="border-0 w-full h-full"
                        ></iframe>
                      ) : (
                        /* Fachada Inteligente: Carga instantánea usando las miniaturas nativas de YouTube */
                        <button
                          onClick={() => setPlayingVideoUrl(video.embedUrl)}
                          className="absolute inset-0 w-full h-full group/btn focus:outline-none"
                          aria-label={`Reproducir ${video.title}`}
                        >
                          <Image
                            src={`https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`}
                            alt={video.title}
                            fill
                            sizes="(max-w-768px) 100vw, 33vw"
                            className="object-cover opacity-50 group-hover/btn:opacity-80 transition-opacity duration-300"
                          />
                          
                          {/* Icono Industrial Personalizado de Play (Glow Esmeralda) */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-12 w-12 rounded-full bg-black/80 border border-zinc-800 flex items-center justify-center text-emerald-400 group-hover/btn:text-white group-hover/btn:border-emerald-500 group-hover/btn:scale-110 group-hover/btn:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 ml-0.5">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </button>
                      )}

                    </div>

                    <div className="mt-4 px-1">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 group-hover:text-emerald-400 transition-colors duration-300 leading-snug">
                        {video.title}
                      </h4>
                      <p className="text-[10px] font-mono text-zinc-600 uppercase mt-1">
                        {video.info}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 border border-dashed border-zinc-800 rounded-3xl bg-zinc-950">
              <span className="text-2xl block mb-2">📡</span>
              <p className="text-xs font-mono text-zinc-600 uppercase tracking-[0.2em]">Frecuencia temporalmente sin emisiones activas.</p>
              <p className="text-[10px] text-zinc-700 uppercase tracking-widest mt-1">Próximamente material promocional y cápsulas de estudio.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}