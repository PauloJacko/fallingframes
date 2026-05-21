"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/hero-band.png",
  "/images/live-1.png",
  "/images/videoclip-1.png",
  "/images/live-2.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      
      {/* 1. EL FONDO: CARRUSEL CINEMÁTICO OCUPANDO TODA LA PANTALLA */}
      <div className="absolute inset-0 z-0 h-full w-full bg-zinc-950">
        <AnimatePresence mode="wait">
          {mounted && (
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="absolute inset-0 h-full w-full"
            >
              <motion.img
                src={images[currentImage]}
                alt="Falling Frames Visual Experience"
                initial={{ scale: 1.02 }}
                animate={{ scale: 1.08 }}
                transition={{ duration: 5.2, ease: "linear" }}
                className="h-full w-full object-cover opacity-65 select-none pointer-events-none"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 2. CAPA DE GRADIENTES (Garantiza contraste y oscuridad extrema) */}
        {/* Viñeta periférica oscura */}
        <div className="absolute inset-0 z-10 bg-black/40" />
        {/* Degradado inferior para conectar suavemente con la siguiente sección */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-black/50" />
        {/* Malla industrial sutil superpuesta para darle textura matemática a las fotos */}
        <div className="absolute inset-0 z-10 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* 3. CAPA FLOTANTE DEL TEXTO Y BOTONES (Estática y centrada) */}
      <div className="relative z-20 mx-auto max-w-4xl px-6 text-center">
        
        {/* Subtítulo técnico */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs font-semibold uppercase tracking-[0.55em] text-emerald-400 block mb-6 md:text-sm"
        >
          // METAL PROGRESIVO EXPERIMENTAL
        </motion.span>

        {/* Pequeña línea de diseño industrial para equilibrar el espacio */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-[1px] w-12 bg-zinc-700 mx-auto mb-10 origin-center"
        />

        {/* Contenedor de Botones Unificado y Minimalista */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
        >
          <a 
            href="#videos"
            className="w-full sm:w-auto min-w-[200px] border border-emerald-400/50 bg-black/60 backdrop-blur-md px-8 py-4 text-xs font-bold uppercase tracking-[0.35em] text-emerald-400 transition-all duration-300 hover:bg-emerald-400 hover:text-black hover:border-emerald-400 shadow-xl text-center"
          >
            Ver Videos
          </a>

          <a 
            href="#merch"
            className="w-full sm:w-auto min-w-[200px] border border-emerald-400/50 bg-black/60 backdrop-blur-md px-8 py-4 text-xs font-bold uppercase tracking-[0.35em] text-emerald-400 transition-all duration-300 hover:bg-emerald-400 hover:text-black hover:border-emerald-400 shadow-xl text-center"
          >
            Merchandising
          </a>
        </motion.div>
      </div>

    </section>
  );
}