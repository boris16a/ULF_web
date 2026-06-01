import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function Hero() {
  return (
    <section id="inicio" className="soft-grid relative overflow-hidden bg-[#f7efe1]">
      <Image
        src={siteContent.brand.mainLogo}
        alt=""
        width={620}
        height={620}
        className="watermark-logo right-[-160px] top-12 hidden w-[520px] lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-0 hidden w-[58%] bg-cover bg-center opacity-28 lg:block"
        style={{ backgroundImage: `url(${siteContent.brand.heroImage})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(173,114,86,0.16),transparent_34rem)]" />
      <div className="section-shell relative grid min-h-[calc(100svh-132px)] items-center gap-9 py-12 sm:py-16 lg:min-h-[720px] lg:grid-cols-[1fr_1.06fr] lg:gap-14 lg:py-14 xl:min-h-[760px]">
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
          <div className="mt-9 grid gap-3 sm:flex sm:flex-row">
            <a href="#postular" className="btn-primary w-full sm:w-auto">
              {siteContent.cta.primary}
            </a>
            <a href="#metodo" className="btn-secondary w-full sm:w-auto">
              {siteContent.cta.secondary}
            </a>
          </div>
          <p className="mt-4 text-sm text-[#6f675d]">{siteContent.hero.note}</p>
        </div>

        <div className="relative">
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#201e1a]/54 via-transparent to-[#201e1a]/18" />
            <div className="absolute inset-0 border border-white/10" />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {siteContent.hero.metrics.map((item) => (
              <div className="border border-[#1d1b18]/10 bg-[#fff8ed]/70 px-4 py-3" key={item}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3f513f]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
