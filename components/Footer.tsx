import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer className="border-t border-steel-dark/35 bg-graphite py-12">
      <div className="section-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <div className="inline-flex">
            <Image
              src={siteContent.brand.headerLogo}
              alt="ULF"
              width={160}
              height={160}
              className="h-auto w-28 object-contain opacity-90"
            />
          </div>
          <p className="mt-5 text-sm font-semibold text-silver-cold">
            {siteContent.brand.name} · {siteContent.brand.descriptor}
          </p>
          <p className="mt-3 text-xs leading-5 text-steel-light">{siteContent.brand.address}</p>
        </div>
        <nav className="flex flex-wrap gap-5 text-sm text-silver-cold" aria-label="Footer">
          <a className="transition hover:text-white" href="#socios-fundadores">
            Socios Fundadores
          </a>
          <a className="transition hover:text-white" href="#que-significa-ulf">
            Qué es ULF
          </a>
          <a className="transition hover:text-white" href="#postular">
            Postular
          </a>
        </nav>
      </div>
    </footer>
  );
}
