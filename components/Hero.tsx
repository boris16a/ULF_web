import { siteContent } from "@/data/siteContent";

export default function Hero() {
  return (
    <section id="inicio" className="soft-grid relative overflow-hidden bg-[#0b0d0c]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(102,114,90,0.18),transparent_34rem)]" />
      <div className="section-shell relative grid min-h-[calc(100svh-138px)] items-center gap-10 py-12 sm:py-16 lg:min-h-[calc(100svh-88px)] lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:py-20">
        <div className="relative z-10 max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-[#8e9b79]">
            {siteContent.hero.kicker}
          </p>
          <h1 className="whitespace-pre-line text-5xl font-black leading-[0.96] text-[#f4efe5] sm:text-6xl lg:text-7xl">
            {siteContent.hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d0c7b8] sm:text-xl">
            {siteContent.hero.subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#lista-espera" className="btn-primary">
              {siteContent.cta.primary}
            </a>
            <a href="#lista-espera" className="btn-secondary">
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
              className="absolute inset-0 h-full w-full object-cover opacity-80 contrast-90 saturate-[0.78]"
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0c]/82 via-[#0b0d0c]/16 to-[#0b0d0c]/52" />
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
