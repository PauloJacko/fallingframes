"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Menu, 
  ShoppingBag, 
  X, 
  ChevronDown, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  ExternalLink 
} from "lucide-react";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMerchOpen, setMobileMerchOpen] = useState(false); 
  const [contactOpen, setContactOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { cartCount } = useCart();

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    setMobileMerchOpen(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("fallingframesband@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
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

          {/* CENTRO - MENÚ ESCRITORIO */}
          <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex xl:gap-12">
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
                    {/* Redirección temporal a /tienda en todas las categorías */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-[11px] uppercase tracking-[0.15em] text-zinc-400">
                      <Link href="/tienda" className="transition hover:text-emerald-400" onClick={closeMenus}>CDs</Link>
                      <Link href="/tienda" className="transition hover:text-emerald-400" onClick={closeMenus}>Vinilos</Link>
                      <Link href="/tienda" className="transition hover:text-emerald-400" onClick={closeMenus}>Poleras</Link>
                      <Link href="/tienda" className="transition hover:text-emerald-400" onClick={closeMenus}>Polerones</Link>
                      <Link href="/tienda" className="transition hover:text-emerald-400" onClick={closeMenus}>Gorros</Link>
                      <Link href="/tienda" className="transition hover:text-emerald-400" onClick={closeMenus}>Tazas</Link>
                      <Link href="/tienda" className="transition hover:text-emerald-400" onClick={closeMenus}>Chapitas</Link>
                      <Link href="/tienda" className="transition hover:text-emerald-400" onClick={closeMenus}>Destapadores</Link>
                      <Link href="/tienda" className="transition hover:text-emerald-400" onClick={closeMenus}>Magnéticos</Link>
                      <Link href="/tienda" className="transition hover:text-emerald-400" onClick={closeMenus}>Llaveros</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* BOTÓN CONTACTO ESCRITORIO */}
            <button
              onClick={() => setContactOpen(true)}
              className="text-xs uppercase tracking-[0.25em] text-zinc-300 transition hover:text-emerald-400 xl:text-sm"
            >
              Contacto
            </button>
          </nav>

          {/* DERECHA - ACCIONES */}
          <div className="flex w-40 shrink-0 items-center justify-end gap-4 sm:w-56 sm:gap-5">
            
            {/* BOTÓN BOLSITA DE COMPRA (Apunta a tienda mientras esté cerrada) */}
            <Link 
              href="/tienda"
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

        {/* MENÚ MÓVIL DROP */}
        {mobileMenuOpen && (
          <div className="border-t border-zinc-900 bg-black/98 px-6 py-8 backdrop-blur-2xl lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="flex flex-col gap-6">
              
              <Link
                href="/musica"
                className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-200 transition hover:text-emerald-400"
                onClick={closeMenus}
              >
                Música & Videos
              </Link>

              <Link
                href="/biografia"
                className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-200 transition hover:text-emerald-400"
                onClick={closeMenus}
              >
                Biografía
              </Link>

              {/* MENU COLAPSABLE DE MERCH EN CELULARES */}
              <div className="border-t border-zinc-900/60 pt-5">
                <button
                  onClick={() => setMobileMerchOpen(!mobileMerchOpen)}
                  className="flex w-full items-center justify-between text-sm font-medium uppercase tracking-[0.25em] text-zinc-200 hover:text-emerald-400"
                >
                  <span>Merch</span>
                  <ChevronDown size={16} className={`text-zinc-500 transition-transform duration-300 ${mobileMerchOpen ? 'rotate-180 text-emerald-400' : ''}`} />
                </button>

                <div className={`grid grid-cols-2 gap-x-4 gap-y-4 text-[11px] uppercase tracking-[0.18em] text-zinc-400 transition-all duration-300 overflow-hidden ${
                  mobileMerchOpen ? "max-h-[500px] mt-5 opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <Link href="/tienda" className="col-span-2 text-emerald-400 font-bold border-b border-zinc-900 pb-2 mb-1" onClick={closeMenus}>
                    Ver toda la tienda →
                  </Link>
                  
                  {/* Redirección temporal a /tienda en móvil */}
                  <Link href="/tienda" className="hover:text-emerald-400" onClick={closeMenus}>CDs</Link>
                  <Link href="/tienda" className="hover:text-emerald-400" onClick={closeMenus}>Vinilos</Link>
                  <Link href="/tienda" className="hover:text-emerald-400" onClick={closeMenus}>Poleras</Link>
                  <Link href="/tienda" className="hover:text-emerald-400" onClick={closeMenus}>Polerones</Link>
                  <Link href="/tienda" className="hover:text-emerald-400" onClick={closeMenus}>Gorros</Link>
                  <Link href="/tienda" className="hover:text-emerald-400" onClick={closeMenus}>Tazas</Link>
                  <Link href="/tienda" className="hover:text-emerald-400" onClick={closeMenus}>Chapitas</Link>
                  <Link href="/tienda" className="hover:text-emerald-400" onClick={closeMenus}>Destapadores</Link>
                  <Link href="/tienda" className="hover:text-emerald-400" onClick={closeMenus}>Magnéticos</Link>
                  <Link href="/tienda" className="hover:text-emerald-400" onClick={closeMenus}>Llaveros</Link>
                </div>
              </div>

              {/* ENLACE DE CONTACTO EN CELULARES */}
              <button
                onClick={() => {
                  closeMenus();
                  setContactOpen(true);
                }}
                className="text-left text-sm font-medium uppercase tracking-[0.25em] text-zinc-200 transition hover:text-emerald-400 border-t border-zinc-900/60 pt-5"
              >
                Contacto
              </button>

            </div>
          </div>
        )}
      </header>

      {/* MODAL DE CONTACTO INTERACTIVO Y PREMIUM */}
      {contactOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setContactOpen(false)}
          />

          <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-emerald-500/30 bg-zinc-950 p-8 text-center shadow-2xl shadow-emerald-500/10 transition-all duration-300 scale-100">
            <div className="absolute -right-16 -top-16 -z-10 h-36 w-36 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 -z-10 h-36 w-36 rounded-full bg-emerald-500/10 blur-3xl" />

            <button 
              onClick={() => setContactOpen(false)}
              className="absolute right-5 top-5 text-zinc-400 hover:text-emerald-400 transition"
              aria-label="Cerrar ventana de contacto"
            >
              <X size={20} />
            </button>

            <div className="mb-6">
              <span className="text-[10px] font-bold tracking-[0.3em] text-emerald-400 uppercase">Falling Frames</span>
              <h3 className="mt-1 text-2xl font-black uppercase tracking-wider text-white">Contacto</h3>
              <div className="mx-auto mt-2 h-[2px] w-12 bg-emerald-500/50" />
            </div>

            <div className="mb-6 rounded-2xl border border-zinc-900 bg-zinc-900/40 p-4">
              <p className="text-[10px] uppercase tracking-widest text-emerald-400/80 font-bold">Booking & Management</p>
              <p className="text-lg font-semibold text-zinc-100 mt-1">Roderick Lagos</p>
            </div>

            <div className="flex flex-col gap-3">
              <a 
                href="https://wa.me/56927789791" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-zinc-900 bg-zinc-900/20 px-4 py-3 hover:border-emerald-500/20 hover:bg-emerald-500/5 transition group"
              >
                <div className="flex items-center gap-3">
                  <Phone className="text-emerald-400" size={18} />
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-wider text-zinc-500">WhatsApp / Móvil</p>
                    <p className="text-sm font-medium text-zinc-200">+56 9 2778 9791</p>
                  </div>
                </div>
                <ExternalLink size={14} className="text-zinc-500 group-hover:text-emerald-400 transition" />
              </a>

              <div className="flex items-center justify-between rounded-xl border border-zinc-900 bg-zinc-900/20 px-4 py-3 hover:border-emerald-500/20 hover:bg-emerald-500/5 transition">
                <a 
                  href="mailto:fallingframesband@gmail.com"
                  className="flex items-center gap-3 flex-1"
                >
                  <Mail className="text-emerald-400" size={18} />
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-wider text-zinc-500">Correo Electrónico</p>
                    <p className="text-sm font-medium text-zinc-200 truncate max-w-[200px] sm:max-w-none">
                      fallingframesband@gmail.com
                    </p>
                  </div>
                </a>
                <button 
                  onClick={copyEmail}
                  className="p-2 text-zinc-500 hover:text-emerald-400 transition"
                  title="Copiar correo al portapapeles"
                >
                  {copied ? (
                    <Check size={16} className="text-emerald-400 animate-pulse" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              <a 
                href="https://instagram.com/fallingframesband" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-zinc-900 bg-zinc-900/20 px-4 py-3 hover:border-emerald-500/20 hover:bg-emerald-500/5 transition group"
              >
                <div className="flex items-center gap-3">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[18px] h-[18px] text-emerald-400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-wider text-zinc-500">Instagram</p>
                    <p className="text-sm font-medium text-zinc-200">@fallingframesband</p>
                  </div>
                </div>
                <ExternalLink size={14} className="text-zinc-500 group-hover:text-emerald-400 transition" />
              </a>

            </div>
          </div>
        </div>
      )}
    </>
  );
}