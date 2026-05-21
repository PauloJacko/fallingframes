"use client";

import Image from "next/image";
import { Menu, ShoppingBag, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Función auxiliar para cerrar menús al hacer click en un enlace
  const closeMenus = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-900 bg-black/80 backdrop-blur-xl">
      {/* CONTENEDOR PRINCIPAL: justify-between asegura la separación Left-Center-Right */}
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
        
      {/* IZQUIERDA - LOGO */}
      <div className="flex w-48 shrink-0 items-center justify-start sm:w-56">
        <a href="/" onClick={closeMenus}>
          <Image
            src="/images/logo-horizontale.png"
            alt="Falling Frames"
            width={180}
            height={60}
            priority
            className="h-auto w-full object-contain"
          />
        </a>
      </div>

        {/* CENTRO - MENÚ ESCRITORIO */}
        <nav className="hidden flex-1 items-center justify-center gap-10 lg:flex xl:gap-14">
          <a
            href="/musica"
            className="text-xs uppercase tracking-[0.25em] text-zinc-300 transition hover:text-emerald-400 xl:text-sm"
          >
            Música & Videos
          </a>

          <a
            href="/biografia"
            className="text-xs uppercase tracking-[0.25em] text-zinc-300 transition hover:text-emerald-400 xl:text-sm"
          >
            Biografía
          </a>

          {/* DROPDOWN MERCH */}
          <div
            className="relative py-2"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-xs uppercase tracking-[0.25em] text-zinc-300 transition hover:text-emerald-400 xl:text-sm">
              Merch
              <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-2">
                <div className="rounded-2xl border border-emerald-500/20 bg-black/95 p-5 shadow-2xl backdrop-blur-xl">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-[11px] uppercase tracking-[0.15em] text-zinc-400">
                    <a href="#" className="transition hover:text-emerald-400" onClick={closeMenus}>CD</a>
                    <a href="#" className="transition hover:text-emerald-400" onClick={closeMenus}>Vinilos</a>
                    <a href="#" className="transition hover:text-emerald-400" onClick={closeMenus}>Tazas</a>
                    <a href="#" className="transition hover:text-emerald-400" onClick={closeMenus}>Chapitas</a>
                    <a href="#" className="transition hover:text-emerald-400" onClick={closeMenus}>Destapadores</a>
                    <a href="#" className="transition hover:text-emerald-400" onClick={closeMenus}>Gorros</a>
                    <a href="#" className="transition hover:text-emerald-400" onClick={closeMenus}>Poleras</a>
                    <a href="#" className="transition hover:text-emerald-400" onClick={closeMenus}>Polerones</a>
                    <a href="#" className="transition hover:text-emerald-400" onClick={closeMenus}>Magnéticos</a>
                    <a href="#" className="transition hover:text-emerald-400" onClick={closeMenus}>Llaveros</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* DERECHA - ACCIONES */}
        <div className="flex w-48 shrink-0 items-center justify-end gap-5 sm:w-56">
          {/* CARRITO */}
          <button className="relative p-2 text-zinc-300 transition hover:text-emerald-400" aria-label="Carrito de compras">
            <ShoppingBag size={22} />
            <span className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 text-[10px] font-bold text-black animate-pulse">
              0
            </span>
          </button>

          {/* BOTÓN MOVIL */}
          <button
            className="p-2 text-zinc-300 transition hover:text-emerald-400 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL DROP */}
      {mobileMenuOpen && (
        <div className="border-t border-zinc-900 bg-black/95 px-6 py-6 backdrop-blur-xl lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="flex flex-col gap-6">
            <a
              href="#videos"
              className="text-sm uppercase tracking-[0.25em] text-zinc-300 transition hover:text-emerald-400"
              onClick={closeMenus}
            >
              Música & Videos
            </a>

            <a
              href="/biografia"
              className="text-sm uppercase tracking-[0.25em] text-zinc-300 transition hover:text-emerald-400"
              onClick={closeMenus}
            >
              Biografía
            </a>

            <div className="border-t border-zinc-800 pt-6">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-emerald-400 font-semibold">
                Merch
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs uppercase tracking-[0.2em] text-zinc-400">
                <a href="#" className="hover:text-emerald-400" onClick={closeMenus}>CD</a>
                <a href="#" className="hover:text-emerald-400" onClick={closeMenus}>Vinilos</a>
                <a href="#" className="hover:text-emerald-400" onClick={closeMenus}>Tazas</a>
                <a href="#" className="hover:text-emerald-400" onClick={closeMenus}>Chapitas</a>
                <a href="#" className="hover:text-emerald-400" onClick={closeMenus}>Destapadores</a>
                <a href="#" className="hover:text-emerald-400" onClick={closeMenus}>Gorros</a>
                <a href="#" className="hover:text-emerald-400" onClick={closeMenus}>Poleras</a>
                <a href="#" className="hover:text-emerald-400" onClick={closeMenus}>Polerones</a>
                <a href="#" className="hover:text-emerald-400" onClick={closeMenus}>Magnéticos</a>
                <a href="#" className="hover:text-emerald-400" onClick={closeMenus}>Llaveros</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}