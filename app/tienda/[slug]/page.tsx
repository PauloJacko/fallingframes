"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { fullCatalog } from "../data";
import { useCart } from "@/app/context/CartContext";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function DetalleProductoPage({ params }: PageProps) {
  const { slug } = use(params);
  const { addToCart, setIsCartOpen } = useCart();

  const producto = fullCatalog.find((item) => item.slug === slug);

  // Estados locales alineados correctamente dentro del componente
  const [varianteSeleccionada, setVarianteSeleccionada] = useState(producto?.variants[0]);
  const [tallaSeleccionada, setTallaSeleccionada] = useState<string>("M");
  const [mostrarNotificacion, setMostrarNotificacion] = useState(false);

  if (!producto || !varianteSeleccionada) {
    return (
      <div className="min-h-screen bg-[#0a0a0c] flex flex-col items-center justify-center text-zinc-400">
        <p className="text-sm font-mono text-emerald-400">// ERROR 404</p>
        <h1 className="text-xl font-bold uppercase mt-2">Artefacto No Encontrado</h1>
        <Link href="/tienda" className="mt-6 text-xs uppercase tracking-widest text-white border border-zinc-800 px-4 py-2 rounded hover:border-emerald-500 transition-colors">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  const handleAgregarAlCarrito = () => {
    const baseIdNumeric = producto.id && typeof producto.id === "number" 
      ? producto.id 
      : Math.abs(producto.mainName.split("").reduce((hash, char) => (hash << 5) - hash + char.charCodeAt(0), 0));

    const uniqueVariantId = producto.type === "Indumentaria"
      ? `${varianteSeleccionada.id}-${tallaSeleccionada}`
      : varianteSeleccionada.id;

    const nombreCompleto = producto.type === "Indumentaria"
      ? `${producto.mainName} - ${varianteSeleccionada.name} (${tallaSeleccionada})`
      : `${producto.mainName} - ${varianteSeleccionada.name}`;

    addToCart({
      id: baseIdNumeric,
      variantId: uniqueVariantId,
      name: nombreCompleto,
      price: varianteSeleccionada.price,
      src: varianteSeleccionada.src,
      quantity: 1,
      talla: producto.type === "Indumentaria" ? tallaSeleccionada : undefined
    });

    // Mensaje de éxito
    setMostrarNotificacion(true);

    setTimeout(() => {
      setMostrarNotificacion(false);
      setIsCartOpen(true);
    }, 3000);
  };

  return (
    <section className="min-h-screen bg-[#0a0a0c] pt-40 pb-24 text-zinc-300 font-sans relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(circle_at_50%_-20%,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none" />

      {/* NOTIFICACIÓN EMERGENTE FLOTANTE */}
      <div className={`fixed bottom-8 right-8 z-50 transform transition-all duration-500 ease-out ${
        mostrarNotificacion ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"
      }`}>
        <div className="rounded-xl border border-emerald-500/30 bg-black/95 px-6 py-4 shadow-2xl backdrop-blur-xl flex flex-col gap-1 max-w-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
            <span>✓</span> Operación Exitosa
          </p>
          <p className="text-[11px] text-zinc-300 tracking-wide font-light">
            Este producto fue agregado con éxito al carrito de compra.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 relative z-10">
        
        <Link href="/tienda" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 hover:text-emerald-400 transition-colors mb-12">
          ← Volver a La Falling Tienda
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* FOTO CON DISEÑO "MODO ESTUDIO / VISOR TÉCNICO" */}
          <div className="relative aspect-square w-full rounded-2xl bg-[#0b0b0e] border border-zinc-800/80 flex flex-col items-center justify-center p-8 shadow-2xl overflow-hidden group">
            
            {/* FONTO TÉCNICO: Micro cuadrícula matemática de fondo */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.15] pointer-events-none" />
            
            {/* LÍNEAS DE ESCANEO CRT (Finitas y tenues de TV analógica) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_4px,3px_100%] opacity-40 pointer-events-none" />

            {/* CRUCES DE REGISTRO MILIMÉTRICAS EN LAS 4 ESQUINAS */}
            <span className="absolute top-3 left-3 font-mono text-[10px] text-emerald-500/40 select-none font-light">+</span>
            <span className="absolute top-3 right-3 font-mono text-[10px] text-emerald-500/40 select-none font-light">+</span>
            <span className="absolute bottom-3 left-3 font-mono text-[10px] text-emerald-500/40 select-none font-light">+</span>
            <span className="absolute bottom-3 right-3 font-mono text-[10px] text-emerald-500/40 select-none font-light">+</span>

            {/* BANNER DE DIAGNÓSTICO SUPERIOR */}
            <div className="absolute top-3 left-8 right-8 flex justify-between items-center font-mono text-[9px] tracking-widest text-zinc-600 border-b border-zinc-900/50 pb-1.5 select-none">
              <span>SYS.LOC // FF_PRD_MATRIX</span>
              <span className="text-emerald-500/50 animate-pulse">● RES_TRUE</span>
            </div>

            {/* CONTENEDOR DE LA IMAGEN */}
            <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
              <Image
                src={varianteSeleccionada.src}
                alt={varianteSeleccionada.name}
                fill
                priority
                className="object-contain p-6"
              />
            </div>

            {/* MARCADOR DE COORDENADA INFERIOR */}
            <div className="absolute bottom-3 left-8 right-8 flex justify-between items-center font-mono text-[9px] tracking-widest text-zinc-600 border-t border-zinc-900/50 pt-1.5 select-none">
              <span>REF: {slug?.toUpperCase() || "UNKNOWN"}</span>
              <span>[ 44.1 kHz / 24-BIT ]</span>
            </div>

          </div>

          {/* DETALLES Y COMPRA */}
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 bg-zinc-900 text-zinc-400 rounded border border-zinc-800">
                  {producto.type}
                </span>
                <h1 className="text-2xl font-bold uppercase tracking-wide text-white mt-4 md:text-3xl">
                  {producto.mainName}
                </h1>
                <p className="text-2xl font-light text-emerald-400 tracking-wide mt-3">
                  ${varianteSeleccionada.price.toLocaleString("es-CL")} CLP
                </p>
              </div>

              <div className="w-full h-[1px] bg-zinc-900" />

              {/* LISTA DE VARIANTES */}
              {producto.hasVariants && (
                <div className="space-y-3">
                  <label className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">
                    Selecciona el Diseño:
                  </label>
                  <div className="flex flex-col gap-2">
                    {producto.variants.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setVarianteSeleccionada(v)}
                        className={`w-full text-left p-3 rounded-lg border text-xs tracking-wide uppercase transition-all flex justify-between items-center ${
                          varianteSeleccionada.id === v.id
                            ? "border-emerald-500 bg-emerald-950/20 text-white font-medium"
                            : "border-zinc-900 bg-zinc-950/40 text-zinc-400 hover:border-zinc-800"
                        }`}
                      >
                        <span>{v.name}</span>
                        <span className={varianteSeleccionada.id === v.id ? "text-emerald-400" : "text-zinc-600"}>
                          ${v.price.toLocaleString("es-CL")}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* TALLAS SI ES ROPA */}
              {producto.type === "Indumentaria" && (
                <div className="space-y-3">
                  <label className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">Talla:</label>
                  <div className="flex gap-2">
                    {["S", "M", "L", "XL"].map((talla) => (
                      <button 
                        key={talla} 
                        onClick={() => setTallaSeleccionada(talla)}
                        className={`w-10 h-10 rounded border text-xs transition-colors ${
                          tallaSeleccionada === talla 
                            ? "border-emerald-500 bg-emerald-950/30 text-white font-bold" 
                            : "border-zinc-900 bg-zinc-950/40 text-zinc-300 hover:border-emerald-500 hover:text-white"
                        }`}
                      >
                        {talla}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="hover-glitch-soft mt-8 pt-6 border-t border-zinc-900/60">
              <button 
                className="hover-glitch-soft w-full bg-emerald-600 hover:bg-emerald-500 text-black font-semibold text-xs uppercase tracking-widest py-4 rounded-xl transition-all shadow-[0_4px_20px_rgba(16,185,129,0.2)]"
                onClick={handleAgregarAlCarrito}
              >
                Agregar al Carrito
              </button>
              <p className="text-[10px] font-mono text-zinc-600 text-center uppercase tracking-wider mt-3">
                Estado: {producto.status}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}