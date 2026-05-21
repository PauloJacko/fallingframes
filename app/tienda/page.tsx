// app/tienda/page.tsx
import Image from "next/image";
import Link from "next/link";
import { fullCatalog } from "./data"; 

export default function TiendaPage() {
  const cssTienda = `
    .wrapper-tienda-premium {
      background-color: #0a0a0c !important;
      background-image: 
        radial-gradient(at 50% 0%, rgba(16, 185, 129, 0.15) 0px, transparent 60%),
        radial-gradient(at 0% 100%, rgba(10, 10, 11, 1) 0px, transparent 100%);
    }

    .wrapper-tienda-premium::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      max-width: 1400px;
      height: 700px;
      background: radial-gradient(circle at 50% -5%, rgba(255, 255, 255, 0.06) 0%, rgba(16, 185, 129, 0.03) 50%, transparent 75%);
      pointer-events: none;
      z-index: 0;
    }

    .tarjeta-producto {
      background: linear-gradient(180deg, rgba(18, 18, 22, 0.7) 0%, rgba(12, 12, 15, 0.9) 100%) !important;
      border: 1px solid rgba(255, 255, 255, 0.05) !important;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .tarjeta-producto:hover {
      border-color: rgba(16, 185, 129, 0.3) !important;
      transform: translateY(-4px);
      box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 30px -10px rgba(16, 185, 129, 0.1) !important;
    }

    .contenedor-imagen {
      background: #0f0f13 !important;
      border: 1px solid rgba(255, 255, 255, 0.03) !important;
      transition: border-color 0.4s ease;
    }

    .tarjeta-producto:hover .contenedor-imagen {
      border-color: rgba(16, 185, 129, 0.15) !important;
    }
  `;

  return (
    <section className="min-h-screen pt-36 pb-24 text-zinc-300 font-sans relative overflow-hidden wrapper-tienda-premium">
      <style dangerouslySetInnerHTML={{ __html: cssTienda }} />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.5em] text-emerald-400">
            MERCANCÍA OFICIAL
          </p>
          <h1 className="text-4xl font-black tracking-wide text-white uppercase sm:text-6xl">
            La Falling Tienda
          </h1>
          <div className="w-16 h-[1px] bg-emerald-500/40 mx-auto mt-6 mb-6" />
          <p className="text-sm tracking-wide text-zinc-400 font-light leading-relaxed">
            Ediciones limitadas, indumentaria y formatos físicos. 
            Despachos a todo Chile.
          </p>
        </header>

        <div className="mb-16 rounded-xl p-6 border border-emerald-500/10 bg-emerald-950/5 backdrop-blur-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="space-y-1">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-white">Catálogo en Fase Beta</h2>
            <p className="text-xs tracking-wide text-zinc-400 font-light">
              Estamos desplegando las líneas definitivas de mercancía. Selecciona un producto para ver sus variantes y opciones de diseño.
            </p>
          </div>
          <div className="shrink-0 bg-zinc-900/80 border border-zinc-800 px-4 py-2 rounded text-[10px] tracking-widest text-emerald-400 font-medium uppercase">
            APERTURA 2027
          </div>
        </div>

        {/* GRID QUE APUNTA A LAS RUTAS DINÁMICAS */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {fullCatalog.map((item) => (
            <Link 
              href={`/tienda/${item.slug}`}
              key={item.id} 
              className="flex flex-col justify-between overflow-hidden rounded-xl p-5 tarjeta-producto group cursor-pointer"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-lg contenedor-imagen flex items-center justify-center p-6">
                <span className="absolute top-3 left-3 text-[9px] tracking-widest uppercase px-2.5 py-1 bg-zinc-900/90 text-zinc-400 rounded border border-zinc-800/60 z-10">
                  {item.type}
                </span>

                <Image
                  src={item.variants[0].src}
                  alt={item.mainName}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain p-8 opacity-85 transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="mt-5 flex-grow flex flex-col justify-between gap-4">
                <div>
                  <h3 className="text-sm font-medium tracking-wide text-zinc-200 group-hover:text-emerald-400 transition-colors leading-snug">
                    {item.mainName}
                  </h3>
                  {item.hasVariants && (
                    <p className="text-[11px] text-zinc-500 mt-1">
                      {item.variants.length} variantes disponibles
                    </p>
                  )}
                </div>

                <div className="border-t border-zinc-900/60 pt-4 flex items-center justify-between">
                  <span className="text-[10px] tracking-wider text-zinc-500 uppercase">
                    Ver opciones
                  </span>
                  <span className="text-[10px] tracking-wide text-emerald-400 font-light bg-emerald-950/20 border border-emerald-500/10 px-2.5 py-1 rounded">
                    {item.status}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}