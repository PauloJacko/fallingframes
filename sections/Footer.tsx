import Image from "next/image";

// --- ICONOS SVG PERSONALIZADOS (Seguros y sin dependencias externas) ---

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  );
}

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.496 17.306c-.22.363-.694.48-1.056.26-2.744-1.677-6.2-2.055-10.27-.123-.413.195-.91.012-1.104-.4-.194-.413-.012-.91.4-1.104 4.457-2.04 8.283-1.614 11.365.27.362.22.48.694.265 1.056zm1.468-3.26c-.276.447-.864.595-1.31.32-3.14-1.93-7.925-2.486-11.64-1.357-.502.15-1.025-.137-1.177-.64-.15-.502.138-1.024.64-1.176 4.25-1.29 9.53-.67 13.164 1.565.45.276.597.864.323 1.31zm.123-3.414C15.545 8.442 9.53 8.242 6.05 9.3c-.542.164-1.11-.147-1.274-.69-.164-.543.147-1.11.69-1.274 4.01-1.217 10.66-.983 14.77 1.46.49.29.65.92.36 1.41-.29.49-.92.65-1.41.36z"/>
    </svg>
  );
}

// --- COMPONENTE PRINCIPAL ---

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black py-16 relative z-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 md:flex-row">

        {/* LEFT */}
        <div className="flex flex-col items-center gap-4 md:items-start">
          <div className="w-[220px] opacity-90">
            <Image
              src="/images/logo-horizontale.png"
              alt="Falling Frames"
              width={500}
              height={120}
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* CENTER */}
        <div className="flex flex-col items-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-zinc-500">
            Síguenos
          </p>

          <div className="flex items-center gap-6 text-zinc-400">
            <a
              href="https://www.youtube.com/@FallingFrames"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-emerald-400"
              aria-label="YouTube"
            >
              <YoutubeIcon className="h-5 w-5" />
            </a>

            <a
              href="https://instagram.com/fallingframesband"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-emerald-400"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>

            <a
              href="https://open.spotify.com/intl-es/artist/4PsE3KrrGLvJhG2Zjc1ucj?si=qk93GBaNSNGYESFEtIUYsA"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-emerald-400"
              aria-label="Spotify"
            >
              <SpotifyIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="text-center md:text-right">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
            © 2026 Falling Frames
          </p>

          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-zinc-700">
            All Rights Reserved
          </p>

          {/* CRÉDITOS: Integración limpia con la estética de terminal de la banda */}
          <p className="mt-6 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500/80">
            Desarrollado por{" "}
            <span className="text-zinc-400 font-bold transition-colors duration-300 hover:text-emerald-400">
              // Paulokko
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}