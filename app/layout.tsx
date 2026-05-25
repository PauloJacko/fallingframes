// app/layout.tsx
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AmbientAudio from "@/components/AmbientAudio";
import { CartProvider } from "@/app/context/CartContext";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Falling Frames // Sitio Oficial",
    template: "%s | Falling Frames" 
  },
  description: "Sitio oficial de Falling Frames. Metal progresivo experimental, atmósferas oscuras, letras oficiales, tienda y material audiovisual.",
  keywords: [
    "Falling Frames", 
    "Metal progresivo", 
    "Progressive Metal", 
    "Grito Subterráneo", 
    "Música experimental", 
    "Artistas independientes", 
    "Rock experimental Chile"
  ],
  authors: [{ name: "Falling Frames" }],
  
  // Control para motores de búsqueda (Google)
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Falling Frames // Experimental Progressive Metal",
    description: "Explora el cancionero interactivo, líricas oficiales y nuestra tienda de merch. Adéntrate en la experiencia Falling Frames.",
    url: "https://fallingframes.cl",
    siteName: "Falling Frames",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Falling Frames Oficial Banner",
      },
    ],
  },
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