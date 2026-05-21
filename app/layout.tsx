// app/layout.tsx
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AmbientAudio from "@/components/AmbientAudio";
import { CartProvider } from "@/app/context/CartContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Falling Frames",
  description: "Experimental Progressive Metal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-black text-white antialiased">
      <body className="min-h-screen bg-black font-sans">
        
        <CartProvider>
          <Navbar />
          
          {/* El controlador flotante vive aquí a nivel global */}
          <AmbientAudio />
          
          <main>{children}</main>
        </CartProvider>

      </body>
    </html>
  );
}