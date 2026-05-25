import Image from "next/image";

const team = [
  {
    name: "Rod",
    role: "Primera Guitarra // Segundas Voces",
    desc: "Devoción total al instrumento. Aporta la velocidad, precisión técnica y rítmicas complejas indispensables para la arquitectura musical de la banda.",
    img: "/images/integrantes/roadie.jpg"
  },
  {
    name: "Milo Chan",
    role: "Voz Principal // Segunda Guitarra",
    desc: "El frente dramático. Fusiona líricas densas con melodías envolventes, inyectando una teatralidad escénica que transforma los shows en rituales narrativos.",
    img: "/images/integrantes/milo.jpg"
  },
  {
    name: "DisasterPiece",
    role: "Bajo // Guturales",
    desc: "Encargado de dar dinamismo a las frecuencias graves de las composiciones, combinando líneas dinámicas con la agresividad de sus voces guturales.",
    img: "/images/integrantes/disaster.jpg"
  },
  {
    name: "Yuni D. Or",
    role: "Batería // Segundas Voces",
    desc: "El cerebro detrás de la métrica. Diseña bases sólidas y polirrítmicas que dotan a la banda de tiempos impredecibles y ritmos alucinantes",
    img: "/images/integrantes/yunis.jpg"
  },
  {
    name: "Paulokko",
    role: "Pianos // Sintetizadores // Segundas Voces",
    desc: "El arquitecto de atmósferas. Es el responsible de expandir el espectro sonoro mediante texturas cinematográficas, ambientes envolventes y solos épicos.",
    img: "/images/integrantes/paulokkos.jpg"
  }
];

