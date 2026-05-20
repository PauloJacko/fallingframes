import Image from "next/image";

export default function MerchSection() {
  return (
    <section className="border-t border-zinc-900 py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-emerald-400">
              Tienda Oficial
            </p>

            <h2 className="text-5xl font-bold uppercase tracking-[0.15em] md:text-6xl">
              Merch Exclusivo
            </h2>

            <p className="mt-6 max-w-xl text-lg text-zinc-400">
              Diseños únicos. Calidad premium.
              Lleva Falling Frames contigo.
            </p>
          </div>

          <button className="border border-emerald-400 px-8 py-4 text-sm uppercase tracking-[0.3em] text-emerald-400 transition-all duration-300 hover:bg-emerald-400 hover:text-black">
            Ir a la tienda
          </button>
        </div>

        {/* Merch Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* Item 1 */}
          <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">

            <Image
              src="/images/merch1.png"
              alt="Merch 1"
              width={800}
              height={1000}
              className="w-full object-cover transition duration-500 hover:scale-105"
            />

          </div>

          {/* Item 2 */}
          <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">

            <Image
              src="/images/merch2.png"
              alt="Merch 2"
              width={800}
              height={1000}
              className="w-full object-cover transition duration-500 hover:scale-105"
            />

          </div>

          {/* Item 3 */}
          <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">

            <Image
              src="/images/merch3.png"
              alt="Merch 3"
              width={800}
              height={1000}
              className="w-full object-cover transition duration-500 hover:scale-105"
            />

          </div>
        </div>
      </div>
    </section>
  );
}