import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer className="bg-transparent py-12">
      <div className="section-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <div className="inline-flex bg-[#f4efe5]/75 p-3">
            <Image
              src={siteContent.brand.docsLogo}
              alt="ULF"
              width={178}
              height={100}
              className="h-auto w-40 object-contain"
            />
          </div>
          <p className="mt-5 text-sm font-semibold text-[#4e473e]">
            {siteContent.brand.name} · {siteContent.brand.descriptor}
          </p>
          <p className="mt-3 text-xs leading-5 text-[#6f675d]">{siteContent.brand.address}</p>
        </div>
        <nav className="flex flex-wrap gap-5 text-sm text-[#4e473e]" aria-label="Footer">
          <a className="transition hover:text-[#171614]" href="#socios-fundadores">
            Socios Fundadores
          </a>
          <a className="transition hover:text-[#171614]" href="#que-significa-ulf">
            Qué es ULF
          </a>
          <a className="transition hover:text-[#171614]" href="#postular">
            Postular
          </a>
        </nav>
      </div>
    </footer>
  );
}
