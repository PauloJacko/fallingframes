import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
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

        <Navbar />

        <main>{children}</main>

      </body>
    </html>
  );
}