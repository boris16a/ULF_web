import AudienceSection from "@/components/AudienceSection";
import EntryExperience from "@/components/EntryExperience";
import Footer from "@/components/Footer";
import FormatCards from "@/components/FormatCards";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MethodCards from "@/components/MethodCards";
import Section from "@/components/Section";
import WaitlistForm from "@/components/WaitlistForm";
import { siteContent } from "@/data/siteContent";

function BulletGrid({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div className="surface-card p-4 text-[#d7d0c4]" key={item}>
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
            index === 0 ? "text-[#d7d0c4]" : "bg-[#172018] text-[#f4efe5]"
          }`}
          key={block.title}
        >
          <h3 className="text-2xl font-semibold">{block.title}</h3>
          <ul className="mt-5 space-y-3">
            {block.items.map((item) => (
              <li className="flex gap-3" key={item}>
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#8e9b79]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <Section
          eyebrow={siteContent.whatIs.eyebrow}
          title={siteContent.whatIs.title}
          text={siteContent.whatIs.text}
        >
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <BulletGrid items={siteContent.whatIs.bullets} />
            <div className="equipment-surface min-h-[320px] p-6">
              <div className="relative z-10 flex h-full flex-col justify-end">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8e9b79]">
                  Fuerza y capacidad física
                </p>
                <p className="mt-4 max-w-md text-2xl font-semibold leading-tight text-[#f4efe5]">
                  Un entorno pensado para progresar con técnica, carga controlada y registro.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section
          eyebrow={siteContent.problem.eyebrow}
          title={siteContent.problem.title}
          text={siteContent.problem.text}
          tone="muted"
        >
          <ComparisonBlocks />
        </Section>

        <Section
          id="metodo"
          eyebrow={siteContent.method.eyebrow}
          title={siteContent.method.title}
          text={siteContent.method.text}
        >
          <MethodCards />
        </Section>

        <Section
          id="formatos"
          eyebrow={siteContent.formats.eyebrow}
          title={siteContent.formats.title}
          text={siteContent.formats.text}
          tone="muted"
        >
          <FormatCards />
        </Section>

        <Section
          id="experiencia"
          eyebrow={siteContent.entry.eyebrow}
          title={siteContent.entry.title}
          text={siteContent.entry.text}
        >
          <EntryExperience />
        </Section>

        <Section
          eyebrow={siteContent.audience.eyebrow}
          title={siteContent.audience.title}
          text={siteContent.audience.text}
          tone="muted"
        >
          <AudienceSection />
        </Section>

        <Section
          id="lista-espera"
          eyebrow={siteContent.waitlist.eyebrow}
          title={siteContent.waitlist.title}
          text={siteContent.waitlist.text}
        >
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="equipment-surface min-h-[360px] p-6">
              <div className="relative z-10">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8e9b79]">
                  Pre-apertura
                </p>
                <p className="mt-5 text-2xl font-semibold leading-tight text-[#f4efe5]">
                  Recibe información anticipada sobre formatos, valores de lanzamiento y disponibilidad de cupos.
                </p>
                <p className="mt-5 leading-8 text-[#c7beb0]">
                  Sin promesas infladas ni ruido comercial. Solo información concreta para decidir si ULF calza con tu proceso.
                </p>
              </div>
            </div>
            <WaitlistForm />
          </div>
        </Section>

        <section className="border-y border-white/10 bg-[#0b0d0c] py-16 text-[#f4efe5] sm:py-20">
          <div className="section-shell max-w-4xl">
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              {siteContent.closing.title}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#c7beb0]">
              {siteContent.closing.text}
            </p>
            <a href="#lista-espera" className="btn-primary mt-8">
              {siteContent.cta.secondary}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
