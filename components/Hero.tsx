import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#f7efe1]">
      <div className="section-shell relative grid gap-9 py-12 sm:py-16 lg:min-h-[700px] lg:grid-cols-[1fr_1.04fr] lg:items-center lg:gap-14 lg:py-14">
        <div className="relative z-10 max-w-[640px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-[#3f513f]">
            {siteContent.hero.kicker}
          </p>
          <h1 className="whitespace-pre-line text-[42px] font-black leading-[0.98] text-[#171614] sm:text-6xl lg:text-[64px] xl:text-[68px]">
            {siteContent.hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4e473e] sm:text-xl">
            {siteContent.hero.subtitle}
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
            <div>
              <a href="#postular" className="btn-primary w-full">
                {siteContent.cta.primary}
              </a>
              <p className="mt-3 whitespace-pre-line text-xs leading-5 text-[#6f675d]">
                {siteContent.hero.primaryMicrocopy}
              </p>
            </div>
            <div>
              <a href="#socios-fundadores" className="btn-secondary w-full">
                {siteContent.cta.secondary}
              </a>
              <p className="mt-3 text-xs leading-5 text-[#6f675d]">
                {siteContent.hero.secondaryMicrocopy}
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-[#6f675d]">{siteContent.hero.note}</p>
        </div>

        <div className="relative z-10">
          <div className="surface-card relative aspect-video overflow-hidden bg-[#201e1a]">
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-95 contrast-95 saturate-[0.86]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={siteContent.brand.heroImage}
              aria-label="Animación visual de identidad ULF"
            >
              <source src={siteContent.brand.heroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#201e1a]/36 via-transparent to-transparent" />
            <div className="absolute inset-0 border border-white/10" />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {siteContent.hero.metrics.map((item) => (
              <div className="border border-[#1d1b18]/10 bg-[#fff8ed]/80 px-4 py-3" key={item}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3f513f]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-shell pb-14 sm:pb-18">
        <div className="image-panel aspect-[16/7]">
          <Image
            src={siteContent.brand.heroImage}
            alt="Persona preparándose para entrenar en un entorno ULF sobrio y estructurado"
            fill
            priority
            sizes="(min-width: 1180px) 1180px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
