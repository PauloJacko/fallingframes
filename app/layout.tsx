import type { Metadata } from "next";
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}