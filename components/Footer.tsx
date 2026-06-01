import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090b0a] py-12">
      <div className="section-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <div className="inline-flex border border-white/10 bg-[#f4efe5] p-3">
            <Image
              src={siteContent.brand.docsLogo}
              alt="ULF"
              width={178}
              height={100}
              className="h-auto w-40 object-contain"
            />
          </div>
          <p className="mt-5 text-sm text-[#b8b0a3]">{siteContent.brand.descriptor}</p>
          <p className="mt-3 text-xs text-[#837b70]">{siteContent.brand.preOpening}</p>
        </div>
        <nav className="flex flex-wrap gap-5 text-sm text-[#c7beb0]" aria-label="Footer">
          <a className="transition hover:text-[#f4efe5]" href="#socios-fundadores">
            Socios Fundadores
          </a>
          <a className="transition hover:text-[#f4efe5]" href="#que-es">
            Qué es ULF
          </a>
          <a className="transition hover:text-[#f4efe5]" href="#metodo">
            Método
          </a>
          <a className="transition hover:text-[#f4efe5]" href="#formatos">
            Formatos
          </a>
          <a className="transition hover:text-[#f4efe5]" href="#postular">
            Postular
          </a>
        </nav>
      </div>
    </footer>
  );
}
