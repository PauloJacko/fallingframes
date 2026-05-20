"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,157,0.10),transparent_60%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-emerald-400">
            Metal • Progresivo • Experimental
          </p>

          <h1 className="text-6xl font-bold uppercase leading-none tracking-[0.15em] md:text-8xl">
            Falling
            <br />
            Frames
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
            Atmósferas oscuras. Emociones sin filtro.
            Música experimental con una identidad audiovisual cinematográfica.
          </p>

          <button className="mt-10 border border-emerald-400 px-8 py-4 text-sm uppercase tracking-[0.3em] text-emerald-400 transition-all duration-300 hover:bg-emerald-400 hover:text-black">
            Ver Videos
          </button>
          <button className="mt-10 border border-emerald-400 px-8 py-4 text-sm uppercase tracking-[0.3em] text-emerald-400 transition-all duration-300 hover:bg-emerald-400 hover:text-black">
            Ver Merchandising
          </button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[40px] bg-emerald-500/10 blur-3xl" />

          <Image
            src="/images/hero-band.png"
            alt="Falling Frames"
            width={1600}
            height={1400}
            className="relative z-10 w-full rounded-[40px] border border-zinc-800 object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}