export default function BiografiaPage() {
  const cssIndustrial = `
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
      top: 15%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 700px;
      height: 700px;
      background: radial-gradient(circle, rgba(16, 185, 129, 0.07) 0%, transparent 70%);
      pointer-events: none;
      z-index: 0;
    }

    .wrapper-industrial::after {
      content: "";
      position: absolute;
      bottom: 10%;
      right: 10%;
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%);
      pointer-events: none;
      z-index: 0;
    }

    .panel-metalico-solido {
      background-color: rgba(10, 10, 10, 0.95) !important;
      border: 2px solid #27272a !important;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.9) !important;
    }

    .tarjeta-musico {
      background-color: rgba(8, 8, 8, 0.9) !important;
      border: 1px solid #1f1f23 !important;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
      cursor: pointer;
      outline: none; /* Elimina el recuadro azul por defecto de accesibilidad */
    }

    /* CORRECCIÓN EN CSS: Combinamos hover y focus-within para que la tarjeta reaccione igual en PC y Celular */
    .tarjeta-musico:hover,
    .tarjeta-musico:focus-within {
      border-color: rgba(16, 185, 129, 0.5) !important;
      box-shadow: 0 0 25px rgba(16, 185, 129, 0.15) !important;
      transform: translateY(-4px);
    }
  `;

  return (
    <section className="min-h-screen bg-black pt-32 pb-24 text-zinc-400 font-sans relative overflow-hidden wrapper-industrial">
      
      <style dangerouslySetInnerHTML={{ __html: cssIndustrial }} />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        
        {/* ================= ACTO 1: CABECERA Y MANIFIESTO ================= */}
        <header className="mb-16 border-b border-zinc-900 pb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-emerald-400" style={{ textShadow: "0 0 8px rgba(16,185,129,0.5)" }}>
            // LA FALLING CRÓNICA
          </p>
          <h1 className="text-5xl font-black uppercase tracking-[0.1em] text-white md:text-7xl">
            Identidad
          </h1>
          <p className="mt-6 max-w-3xl text-lg tracking-wide text-zinc-300 md:text-xl md:leading-relaxed">
            Originarios de La Serena, Chile, <strong className="text-white font-bold">Falling Frames</strong> es una banda de rock progresivo experimental 
            que rompen los límites de la musical popular. Entrelazando pasajes de profunda emotividad con un virtuosismo brutal y oscuro, 
            la banda compone piezas en actos: relatos que transitan desde la euforia a la tragedia.
          </p>
        </header>

        {/* Hero Image de Banda */}
        <div className="relative mb-24 aspect-[21/9] w-full overflow-hidden rounded-3xl border-2 border-zinc-800 bg-black shadow-2xl">
          <Image 
            src="/images/banda-horizontal-1.png" 
            alt="Falling Frames alineación oficial"
            fill
            priority
            className="object-cover opacity-70 transition duration-700 hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
        </div>

        {/* ================= ACTO 2: EL CONCEPTO Y ORIGEN ================= */}
        <div className="mb-32 grid grid-cols-1 gap-12 rounded-3xl p-8 md:p-12 md:grid-cols-2 md:gap-20 panel-metalico-solido">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-emerald-400 mb-6" style={{ textShadow: "0 0 6px rgba(16,185,129,0.3)" }}>
              // GENESIS
            </h2>
            <div className="space-y-6 text-xs md:text-sm uppercase tracking-wider text-zinc-400 leading-relaxed font-sans">
              <p>
                El proyecto comenzó como un espacio de experimentación entre Disasterpiece, Milo Chan y Rode. 
                Pronto el proyecto se volvió algo serio, consolidando la columna vertebral de la banda con la posterior incorporación de Yuni D. Or en la batería.
                El año 2025 marcó un point de inflexión con la llegada de Paulokko, quien expandió el espectro sonoro con sus teclados, aportando una dimensión cinematográfica a la música.
              </p>
              <p>
                Su sonido es una amalgama impredecible donde coexisten la 
                <span className="text-white font-semibold"> precisión matemática del math rock</span>, 
                los <span className="text-white font-semibold">quiebres erráticos del metal moderno</span>, el 
                <span className="text-white font-semibold"> galope épico del heavy metal clásico</span> y la 
                <span className="text-white font-semibold"> arquitectura del rock progresivo</span>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-500 mb-6">// HITOS IMPORTANTES</h2>
            <div className="relative border-l-2 border-zinc-800 pl-6 space-y-8 font-mono text-xs">
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                <span className="text-emerald-400 font-bold block mb-1">2024 — DESPLIEGUE VISUAL</span>
                <p className="text-zinc-500 uppercase tracking-wide leading-relaxed">
                  Lanzamiento de "El Encuentro" junto a Robot Mágico. Colaboración con Nico Borie versionando instrumentalmente a Iron Maiden.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                <span className="text-emerald-400 font-bold block mb-1">2025 — EXPANSIÓN ATMOSFÉRICA</span>
                <p className="text-zinc-500 uppercase tracking-wide leading-relaxed">
                  Paulokko se integra en los teclados, inyectando un carácter cinematográfico y solos épicos al setlist en vivo.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#fff]" />
                <span className="text-white font-bold block mb-1">[ ACTUALIDAD ] — GRITO SUBTERRÁNEO</span>
                <p className="text-zinc-400 uppercase tracking-wide leading-relaxed">
                  Consolidación de su disco debut. Disco conceptual en VI actos que llevan desde la euforia a la tragedia.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= ACTO 3: INTEGRANTES ================= */}
        <div className="mb-12 border-b border-zinc-900 pb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-emerald-400" style={{ textShadow: "0 0 8px rgba(16,185,129,0.5)" }}>
            // ELENCO
          </p>
        </div>

        {/* Grid de Integrantes */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {team.map((member, i) => (
            <div 
              key={i} 
              tabIndex={0} /* CORRECCIÓN: Permite que la tarjeta sea enfocable al hacer tap en celular */
              className="group flex flex-col justify-between overflow-hidden rounded-2xl p-4 tarjeta-musico select-none"
            >
              {/* Foto Vertical */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-black border border-zinc-900">
                <Image 
                  src={member.img}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  /* CORRECCIÓN AQUÍ: Cambiamos active por focus:grayscale-0 (usando la tarjeta como disparador de grupo) */
                  className="object-cover grayscale group-hover:grayscale-0 group-focus-within:grayscale-0 transition duration-500 ease-out group-hover:scale-105 group-focus-within:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-40 group-focus-within:opacity-40 transition-opacity duration-500" />
              </div>

              {/* Textos del integrante */}
              <div className="mt-6 px-1 flex-grow flex flex-col justify-between">
                <div>
                  {/* CORRECCIÓN AQUÍ: group-focus-within tiñe las letras de verde esmeralda uniformemente */}
                  <h3 className="text-lg font-bold uppercase tracking-wider text-white transition-all duration-300 group-hover:text-emerald-400 group-focus-within:text-emerald-400">
                    {member.name}
                  </h3>
                  <p className="text-[10px] font-mono tracking-widest text-zinc-500 mt-1 uppercase">
                    {member.role}
                  </p>
                </div>
                <p className="text-xs tracking-wide text-zinc-400 leading-relaxed mt-4 border-t border-zinc-900/80 pt-4">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

{/* ================= ACTO 4: PRODUCCIÓN AUDIOVISUAL ================= */}
        <div className="border-t border-zinc-900 pt-16">
          
          {/* Título de Sección Externo (Misma jerarquía que las secciones anteriores) */}
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-emerald-400" style={{ textShadow: "0 0 8px rgba(16,185,129,0.5)" }}>
              // TRAS LAS CÁMARAS
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-wider text-white sm:text-4xl">
              Producción Audiovisual
            </h2>
          </div>

          {/* Contenedor de Nostromo (Ahora solo contiene su información interna) */}
          <div className="flex flex-col items-center justify-between gap-12 rounded-3xl border-2 border-zinc-800 bg-zinc-950 p-8 md:p-12 lg:flex-row lg:gap-20">
            
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-2xl font-bold uppercase tracking-wider text-white">
                Nostromo Producciones
              </h3>
              <p className="mt-4 text-sm leading-relaxed tracking-wide text-zinc-400">
                La narrativa visual y la atmósfera oscura que define los videoclips de la banda cobran vida bajo la dirección técnica y creativa de Nostromo. Un pilar fundamental para plasmar la densidad dramática de nuestras canciones en piezas cinematográficas memorables.
              </p>
              <div className="mt-6">
                <a 
                  href="https://instagram.com/nostromo.cl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-black px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-zinc-400 transition-all duration-300 hover:border-emerald-500/40 hover:text-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                >
                  <span>Síguelos en Instagram</span>
                  <span className="text-emerald-400 font-bold">@nostromo.cl</span>
                </a>
              </div>
            </div>

            {/* Contenedor tipo badge/placa metálica sólida para el logo original */}
            <div className="relative flex h-48 w-48 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-2 border-zinc-800 bg-black p-2 shadow-2xl group">
              {/* Sutil halo esmeralda */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-emerald-500/5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              
              <Image
                src="/images/nostromo.png"
                alt="Logo Nostromo Producciones"
                width={170}
                height={170}
                className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}