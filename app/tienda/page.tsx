import Image from "next/image";
import Link from "next/link";
import { fullCatalog } from "./data"; 

export default function TiendaPage() {
  const cssTienda = `
    .wrapper-tienda-premium {
      background-color: #0a0a0c !important;
      background-image: 
        radial-gradient(at 50% 40%, rgba(16, 185, 129, 0.08) 0px, transparent 50%),
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
      background: radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.04) 0%, rgba(16, 185, 129, 0.02) 50%, transparent 75%);
      pointer-events: none;
      z-index: 0;
    }

    /* Guardamos los estilos de las tarjetas intactos para el futuro */
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
    <section className="min-h-screen pt-36 pb-24 text-zinc-300 font-sans relative overflow-hidden wrapper-tienda-premium flex items-center">
      <style dangerouslySetInnerHTML={{ __html: cssTienda }} />

      <div className="mx-auto max-w-6xl px-6 relative z-10 w-full">
        
        {/* HEADER DE LA TIENDA */}
        <header className="mb-16 text-center max-w-3xl mx-auto">
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

        {/* SECCIÓN INTERACTIVA DE LANZAMIENTO (Sustituye la franja beta anterior por algo masivo) */}
        <div className="mx-auto max-w-2xl rounded-3xl border border-emerald-500/20 bg-zinc-950/40 p-8 sm:p-12 backdrop-blur-xl text-center shadow-2xl shadow-emerald-500/5 relative overflow-hidden group">
          {/* Línea cyber decorativa en el borde superior */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
          
          <div className="space-y-6 relative z-10">
            <div className="inline-block bg-emerald-950/30 border border-emerald-500/30 px-6 py-2 rounded-full text-xs tracking-[0.3em] text-emerald-400 font-black uppercase animate-pulse">
              Próximamente
            </div>
            
            <div className="space-y-2">
              <h2 className="text-3xl font-black tracking-widest text-white uppercase sm:text-5xl">
                Apertura 2027
              </h2>
              <p className="text-xs uppercase tracking-[0.15em] text-zinc-500 font-medium">
                Catálogo en preparación e infraestructura de envíos
              </p>
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-zinc-500 border-t border-zinc-900 pt-4 w-full justify-center">
                <span>Formatos Disponibles a futuro:</span>
                <span className="text-zinc-400 font-medium">CDs • Vinilos • Vestuario • Accesorios</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CATALOGO RESERVADO (Oculto temporalmente mediante condicional false) */}
        {/* ========================================================================= */}
        {false && (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-24">
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
        )}
        {/* ========================================================================= */}

      </div>
    </section>
  );
}