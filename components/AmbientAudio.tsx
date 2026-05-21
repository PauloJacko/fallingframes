// components/AmbientAudio.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";

export default function AmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/audio/grito-subterraneo.mp3");
    audio.loop = true; 
    audio.volume = 0.6;
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      let volume = audioRef.current.volume;
      const fadeOut = setInterval(() => {
        if (audioRef.current && volume > 0.05) {
          volume -= 0.05;
          audioRef.current.volume = Math.max(0, volume);
        } else {
          clearInterval(fadeOut);
          audioRef.current?.pause();
          setIsPlaying(false);
        }
      }, 30);
    } else {
      audioRef.current.volume = 0;
      audioRef.current.play().catch((err) => {
        console.log("Interacción requerida:", err);
      });
      setIsPlaying(true);

      let volume = 0;
      const fadeIn = setInterval(() => {
        if (audioRef.current && volume < 0.6) {
          volume += 0.05;
          audioRef.current.volume = Math.min(0.6, volume);
        } else {
          clearInterval(fadeIn);
        }
      }, 50);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 font-mono text-[10px] tracking-widest uppercase">
      <button
        onClick={toggleAudio}
        className={`flex items-center bg-[#0a0a0c]/90 border rounded-xl backdrop-blur-md transition-all duration-500 ease-out p-3 group relative overflow-hidden ${
          isPlaying 
            ? "border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.25)] text-emerald-400 max-w-[320px]" 
            : "border-zinc-800/80 text-zinc-500 hover:border-zinc-600 max-w-[185px]" 
        }`}
      >
        <div className={`absolute inset-0 bg-gradient-to-r from-emerald-500/[0.03] to-transparent pointer-events-none transition-opacity duration-500 ${isPlaying ? "opacity-100" : "opacity-0"}`} />

        <div className="flex items-center gap-3 relative z-10 w-full">
          
          {/* ANIMACIÓN: Ecualizador */}
          <div className="flex items-end gap-[2px] h-3 w-4 flex-shrink-0 mb-[1px]">
            <span className={`w-[2px] bg-current rounded-full transition-all ${isPlaying ? "animate-[bounce_0.6s_infinite_0.1s]" : "h-1"}`} />
            <span className={`w-[2px] bg-current rounded-full transition-all ${isPlaying ? "animate-[bounce_0.6s_infinite_0.3s]" : "h-2"}`} />
            <span className={`w-[2px] bg-current rounded-full transition-all ${isPlaying ? "animate-[bounce_0.6s_infinite_0.0s]" : "h-1.5"}`} />
            <span className={`w-[2px] bg-current rounded-full transition-all ${isPlaying ? "animate-[bounce_0.6s_infinite_0.2s]" : "h-2.5"}`} />
          </div>

          {/* CONTENIDO TEXTUAL */}
          <div className="flex items-center overflow-hidden transition-all duration-500 ease-out whitespace-nowrap">
            {isPlaying ? (
              <div className="flex flex-col items-start leading-none gap-1 pr-2">
                <span className="text-[9px] text-zinc-500 font-medium tracking-wider">
                  SINGLE
                </span>
                <span className="text-[10px] text-white font-bold tracking-widest flex items-center gap-1.5">
                  Grito Subterráneo <span className="text-[9px] text-emerald-400 font-normal opacity-80">[01:55 Outro]</span>
                </span>
              </div>
            ) : (
              <span className="hover-glitch-soft font-bold tracking-widest text-zinc-400 group-hover:text-emerald-400 transition-colors pl-1 animate-pulse">
                ▶ ESCUCHAR SINGLE
              </span>
            )}
          </div>

        </div>

        {/* TOOLTIP */}
        <span className="absolute bottom-full left-0 mb-2 bg-zinc-950 border border-zinc-800 text-zinc-400 text-[9px] px-2.5 py-1 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap tracking-wider shadow-xl">
          {isPlaying ? "[ Pausar Transmisión ]" : "[ Escuchar Grito Subterráneo ]"}
        </span>
      </button>
    </div>
  );
}