// app/carrito/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function CarritoCheckoutPage() {
  const { cart, removeFromCart, cartTotal, clearCart } = useCart();

  // Estados locales para el formulario de despacho
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    region: "",
    comuna: "",
    direccion: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSiguientePaso = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos listos para enviar a MP:", { items: cart, comprador: formData });
    alert("¡Lógica de formulario lista! Próximo paso: Integrar botón de MercadoPago.");
  };

  // Si el carrito está vacío, mostramos un estado vacío elegante e iluminado
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#0a0a0c] flex flex-col items-center justify-center text-zinc-400 px-6 relative overflow-hidden">
        {/* Foco de luz de fondo para el estado vacío */}
        <div className="absolute w-[300px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <p className="text-sm font-mono text-emerald-400 z-10 animate-pulse">// CARRITO_VACIO</p>
        <h1 className="text-xl font-bold uppercase mt-2 tracking-wider text-white z-10">Tu bolsa está vacía</h1>
        <p className="text-xs text-zinc-500 mt-2 max-w-xs text-center font-light z-10">
          Parece que aún no has añadido ningún artefacto o indumentaria a tu orden.
        </p>
        <Link href="/tienda" className="mt-8 text-xs uppercase tracking-widest text-black bg-emerald-400 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-300 transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] z-10">
          Explorar la tienda
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0a0a0c] pt-32 pb-24 text-zinc-300 font-sans relative overflow-hidden">
      
      {/* ILUMINACIÓN DE AMBIENTE INTERACTIVA (Gradientes de fondo más potentes) */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-emerald-500/[0.04] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-emerald-500/[0.03] blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(circle_at_50%_-10%,rgba(16,185,129,0.12),transparent_65%)] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <h1 className="text-2xl font-bold uppercase tracking-widest text-white mb-2 dropped-shadow-glow">
          Orden de Compra
        </h1>
        <p className="text-xs font-mono text-emerald-500/80 uppercase tracking-wider mb-10">
          // Paso 1: Datos de Despacho y Revisión
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* COLUMNA IZQUIERDA: FORMULARIO DE DESPACHO (Iluminación sutil en el contenedor) */}
          <form 
            onSubmit={handleSiguientePaso} 
            className="lg:col-span-7 space-y-8 bg-[#0d0d12]/60 border border-zinc-800/60 p-6 md:p-8 rounded-2xl backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden group"
          >
            {/* Destello lineal superior imperceptible en reposo, verde al enfocar */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent group-focus-within:via-emerald-500/50 transition-all duration-500" />
            
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                01. Datos del Comprador
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-mono">Nombre Completo *</label>
                  <input required type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} className="bg-[#121217] border border-zinc-800 rounded-lg p-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/60 focus:bg-[#14141c] focus:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300" placeholder="Ej: Juan Pérez" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-mono">Correo Electrónico *</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="bg-[#121217] border border-zinc-800 rounded-lg p-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/60 focus:bg-[#14141c] focus:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300" placeholder="juan@email.com" />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-mono">Teléfono de Contacto *</label>
                  <input required type="tel" name="telefono" value={formData.telefono} onChange={handleInputChange} className="bg-[#121217] border border-zinc-800 rounded-lg p-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/60 focus:bg-[#14141c] focus:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300" placeholder="+569 1234 5678" />
                </div>
              </div>
            </div>

            <div className="w-full h-[1px] bg-zinc-900/60" />

            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                02. Dirección de Envío
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-mono">Región *</label>
                  <input required type="text" name="region" value={formData.region} onChange={handleInputChange} className="bg-[#121217] border border-zinc-800 rounded-lg p-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/60 focus:bg-[#14141c] focus:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300" placeholder="Región Metropolitana" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-mono">Comuna *</label>
                  <input required type="text" name="comuna" value={formData.comuna} onChange={handleInputChange} className="bg-[#121217] border border-zinc-800 rounded-lg p-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/60 focus:bg-[#14141c] focus:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300" placeholder="Santiago Centro" />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-mono">Calle, Número, Departamento/Casa *</label>
                  <input required type="text" name="direccion" value={formData.direccion} onChange={handleInputChange} className="bg-[#121217] border border-zinc-800 rounded-lg p-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/60 focus:bg-[#14141c] focus:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300" placeholder="Av. Providencia 1234, depto 402" />
                </div>
              </div>
            </div>

            {/* Botón con efecto de brillo radiante (Glow) */}
            <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_35px_rgba(16,185,129,0.45)] transform hover:-translate-y-0.5">
              Continuar al Pago
            </button>
          </form>

          {/* COLUMNA DERECHA: DESGLOSE COMPRA (Contenedor con borde iluminado sutil) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <div className="bg-[#0f0f15]/90 border border-emerald-500/10 rounded-2xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-md">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400">Resumen de la Orden</h2>
                <button type="button" onClick={clearCart} className="text-[10px] uppercase tracking-wider text-zinc-500 hover:text-red-400 transition-colors font-mono">
                  [Vaciar]
                </button>
              </div>

              {/* LISTADO DE ITEMS */}
              <div className="divide-y divide-zinc-900 max-h-[340px] overflow-y-auto pr-2 custom-scrollbar">
                {cart.map((item) => (
                  <div key={item.variantId} className="py-4 flex gap-4 items-center justify-between first:pt-0 last:pb-0 group/item">
                    <div className="flex items-center gap-3">
                      <div className="relative w-14 h-14 rounded-xl bg-[#14141b] border border-zinc-800/80 flex-shrink-0 p-1 flex items-center justify-center group-hover/item:border-emerald-500/30 transition-colors duration-300">
                        <Image src={item.src} alt={item.name} fill className="object-contain p-1.5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xs text-zinc-100 uppercase font-medium tracking-wide truncate max-w-[170px] md:max-w-[210px] group-hover/item:text-white transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-[10px] font-mono text-zinc-500 mt-0.5">
                          Cant: {item.quantity} x <span className="text-zinc-400">${item.price.toLocaleString("es-CL")}</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <span className="text-xs text-emerald-400 font-mono font-medium">
                        ${(item.price * item.quantity).toLocaleString("es-CL")}
                      </span>
                      <button type="button" onClick={() => removeFromCart(item.variantId)} className="text-zinc-600 hover:text-red-400 text-sm p-1 transition-colors" title="Eliminar ítem">
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full h-[1px] bg-zinc-900/80 my-6" />

              {/* DESGLOSE FINAL DE PRECIOS */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between text-zinc-500">
                  <span>SUBTOTAL:</span>
                  <span className="text-zinc-300">${cartTotal.toLocaleString("es-CL")} CLP</span>
                </div>
                <div className="flex justify-between text-zinc-500">
                  <span>DESPACHO:</span>
                  <span className="text-emerald-400 uppercase text-[10px] tracking-widest font-bold drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]">
                    Gratis (Stgo & Regiones)
                  </span>
                </div>
                <div className="w-full h-[1px] border-t border-dashed border-zinc-800 my-2" />
                <div className="flex justify-between text-sm font-sans pt-2">
                  <span className="font-bold text-white uppercase tracking-wider">Total Final:</span>
                  <span className="font-bold text-emerald-400 text-lg drop-shadow-[0_0_12px_rgba(52,211,153,0.4)]">
                    ${cartTotal.toLocaleString("es-CL")} CLP
                  </span>
                </div>
              </div>

            </div>

            {/* NOTA DE SEGURIDAD (Con sutil resplandor esmeralda) */}
            <div className="text-center p-4 bg-emerald-950/[0.04] border border-emerald-500/10 rounded-xl shadow-[inset_0_1px_20px_rgba(16,185,129,0.02)]">
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center justify-center gap-2">
                <span className="text-emerald-400">🔒</span> Transacción Encriptada vía MercadoPago
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}