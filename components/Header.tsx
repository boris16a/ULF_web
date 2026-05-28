import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0d0c]/92 backdrop-blur-xl">
      <div className="border-b border-white/[0.07] bg-[#111412] py-2">
        <div className="section-shell text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#cdd7b6] sm:text-xs">
          {siteContent.brand.preOpening}
        </div>
      </div>
      <div className="section-shell flex min-h-[84px] items-center justify-between gap-4 sm:min-h-[92px]">
        <a href="#inicio" className="flex min-w-0 items-center gap-4" aria-label="ULF inicio">
          <span className="relative block h-14 w-14 shrink-0 overflow-hidden sm:h-[76px] sm:w-[76px]">
            <Image
              src={siteContent.brand.mainLogo}
              alt="ULF"
              fill
              priority
              sizes="80px"
              className="object-contain"
            />
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8e9b79]">
              {siteContent.brand.name}
            </span>
            <span className="mt-1 block max-w-[210px] text-xs leading-5 text-[#9f978a]">
              {siteContent.brand.descriptor}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
          {siteContent.nav.map((item) => (
            <a
              className="text-sm font-medium text-[#cfc6b8] transition hover:text-[#f4efe5]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#postular" className="btn-primary min-h-10 shrink-0 px-3 text-xs sm:min-h-11 sm:px-5 sm:text-sm">
          <span className="sm:hidden">Postular</span>
          <span className="hidden sm:inline">{siteContent.cta.primary}</span>
        </a>
      </div>
      <nav className="section-shell flex gap-5 overflow-x-auto border-t border-white/10 py-3 lg:hidden">
        {siteContent.nav.map((item) => (
          <a
            className="shrink-0 text-sm font-medium text-[#c7beb0]"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
