import Footer from "@/components/Footer";
import FounderPlansSection from "@/components/FounderPlansSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import PreopeningStatus from "@/components/PreopeningStatus";
import Section from "@/components/Section";
import WaitlistForm from "@/components/WaitlistForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteContent } from "@/data/siteContent";

function ComparisonBlocks() {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch">
      <article className="border border-steel-dark/30 bg-petrol/60 p-6 text-steel-light shadow-none lg:p-7">
        <h3 className="text-xl font-semibold text-silver-cold">
          {siteContent.problem.comparisons[0].title}
        </h3>
        <ul className="mt-5 space-y-3">
          {siteContent.problem.comparisons[0].items.map((item) => (
            <li className="flex gap-3" key={item}>
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-steel-dark" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
      <article
        className="relative overflow-hidden p-8 text-foreground shadow-[0_22px_70px_rgba(0,0,0,0.35)] lg:p-9"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(26, 30, 33, 0.9) 0%, rgba(26, 30, 33, 0.76) 38%, rgba(26, 30, 33, 0.38) 68%, rgba(26, 30, 33, 0.12) 100%), url(${siteContent.brand.consistencySystemImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-silver-cold">
            SISTEMA ULF
          </p>
          <h3 className="mt-3 text-3xl font-black text-white">
            {siteContent.problem.comparisons[1].title}
          </h3>
          <ul className="mt-6 space-y-4">
            {siteContent.problem.comparisons[1].items.map((item) => (
              <li className="flex gap-3 text-lg" key={item}>
                <span className="mt-2.5 h-2 w-2 shrink-0 bg-steel-light" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}

function FounderSection() {
  return (
    <section id="socios-fundadores" className="bg-transparent py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <div
          className="relative overflow-hidden p-7 text-foreground shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-9 lg:p-12"
          style={{
            backgroundImage: `linear-gradient(105deg, rgba(26, 30, 33, 0.88) 0%, rgba(53, 61, 65, 0.72) 46%, rgba(80, 100, 111, 0.28) 76%, rgba(162, 186, 196, 0.12) 100%), url(${siteContent.brand.communityFounderImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="relative z-10 max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-silver-cold">
              {siteContent.founders.eyebrow}
            </p>
            <h2 className="text-[40px] font-black leading-none text-white sm:text-6xl lg:text-[68px]">
              {siteContent.founders.title}
            </h2>
          </div>
        </div>

        <div className="mt-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {siteContent.founders.benefits.map((benefit) => (
              <article className="surface-card p-6" key={benefit.title}>
                <h4 className="text-xl font-semibold leading-tight text-foreground">
                  {benefit.title}
                </h4>
                <p className="mt-4 leading-7 text-silver-cold">{benefit.text}</p>
              </article>
            ))}
          </div>

          <article className="surface-card mt-8 grid gap-8 overflow-hidden p-6 sm:p-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:p-10">
            <div className="relative flex min-h-[180px] items-center justify-center bg-graphite/70 p-6">
              <Image
                src={siteContent.brand.headerLogo}
                alt="ULF"
                width={320}
                height={180}
                className="h-auto w-56 object-contain opacity-90 sm:w-64"
              />
            </div>
            <div>
              <h3 className="text-5xl font-black leading-none text-foreground sm:text-6xl">
                {siteContent.founders.conversion.title}
              </h3>
              <p className="mt-6 max-w-3xl text-2xl font-semibold leading-tight text-foreground/90">
                {siteContent.founders.conversion.featuredText}
              </p>
              <p className="mt-5 max-w-2xl leading-8 text-silver-cold">
                {siteContent.founders.conversion.text}
              </p>
              <a href="#postular" className="btn-primary mt-7 min-h-14 w-full px-7 text-base sm:w-auto">
                {siteContent.cta.primary}
              </a>
              <p className="mt-4 whitespace-pre-line text-sm leading-6 text-silver-cold/80">
                {siteContent.founders.conversion.microcopy}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function WolfSection() {
  return (
    <section id="que-significa-ulf" className="bg-transparent py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-steel-light">
              {siteContent.wolf.eyebrow}
            </p>
            <h2 className="max-w-3xl text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-[56px]">
              {siteContent.wolf.title}
            </h2>
            <p className="mt-5 max-w-3xl text-2xl font-semibold leading-tight text-foreground/90 sm:text-3xl">
              {siteContent.wolf.subtitle}
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-silver-cold">
              {siteContent.wolf.text}
            </p>
          </div>

          <div className="mx-auto flex w-full max-w-[320px] items-center justify-center lg:sticky lg:top-36">
            <Image
              src={siteContent.brand.mainLogo}
              alt="ULF"
              width={420}
              height={240}
              className="h-auto w-full max-w-[280px] object-contain opacity-90 sm:max-w-[340px]"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1fr]">
          {siteContent.wolf.blocks.map((block) => (
            <article
              className="surface-card p-6 sm:p-7"
              key={block.title}
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-steel-light">
                  {block.label}
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight text-foreground">
                  {block.title}
                </h3>
              </div>
              <p className="mt-5 whitespace-pre-line leading-8 text-silver-cold lg:mt-0">
                {block.text}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PreopeningStatus />
        <FounderSection />
        <FounderPlansSection />
        <WolfSection />

        <Section
          eyebrow={siteContent.problem.eyebrow}
          title={siteContent.problem.title}
          text={siteContent.problem.text}
          tone="muted"
        >
          <ComparisonBlocks />
        </Section>

        <Section
          id="postular"
          eyebrow={siteContent.waitlist.eyebrow}
          title={siteContent.waitlist.title}
          text={siteContent.waitlist.text}
          tone="muted"
        >
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="grid gap-5">
              <div className="image-panel aspect-[4/3]">
                <Image
                  src={siteContent.brand.heroImage}
                  alt="Espacio ULF preparado para la primera generación de Socios Fundadores"
                  fill
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="surface-card p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-steel-light">
                  Socios Fundadores
                </p>
                <p className="mt-5 text-2xl font-semibold leading-tight text-foreground/90">
                  Accede primero a información de pre-apertura, horarios disponibles y condiciones fundadoras.
                </p>
                <p className="mt-5 leading-8 text-silver-cold">
                  Recibirás información prioritaria sobre horarios, planes disponibles y condiciones fundadoras antes de la apertura general.
                </p>
                <p className="mt-5 text-sm font-semibold leading-6 text-silver-cold">
                  {siteContent.waitlist.location}
                </p>
              </div>
            </div>
            <WaitlistForm />
          </div>
        </Section>

        <section className="relative overflow-hidden bg-transparent py-16 text-foreground sm:py-20">
          <div className="section-shell relative z-10 max-w-4xl">
            <h2 className="whitespace-pre-line text-4xl font-black leading-tight sm:text-5xl">
              {siteContent.closing.title}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-silver-cold">
              {siteContent.closing.text}
            </p>
            <a href="#postular" className="btn-primary mt-8">
              Quiero ser Socio Fundador
            </a>
          </div>
        </section>
      </main>
      <WhatsAppButton
        label={siteContent.whatsapp.mobileLabel}
        variant="floating"
      />
      <Footer />
    </>
  );
}
