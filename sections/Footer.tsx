import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 md:flex-row">

        {/* LEFT */}
        <div className="flex flex-col items-center gap-4 md:items-start">
          <div className="w-[220px] opacity-90">
            <Image
              src="/images/logo-horizontal.png"
              alt="Falling Frames"
              width={500}
              height={120}
              className="h-auto w-full"
            />
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
            Experimental Progressive Metal
          </p>
        </div>

        {/* CENTER */}
        <div className="flex flex-col items-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-zinc-500">
            Síguenos
          </p>

          <div className="flex items-center gap-8 text-sm uppercase tracking-[0.25em] text-zinc-400">

            <a
              href="https://youtube.com"
              target="_blank"
              className="transition hover:text-emerald-400"
            >
              YouTube
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="transition hover:text-emerald-400"
            >
              Instagram
            </a>

            <a
              href="https://spotify.com"
              target="_blank"
              className="transition hover:text-emerald-400"
            >
              Spotify
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              className="transition hover:text-emerald-400"
            >
              Facebook
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
        </div>
      </div>
    </footer>
  );
}