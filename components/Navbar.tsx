// components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, ShoppingBag, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMerchOpen, setMobileMerchOpen] = useState(false); // <-- Nuevo estado para controlar el Merch en celulares
  const { cartCount } = useCart();

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    setMobileMerchOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-900 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
        
        {/* IZQUIERDA - LOGO */}
        <div className="flex w-40 shrink-0 items-center justify-start sm:w-56">
          <Link href="/" onClick={closeMenus}>
            <Image
              src="/images/logo-horizontale.png"
              alt="Falling Frames"
              width={180}
              height={60}
              priority
              className="h-auto w-full object-contain"
            />
          </Link>
        </div>

        {/* CENTRO - MENÚ ESCRITORIO (Se oculta en celulares de forma correcta) */}
        <nav className="hidden flex-1 items-center justify-center gap-10 lg:flex xl:gap-14">
          <Link
            href="/musica"
            className="text-xs uppercase tracking-[0.25em] text-zinc-300 transition hover:text-emerald-400 xl:text-sm"
          >
            Música & Videos
          </Link>

          <Link
            href="/biografia"
            className="text-xs uppercase tracking-[0.25em] text-zinc-300 transition hover:text-emerald-400 xl:text-sm"
          >
            Biografía
          </Link>

          {/* DROPDOWN MERCH ESCRITORIO */}
          <div
            className="relative py-2"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link 
              href="/tienda" 
              className="flex items-center gap-1 text-xs uppercase tracking-[0.25em] text-zinc-300 transition hover:text-emerald-400 xl:text-sm"
            >
              Merch
              <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </Link>

            {dropdownOpen && (
              <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-2">
                <div className="rounded-2xl border border-emerald-500/20 bg-black/95 p-5 shadow-2xl backdrop-blur-xl">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-[11px] uppercase tracking-[0.15em] text-zinc-400">
                    <Link href="/tienda/cd-grito-subterraneo" className="transition hover:text-emerald-400" onClick={closeMenus}>CDs</Link>
                    <Link href="/tienda/vinilo-falling-continuous" className="transition hover:text-emerald-400" onClick={closeMenus}>Vinilos</Link>
                    <Link href="/tienda/poleras" className="transition hover:text-emerald-400" onClick={closeMenus}>Poleras</Link>
                    <Link href="/tienda/polerones" className="transition hover:text-emerald-400" onClick={closeMenus}>Polerones</Link>
                    <Link href="/tienda/gorros" className="transition hover:text-emerald-400" onClick={closeMenus}>Gorros</Link>
                    <Link href="/tienda/tazas" className="transition hover:text-emerald-400" onClick={closeMenus}>Tazas</Link>
                    <Link href="/tienda/chapitas" className="transition hover:text-emerald-400" onClick={closeMenus}>Chapitas</Link>
                    <Link href="/tienda/destapadores" className="transition hover:text-emerald-400" onClick={closeMenus}>Destapadores</Link>
                    <Link href="/tienda/magneticos" className="transition hover:text-emerald-400" onClick={closeMenus}>Magnéticos</Link>
                    <Link href="/tienda/llaveros" className="transition hover:text-emerald-400" onClick={closeMenus}>Llaveros</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* DERECHA - ACCIONES */}
        <div className="flex w-40 shrink-0 items-center justify-end gap-4 sm:w-56 sm:gap-5">
          
          {/* BOTÓN BOLSITA DE COMPRA */}
          <Link 
            href="/carrito"
            onClick={closeMenus}
            className="relative p-2 text-zinc-300 transition hover:text-emerald-400" 
            aria-label="Ver mi carrito de compras"
          >
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 text-[10px] font-bold text-black animate-pulse">
                {cartCount}
              </span>
            )}
          </Link>

          {/* BOTÓN MÓVIL (Las 3 líneas) */}
          <button
            className="p-2 text-zinc-300 transition hover:text-emerald-400 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL DROP (REDIEÑADO Y OPTIMIZADO PARA SMARTPHONES) */}
      {mobileMenuOpen && (
        <div className="border-t border-zinc-900 bg-black/98 px-6 py-8 backdrop-blur-2xl lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="flex flex-col gap-6">
            
            {/* Enlace 1 */}
            <Link
              href="/musica"
              className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-200 transition hover:text-emerald-400"
              onClick={closeMenus}
            >
              Música & Videos
            </Link>

            {/* Enlace 2 */}
            <Link
              href="/biografia"
              className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-200 transition hover:text-emerald-400"
              onClick={closeMenus}
            >
              Biografía
            </Link>

            {/* Enlace 3: MENU COLAPSABLE DE MERCH (Mismo comportamiento que escritorio) */}
            <div className="border-t border-zinc-900/60 pt-5">
              <button
                onClick={() => setMobileMerchOpen(!mobileMerchOpen)}
                className="flex w-full items-center justify-between text-sm font-medium uppercase tracking-[0.25em] text-zinc-200 hover:text-emerald-400"
              >
                <span>Merch</span>
                <ChevronDown size={16} className={`text-zinc-500 transition-transform duration-300 ${mobileMerchOpen ? 'rotate-180 text-emerald-400' : ''}`} />
              </button>

              {/* Sub-lista de categorías de la Tienda */}
              <div className={`grid grid-cols-2 gap-x-4 gap-y-4 text-[11px] uppercase tracking-[0.18em] text-zinc-400 transition-all duration-300 overflow-hidden ${
                mobileMerchOpen ? "max-h-[500px] mt-5 opacity-100" : "max-h-0 opacity-0"
              }`}>
                {/* Enlace principal de la tienda destacado en verde */}
                <Link href="/tienda" className="col-span-2 text-emerald-400 font-bold border-b border-zinc-900 pb-2 mb-1" onClick={closeMenus}>
                  Ver toda la tienda →
                </Link>
                
                <Link href="/tienda/cd-grito-subterraneo" className="hover:text-emerald-400" onClick={closeMenus}>CDs</Link>
                <Link href="/tienda/vinilo-falling-continuous" className="hover:text-emerald-400" onClick={closeMenus}>Vinilos</Link>
                <Link href="/tienda/poleras" className="hover:text-emerald-400" onClick={closeMenus}>Poleras</Link>
                <Link href="/tienda/polerones" className="hover:text-emerald-400" onClick={closeMenus}>Polerones</Link>
                <Link href="/tienda/gorros" className="hover:text-emerald-400" onClick={closeMenus}>Gorros</Link>
                <Link href="/tienda/tazas" className="hover:text-emerald-400" onClick={closeMenus}>Tazas</Link>
                <Link href="/tienda/chapitas" className="hover:text-emerald-400" onClick={closeMenus}>Chapitas</Link>
                <Link href="/tienda/destapadores" className="hover:text-emerald-400" onClick={closeMenus}>Destapadores</Link>
                <Link href="/tienda/magneticos" className="hover:text-emerald-400" onClick={closeMenus}>Magnéticos</Link>
                <Link href="/tienda/llaveros" className="hover:text-emerald-400" onClick={closeMenus}>Llaveros</Link>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}