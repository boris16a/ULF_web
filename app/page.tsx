import AudienceSection from "@/components/AudienceSection";
import EntryExperience from "@/components/EntryExperience";
import Footer from "@/components/Footer";
import FormatCards from "@/components/FormatCards";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import type { CSSProperties } from "react";
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
    <div className="grid gap-4 lg:grid-cols-2">
      {siteContent.problem.comparisons.map((block, index) => (
        <article
          className={`surface-card p-6 ${
            index === 0 ? "text-[#4e473e]" : "bg-[#2a2823] text-[#fff7ea]"
          }`}
          key={block.title}
        >
          <h3 className="text-2xl font-semibold">{block.title}</h3>
          <ul className="mt-5 space-y-3">
            {block.items.map((item) => (
              <li className="flex gap-3" key={item}>
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#6d775c]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function FounderSection() {
  return (
    <Section
      id="socios-fundadores"
      eyebrow={siteContent.founders.eyebrow}
      title={siteContent.founders.title}
      text={siteContent.founders.text}
    >
      <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div
          className="equipment-surface min-h-[390px] p-6"
          style={{ "--equipment-image": `url(${siteContent.brand.communityImage})` } as CSSProperties}
        >
          <div className="relative z-10 flex h-full flex-col justify-end">
            <p className="text-2xl font-semibold leading-tight text-[#fff7ea]">
              {siteContent.founders.emphasis}
            </p>
            <a href="#postular" className="btn-primary mt-7">
              Quiero postular a Socio Fundador
            </a>
          </div>
        </div>
        <div>
          <BulletGrid items={siteContent.founders.benefits} />
          <p className="mt-5 text-sm leading-6 text-[#a9a193]">
            {siteContent.founders.note}
          </p>
        </div>
      </div>
    </Section>
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
        <Image
          src={siteContent.brand.mainLogo}
          alt=""
          width={520}
          height={520}
          className="watermark-logo bottom-[-180px] right-[-110px] w-[420px]"
          aria-hidden="true"
        />
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
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div
              className="equipment-surface min-h-[330px] p-6"
              style={{ "--equipment-image": `url(${siteContent.brand.consistencyImage})` } as CSSProperties}
            >
              <div className="relative z-10 flex h-full flex-col justify-end">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#e8dccb]">
                  Constancia
                </p>
                <p className="mt-4 max-w-md text-2xl font-semibold leading-tight text-[#fff7ea]">
                  El sistema existe para detectar el abandono antes de que se repita.
                </p>
              </div>
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
            <div
              className="equipment-surface min-h-[360px] p-6"
              style={{ "--equipment-image": `url(${siteContent.brand.heroImage})` } as CSSProperties}
            >
              <div className="relative z-10">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8e9b79]">
                  Socios Fundadores
                </p>
                <p className="mt-5 text-2xl font-semibold leading-tight text-[#fff7ea]">
                  Accede primero a información de pre-apertura, horarios disponibles y condiciones fundadoras.
                </p>
                <p className="mt-5 leading-8 text-[#eadfce]">
                  Recibirás información prioritaria sobre horarios, formatos disponibles y condiciones fundadoras antes de la apertura general.
                </p>
              </div>
            </div>
            <WaitlistForm />
          </div>
        </Section>

        <section className="relative overflow-hidden border-y border-[#1d1b18]/10 bg-[#2a2823] py-16 text-[#fff7ea] sm:py-20">
          <Image
            src={siteContent.brand.mainLogo}
            alt=""
            width={620}
            height={620}
            className="watermark-logo left-[-180px] top-[-140px] w-[500px] opacity-[0.07]"
            aria-hidden="true"
          />
          <div className="section-shell relative z-10 max-w-4xl">
            <h2 className="whitespace-pre-line text-4xl font-black leading-tight sm:text-5xl">
              {siteContent.closing.title}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#d8ccbb]">
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
