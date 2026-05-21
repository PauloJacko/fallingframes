import Image from "next/image";

const team = [
  {
    name: "Just Roadie",
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
    desc: "El motor de la distorsión. Encargado de romper los paradigmas del rock con líneas de bajo dinámicas, combinadas con la agresividad de las voces guturales.",
    img: "/images/integrantes/disaster.jpg"
  },
  {
    name: "Yuni D. Or",
    role: "Batería // Segundas Voces",
    desc: "Energía inagotable. Diseña bases sólidas y polirrítmicas que dotan a la banda de una versatilidad lúdica y un aura escénica demoledora.",
    img: "/images/integrantes/yuni.jpg"
  },
  {
    name: "Paulokko",
    role: "Teclados // Sintetizadores // Segundas Voces",
    desc: "El arquitecto atmosférico. Incorporado para expandir el espectro sonoro mediante texturas cinematográficas, ambientes envolventes y solos épicos.",
    img: "/images/integrantes/paulokko.jpg"
  }
];

export default function BiografiaPage() {
  // Definimos los estilos en una constante limpia para inyectarlos de forma segura en el servidor
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
    }

    .tarjeta-musico:hover {
      border-color: rgba(16, 185, 129, 0.5) !important;
      box-shadow: 0 0 25px rgba(16, 185, 129, 0.15) !important;
      transform: translateY(-4px);
    }
  `;

  return (
    <section className="min-h-screen bg-black pt-32 pb-24 text-zinc-400 font-sans relative overflow-hidden wrapper-industrial">
      
      {/* Inyección nativa compatible 100% con Server Components */}
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
            que fractura los límites de la estructura musical popular. Descartando los coros y pasajes repetitivos, 
            la banda compone piezas en actos: relatos que transitan desde la euforia a la tragedy.
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
                El proyecto comenzó como un espacio de experimentación pura entre Disasterpiece, Milo Chan y Just Roadie. 
                La química inmediata exigió seriedad, consolidando la columna vertebral de la banda con la posterior incorporación de Yuni D. Or en la batería.
              </p>
              <p>
                Su sonido es un colisionador de partículas donde coexisten la virtuosidad matemática de <span className="text-white font-semibold">Polyphia</span>, 
                los quiebres psicóticos de <span className="text-white font-semibold">Maximum the Hormone</span>, el galope clásico de <span className="text-white font-semibold">Iron Maiden</span> 
                 y la monumental arquitectura de <span className="text-white font-semibold">Dream Theater</span>.
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
                  Consolidación de su disco debut. Un rompecabezas emocional con la participación lúdica de Popin.
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
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <div 
              key={i} 
              className="group flex flex-col justify-between overflow-hidden rounded-2xl p-4 tarjeta-musico"
            >
              {/* Foto Vertical */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-black border border-zinc-900">
                <Image 
                  src={member.img}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover grayscale transition duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
              </div>

              {/* Textos del integrante */}
              <div className="mt-6 px-1 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-wider text-white transition-all duration-300 group-hover:text-emerald-400">
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

      </div>
    </section>
  );
}