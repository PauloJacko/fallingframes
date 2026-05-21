import Image from "next/image";

const fullCatalog = [
  { id: 1, name: "Polera 'Abyssal Frames' // Black Series", type: "Indumentaria", status: "Manufacturando lote", src: "/images/merch1.png" },
  { id: 2, name: "Vinilo 'Falling Continuous' // Edición Limitada", type: "Formatos", status: "Agotado temporalmente", src: "/images/merch2.png" },
  { id: 3, name: "Jockey Snapback 'Mathematical Decay'", type: "Accesorios", status: "Próximo cargamento", src: "/images/merch3.png" },
  { id: 4, name: "Polerón Canguro // Grito Subterráneo Armor", type: "Indumentaria", status: "En diseño técnico", src: "/images/merch1.png" }, // Reutiliza o cambia ruta
  { id: 5, name: "CD Jewel Case // Grito Subterráneo Standard", type: "Formatos", status: "En imprenta", src: "/images/merch2.png" },
  { id: 6, name: "Pack de Uñas / Picks Oficiales Just Roadie Sig", type: "Accesorios", status: "Calibrando stock", src: "/images/merch3.png" },
];

export default function TiendaPage() {
  const cssTienda = `
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
      top: 20%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 800px;
      height: 800px;
      background: radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 70%);
      pointer-events: none;
      z-index: 0;
    }

    .panel-tienda {
      background-color: rgba(10, 10, 10, 0.95) !important;
      border: 2px solid #27272a !important;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.9) !important;
    }

    .item-metalico {
      background-color: rgba(8, 8, 8, 0.9) !important;
      border: 1px solid #1f1f23 !important;
    }
  `;

  return (
    <section className="min-h-screen bg-black pt-32 pb-24 text-zinc-400 font-sans relative overflow-hidden wrapper-industrial">
      <style dangerouslySetInnerHTML={{ __html: cssTienda }} />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        
        {/* ENCABEZADO INDUSTRIAL */}
        <header className="mb-16 border-b border-zinc-900 pb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-emerald-400" style={{ textShadow: "0 0 8px rgba(16,185,129,0.5)" }}>
            // BIENVENIDOS A LA FALLING TIENDA
          </p>
          <h1 className="text-5xl font-black uppercase tracking-[0.1em] text-white md:text-7xl">
            Catálogo
          </h1>
          <p className="mt-6 max-w-2xl text-xs md:text-sm uppercase tracking-widest text-zinc-500 leading-relaxed">
            [ ESTADO DE LA CENTRAL: <span className="text-emerald-400 animate-pulse">RECONECTANDO PASARELA DE PAGO</span> ] Archivo de artefactos tangibles. Distribución controlada e independiente desde La Serena, Chile.
          </p>
        </header>

        {/* MARCO INFORMATIVO / AVISO */}
        <div className="mb-16 rounded-2xl p-6 md:p-8 panel-tienda flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-white">// ADQUISICIONES PRÓXIMAS</h2>
            <p className="text-xs uppercase tracking-wide text-zinc-400 max-w-xl">
              Estamos ensamblando el inventario definitivo y los canales de distribución física. Muy pronto podrás procesar tus órdenes directamente de manera encriptada a través de este portal.
            </p>
          </div>
          <div className="border border-dashed border-emerald-500/30 bg-emerald-950/20 px-4 py-2 rounded-lg text-[10px] font-mono uppercase tracking-widest text-emerald-400">
            Fase de Desarrollo 03 // 2026
          </div>
        </div>

        {/* GRID DE PRODUCTOS COMPLETO */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {fullCatalog.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col justify-between overflow-hidden rounded-2xl p-4 item-metalico border border-zinc-900 shadow-xl"
            >
              {/* Contenedor de Imagen de Producto */}
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-950 flex items-center justify-center p-6 border border-zinc-900/50">
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-[size:12px_12px]" />
                
                {/* Indicador de Estado sobre la Imagen */}
                <span className="absolute top-3 right-3 text-[9px] font-mono uppercase tracking-wider px-2.5 py-1 bg-black/80 border border-zinc-800 text-zinc-500 rounded-md">
                  {item.type}
                </span>

                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain p-6 opacity-40 grayscale"
                />
              </div>

              {/* Textos y Estatus Operacional */}
              <div className="mt-6 px-1 flex-grow flex flex-col justify-between gap-4">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-300 leading-relaxed">
                    {item.name}
                  </h3>
                </div>

                <div className="border-t border-zinc-900/80 pt-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">
                    STATUS:
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-semibold bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                    // {item.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}