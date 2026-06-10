import WhatsAppButton from "@/components/WhatsAppButton";
import { siteContent } from "@/data/siteContent";

export default function FounderPlansSection() {
  const { founderPlans, whatsapp } = siteContent;

  return (
    <section
      id="planes-fundadores"
      aria-labelledby="founder-plans-title"
      className="bg-transparent py-16 sm:py-20 lg:py-24"
    >
      <div className="section-shell">
        <div className="max-w-4xl">
          <h2
            id="founder-plans-title"
            className="text-4xl font-black leading-tight text-foreground sm:text-5xl"
          >
            {founderPlans.title}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-silver-cold sm:text-lg">
            {founderPlans.text}
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {founderPlans.formats.map((format) => (
            <article
              className={
                format.featured
                  ? "flex min-w-0 flex-col border border-steel-light/65 bg-petrol p-6 shadow-[0_18px_60px_rgba(0,0,0,0.34)] sm:p-7"
                  : "surface-card flex min-w-0 flex-col p-6 sm:p-7"
              }
              key={format.code}
            >
              <div className="min-h-7">
                {format.featured ? (
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-silver-cold">
                    {format.label}
                  </p>
                ) : (
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-steel-light">
                    Formato {format.code}
                  </p>
                )}
              </div>
              <h3 className="mt-4 text-2xl font-semibold leading-tight text-foreground">
                {format.title}
              </h3>
              <p className="mt-5 leading-7 text-silver-cold">{format.text}</p>

              <div className="mt-7 border-t border-steel-dark/40 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-steel-light">
                  Ideal para
                </p>
                <p className="mt-3 leading-7 text-foreground/85">{format.ideal}</p>
              </div>

              <div className="mt-auto pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-steel-light">
                  Frecuencias disponibles
                </p>
                <p className="mt-3 font-semibold text-silver-cold">
                  {format.frequency}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 border border-steel-dark/40 bg-graphite/55 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <div>
              <h3 className="text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
                {founderPlans.permanence.title}
              </h3>
              <p className="mt-5 text-xl font-semibold leading-tight text-silver-cold">
                {founderPlans.permanence.featuredText}
              </p>
              <p className="mt-5 leading-8 text-steel-light">
                {founderPlans.permanence.text}
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {founderPlans.permanence.options.map((option) => (
                <li
                  className="border border-steel-dark/35 bg-petrol/55 p-4 leading-7 text-silver-cold"
                  key={option}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-steel-dark/40 pt-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              {whatsapp.consultTitle}
            </h3>
            <p className="mt-2 max-w-2xl leading-7 text-silver-cold">
              {whatsapp.consultText}
            </p>
          </div>
          <WhatsAppButton
            label={whatsapp.consultLabel}
            className="w-full shrink-0 sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
