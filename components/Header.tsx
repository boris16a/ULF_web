import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#f7efe1]/92 backdrop-blur-xl">
      <div className="bg-[#201e1a] py-3 sm:py-3.5">
        <div className="section-shell text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#e8dccb] sm:text-[13px]">
          {siteContent.brand.preOpening}
        </div>
      </div>
      <div className="section-shell flex min-h-[84px] items-center justify-between gap-4 sm:min-h-[92px]">
        <a href="#inicio" className="flex min-w-0 items-center gap-4" aria-label="ULF inicio">
          <span className="relative block h-[58px] w-[112px] shrink-0 overflow-hidden sm:h-[76px] sm:w-[148px]">
            <Image
              src={siteContent.brand.headerLogo}
              alt="ULF"
              fill
              priority
              sizes="(min-width: 640px) 148px, 112px"
              className="object-contain"
            />
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block max-w-[170px] text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-[#6f675d]">
              {siteContent.brand.headerDescriptor}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
          {siteContent.nav.map((item) => (
            <a
              className="text-sm font-medium text-[#3b3730] transition hover:text-[#11100e]"
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
      <nav className="section-shell flex gap-5 overflow-x-auto py-3 lg:hidden">
        {siteContent.nav.map((item) => (
          <a
            className="shrink-0 text-sm font-medium text-[#4e473e]"
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
