type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  text?: string;
  children?: React.ReactNode;
  tone?: "default" | "muted";
};

export default function Section({
  id,
  eyebrow,
  title,
  text,
  children,
}: SectionProps) {
  return (
    <section id={id} className="bg-transparent py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-steel-light">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="whitespace-pre-line text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {text ? (
            <p className="mt-5 text-base leading-8 text-silver-cold sm:text-lg">
              {text}
            </p>
          ) : null}
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
