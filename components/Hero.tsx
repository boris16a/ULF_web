import { siteContent } from "@/data/siteContent";

export default function Hero() {
  return (
    <section id="inicio" className="soft-grid relative overflow-hidden bg-[#0b0d0c]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(102,114,90,0.18),transparent_34rem)]" />
      <div className="section-shell relative grid min-h-[calc(100svh-132px)] items-center gap-9 py-12 sm:py-16 lg:min-h-[720px] lg:grid-cols-[1fr_1.06fr] lg:gap-14 lg:py-14 xl:min-h-[760px]">
        <div className="relative z-10 max-w-[640px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-[#8e9b79]">
            {siteContent.hero.kicker}
          </p>
          <h1 className="whitespace-pre-line text-[42px] font-black leading-[0.98] text-[#f4efe5] sm:text-6xl lg:text-[64px] xl:text-[68px]">
            {siteContent.hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d0c7b8] sm:text-xl">
            {siteContent.hero.subtitle}
          </p>
          <div className="mt-9 grid gap-3 sm:flex sm:flex-row">
            <a href="#lista-espera" className="btn-primary w-full sm:w-auto">
              {siteContent.cta.primary}
            </a>
            <a href="#lista-espera" className="btn-secondary w-full sm:w-auto">
              {siteContent.cta.secondary}
            </a>
          </div>
          <p className="mt-4 text-sm text-[#a9a193]">{siteContent.hero.note}</p>
        </div>

        <div className="relative">
          <div className="surface-card relative aspect-video overflow-hidden bg-[#111312]">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{ backgroundImage: `url(${siteContent.brand.heroFallback})` }}
              aria-hidden="true"
            />
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-95 contrast-95 saturate-[0.86]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={siteContent.brand.heroFallback}
              aria-label="Animación visual de identidad ULF"
            >
              <source src={siteContent.brand.heroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0c]/70 via-[#0b0d0c]/8 to-[#0b0d0c]/36" />
            <div className="absolute inset-0 border border-white/10" />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {siteContent.hero.metrics.map((item) => (
              <div className="border border-white/10 bg-[#151816] px-4 py-3" key={item}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8e9b79]">
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
