import Image from "next/image";
import Link from "next/link"; // Importación clave para rutas en Next.js

const featuredProducts = [
  { id: 1, name: "Polera 'Abyssal Frames' // Black Series", src: "/images/merch1.png" },
  { id: 2, name: "Vinilo 'Falling Continuous' // Edición Limitada", src: "/images/merch2.png" },
  { id: 3, name: "Jockey Snapback 'Mathematical Decay'", src: "/images/merch3.png" },
];

export default function MerchSection() {
  return (
    <section id="merch" className="border-t border-zinc-900 bg-black py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-emerald-400">
              // LA FALLING MERCHANDISING
            </p>
            <h2 className="text-5xl font-black uppercase tracking-[0.12em] text-white md:text-6xl">
              Merch Exclusivo
            </h2>
            <p className="mt-4 max-w-xl text-sm uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
              Piezas oficiales de la identidad Falling Frames.
            </p>
          </div>

          <Link 
            href="/tienda" 
            className="w-full text-center border border-emerald-400/50 bg-emerald-400/5 px-8 py-4 text-xs font-bold uppercase tracking-[0.35em] text-emerald-400 transition-all duration-300 hover:bg-emerald-400 hover:text-black hover:border-emerald-400 shadow-lg md:w-auto"
          >
            Ver catálogo completo
          </Link>
        </div>

        {/* Merch Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <Link 
              key={product.id} 
              href="/tienda" 
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/20 backdrop-blur-sm p-4 transition-all duration-300 hover:border-emerald-500/30 hover:bg-zinc-950/60"
            >
              <div className="relative aspect-[4/4] w-full overflow-hidden rounded-xl bg-zinc-900/40 border border-zinc-900/50 flex items-center justify-center p-6">
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-[size:16px_16px]" />
                <Image
                  src={product.src}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-4 transition duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="mt-6 flex flex-col gap-3 px-2">
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-400 group-hover:text-white transition-colors leading-relaxed">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400/70 group-hover:text-emerald-400 transition-colors">
                  <span>Visita nuestra tienda</span>
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}