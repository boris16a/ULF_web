import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-transparent">
      <div className="section-shell relative grid gap-9 py-12 sm:py-16 lg:min-h-[700px] lg:grid-cols-[1fr_1.04fr] lg:items-center lg:gap-14 lg:py-14">
        <div className="relative z-10 max-w-[640px]">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.26em] text-steel-light">
            {siteContent.hero.kicker}
          </p>
          <h1 className="whitespace-pre-line text-[42px] font-black leading-[0.98] text-foreground sm:text-6xl lg:text-[64px] xl:text-[68px]">
            {siteContent.hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-silver-cold sm:text-xl">
            {siteContent.hero.subtitle}
          </p>
          <div className="mt-9 grid gap-3 sm:flex sm:flex-row">
            <a href="#postular" className="btn-primary w-full sm:w-auto">
              {siteContent.cta.primary}
            </a>
            <a href="#socios-fundadores" className="btn-secondary w-full sm:w-auto">
              {siteContent.cta.secondary}
            </a>
          </div>
          <p className="mt-4 whitespace-pre-line text-sm leading-6 text-steel-light">
            {siteContent.hero.primaryMicrocopy}
          </p>
          <p className="mt-3 text-sm font-semibold text-steel-light">
            {siteContent.brand.locationShort}
          </p>
        </div>

        <div className="relative z-10">
          <div className="surface-card relative aspect-video overflow-hidden bg-graphite">
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-95 contrast-95 saturate-[0.86]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={siteContent.brand.heroPosterImage}
              aria-label="Animación visual de identidad ULF"
            >
              <source src={siteContent.brand.heroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-graphite/40 via-transparent to-transparent" />
            <div className="absolute inset-0 border border-white/10" />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {siteContent.hero.metrics.map((item) => (
              <div className="border border-steel-dark/40 bg-petrol/80 px-4 py-3" key={item}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-silver-cold">
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
            src={siteContent.brand.heroPosterImage}
            alt="Persona preparándose para entrenar en un entorno ULF sobrio y estructurado"
            fill
            priority
            sizes="(min-width: 1180px) 1180px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-y-0 right-0 w-3/5 bg-gradient-to-l from-graphite/60 via-graphite/20 to-transparent" />
          <div className="absolute bottom-[18%] right-5 max-w-[390px] text-right sm:right-8 lg:right-10">
            <p className="text-3xl font-black leading-[0.98] text-white/95 drop-shadow-[0_3px_18px_rgba(0,0,0,0.62)] sm:text-5xl">
              {siteContent.hero.imageStatement}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
