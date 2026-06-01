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
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#3f513f]">
                {siteContent.founders.eyebrow}
              </p>
              <h2 className="text-[40px] font-black leading-none text-[#171614] sm:text-6xl lg:text-[68px]">
                {siteContent.founders.title}
              </h2>
            </div>
            <div>
              <p className="whitespace-pre-line text-lg leading-8 text-[#4e473e]">
                {siteContent.founders.text}
              </p>
              <a href="#postular" className="btn-primary mt-7">
                {siteContent.cta.primary}
              </a>
            </div>
          </div>
        </div>

        <div className="image-panel mt-8 aspect-[16/9]">
          <Image
            src={siteContent.brand.communityImage}
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
            {siteContent.founders.benefits.map((benefit, index) => (
              <article className="surface-card p-6" key={benefit.title}>
                <span className="text-sm font-bold text-[#3f513f]">
                  0{index + 1}
                </span>
                <h4 className="mt-5 text-xl font-semibold leading-tight text-[#171614]">
                  {benefit.title}
                </h4>
                <p className="mt-4 leading-7 text-[#4e473e]">{benefit.text}</p>
              </article>
            ))}
          </div>

          <article className="surface-card mt-8 grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <p className="whitespace-pre-line text-lg font-semibold leading-8 text-[#201e1a]">
              {siteContent.founders.note}
            </p>
            <a href="#postular" className="btn-primary w-full lg:w-auto">
              {siteContent.cta.primary}
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

function WolfSection() {
  return (
    <Section
      id="que-significa-ulf"
      eyebrow={siteContent.wolf.eyebrow}
      title={siteContent.wolf.title}
      text={siteContent.wolf.text}
      >
      <div className="surface-card relative grid gap-6 overflow-hidden p-7 sm:p-9 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <div className="relative z-10 flex min-h-[220px] items-center justify-center">
          <Image
            src={siteContent.brand.mainLogo}
            alt="ULF"
            width={280}
            height={280}
            className="h-auto w-48 opacity-80 sm:w-56"
          />
        </div>
        <div className="relative z-10">
          <p className="leading-8 text-[#4e473e]">{siteContent.wolf.secondText}</p>
          <p className="mt-6 max-w-3xl text-2xl font-semibold leading-tight text-[#201e1a]">
            {siteContent.wolf.closing}
          </p>
        </div>
      </div>
    </Section>
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
