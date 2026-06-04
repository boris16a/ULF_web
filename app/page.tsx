import AudienceSection from "@/components/AudienceSection";
import EntryExperience from "@/components/EntryExperience";
import Footer from "@/components/Footer";
import FormatCards from "@/components/FormatCards";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import MethodCards from "@/components/MethodCards";
import Section from "@/components/Section";
import WaitlistForm from "@/components/WaitlistForm";
import { siteContent } from "@/data/siteContent";

function BulletGrid({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div className="surface-card p-4 text-[#3f3a33]" key={item}>
          <span className="mr-3 inline-block h-1.5 w-1.5 bg-[#8e9b79] align-middle" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function ComparisonBlocks() {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch">
      <article className="surface-card p-6 text-[#4e473e]">
        <h3 className="text-xl font-semibold text-[#171614]">
          {siteContent.problem.comparisons[0].title}
        </h3>
        <ul className="mt-5 space-y-3">
          {siteContent.problem.comparisons[0].items.map((item) => (
            <li className="flex gap-3" key={item}>
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#a88a67]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
      <article className="surface-card border-[#3f513f]/25 bg-[#f8f0e3] p-8 text-[#2f302a]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#3f513f]">
          Sistema ULF
        </p>
        <h3 className="mt-3 text-3xl font-black text-[#171614]">
          {siteContent.problem.comparisons[1].title}
        </h3>
        <ul className="mt-6 space-y-4">
          {siteContent.problem.comparisons[1].items.map((item) => (
            <li className="flex gap-3 text-lg" key={item}>
              <span className="mt-2.5 h-2 w-2 shrink-0 bg-[#3f513f]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

function FounderSection() {
  return (
    <section id="socios-fundadores" className="bg-transparent py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <div className="surface-card p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#3f513f]">
                {siteContent.founders.eyebrow}
              </p>
              <h2 className="text-[40px] font-black leading-none text-[#171614] sm:text-6xl lg:text-[68px]">
                {siteContent.founders.title}
              </h2>
            </div>
            <div>
              <p className="text-2xl font-semibold leading-tight text-[#201e1a] sm:text-3xl">
                {siteContent.founders.statement}
              </p>
              <p className="mt-5 text-lg leading-8 text-[#4e473e]">
                {siteContent.founders.text}
              </p>
            </div>
          </div>
        </div>

        <div className="image-panel mt-8 aspect-[16/9]">
          <Image
            src={siteContent.brand.communityFounderImage}
            alt="Entrenamiento acompañado en grupos reducidos ULF"
            fill
            sizes="(min-width: 1180px) 1180px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#3f513f]">
              {siteContent.founders.benefitsTitle}
            </p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight text-[#171614] sm:text-4xl">
              Beneficios pensados para iniciar con prioridad y continuidad.
            </h3>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {siteContent.founders.benefits.map((benefit) => (
              <article className="surface-card p-6" key={benefit.title}>
                <h4 className="text-xl font-semibold leading-tight text-[#171614]">
                  {benefit.title}
                </h4>
                <p className="mt-4 leading-7 text-[#4e473e]">{benefit.text}</p>
              </article>
            ))}
          </div>

          <article className="surface-card mt-8 grid gap-8 overflow-hidden p-6 sm:p-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:p-10">
            <div className="relative flex min-h-[180px] items-center justify-center bg-[#efe5d4]/70 p-6">
              <Image
                src={siteContent.brand.headerLogo}
                alt="ULF"
                width={320}
                height={180}
                className="h-auto w-56 object-contain opacity-90 sm:w-64"
              />
            </div>
            <div>
              <h3 className="text-5xl font-black leading-none text-[#171614] sm:text-6xl">
                {siteContent.founders.conversion.title}
              </h3>
              <p className="mt-6 max-w-3xl text-2xl font-semibold leading-tight text-[#201e1a]">
                {siteContent.founders.conversion.featuredText}
              </p>
              <p className="mt-5 max-w-2xl leading-8 text-[#4e473e]">
                {siteContent.founders.conversion.text}
              </p>
              <a href="#postular" className="btn-primary mt-7 min-h-14 w-full px-7 text-base sm:w-auto">
                {siteContent.cta.primary}
              </a>
              <p className="mt-4 whitespace-pre-line text-sm leading-6 text-[#6f675d]">
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#3f513f]">
              {siteContent.wolf.eyebrow}
            </p>
            <h2 className="max-w-3xl text-4xl font-black leading-tight text-[#171614] sm:text-5xl lg:text-[56px]">
              {siteContent.wolf.title}
            </h2>
            <p className="mt-5 max-w-3xl text-2xl font-semibold leading-tight text-[#201e1a] sm:text-3xl">
              {siteContent.wolf.subtitle}
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4e473e]">
              {siteContent.wolf.text}
            </p>
          </div>

          <div className="mx-auto flex w-full max-w-[320px] items-center justify-center lg:sticky lg:top-36">
            <Image
              src={siteContent.brand.mainLogo}
              alt="ULF"
              width={420}
              height={240}
              className="h-auto w-full max-w-[240px] object-contain opacity-90 sm:max-w-[280px]"
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
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#3f513f]">
                  {block.label}
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#171614]">
                  {block.title}
                </h3>
              </div>
              <p className="mt-5 whitespace-pre-line leading-8 text-[#4e473e] lg:mt-0">
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
        <FounderSection />
        <WolfSection />

        <Section
          id="que-es"
          eyebrow={siteContent.whatIs.eyebrow}
          title={siteContent.whatIs.title}
          text={siteContent.whatIs.text}
        >
          <BulletGrid items={siteContent.whatIs.bullets} />
        </Section>
        <Section
          eyebrow={siteContent.problem.eyebrow}
          title={siteContent.problem.title}
          text={siteContent.problem.text}
          tone="muted"
        >
          <div className="grid gap-6">
            <div className="image-panel aspect-[16/7]">
              <Image
                src={siteContent.brand.consistencyImage}
                alt="Persona retomando su constancia de entrenamiento en un espacio ULF"
                fill
                sizes="(min-width: 1180px) 1180px, 100vw"
                className="object-cover"
              />
            </div>
            <ComparisonBlocks />
          </div>
        </Section>

        <Section
          id="metodo"
          eyebrow={siteContent.method.eyebrow}
          title={siteContent.method.title}
          text={siteContent.method.text}
          tone="muted"
        >
          <MethodCards />
        </Section>

        <Section
          id="formatos"
          eyebrow={siteContent.formats.eyebrow}
          title={siteContent.formats.title}
          text={siteContent.formats.text}
        >
          <FormatCards />
        </Section>

        <Section
          id="experiencia"
          eyebrow={siteContent.entry.eyebrow}
          title={siteContent.entry.title}
          text={siteContent.entry.text}
          tone="muted"
        >
          <EntryExperience />
        </Section>

        <Section
          eyebrow={siteContent.audience.eyebrow}
          title={siteContent.audience.title}
          text={siteContent.audience.text}
        >
          <AudienceSection />
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
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#3f513f]">
                  Socios Fundadores
                </p>
                <p className="mt-5 text-2xl font-semibold leading-tight text-[#201e1a]">
                  Accede primero a información de pre-apertura, horarios disponibles y condiciones fundadoras.
                </p>
                <p className="mt-5 leading-8 text-[#4e473e]">
                  Recibirás información prioritaria sobre horarios, formatos disponibles y condiciones fundadoras antes de la apertura general.
                </p>
              </div>
            </div>
            <WaitlistForm />
          </div>
        </Section>

        <section className="relative overflow-hidden bg-transparent py-16 text-[#171614] sm:py-20">
          <div className="section-shell relative z-10 max-w-4xl">
            <h2 className="whitespace-pre-line text-4xl font-black leading-tight sm:text-5xl">
              {siteContent.closing.title}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4e473e]">
              {siteContent.closing.text}
            </p>
            <a href="#postular" className="btn-primary mt-8">
              Quiero ser Socio Fundador
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
