import { siteContent } from "@/data/siteContent";

export default function PreopeningStatus() {
  const { label, title, reserved, total, secondaryText } =
    siteContent.preopeningStatus;
  const progress =
    total > 0 ? Math.min(100, Math.max(0, (reserved / total) * 100)) : 0;

  return (
    <section
      id="estado-preapertura"
      aria-labelledby="preopening-status-title"
      className="scroll-mt-36 pb-4 sm:pb-8"
    >
      <div className="section-shell">
        <div className="border border-steel-dark/40 bg-petrol/70 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)] sm:p-8 lg:grid lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-12 lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-steel-light">
              {label}
            </p>
            <h2
              id="preopening-status-title"
              className="mt-4 text-3xl font-black leading-tight text-foreground sm:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-5 text-xl font-semibold text-silver-cold sm:text-2xl">
              {reserved} / {total} Socios Fundadores reservados
            </p>
          </div>

          <div className="mt-8 lg:mt-0">
            <div
              role="progressbar"
              aria-label="Socios Fundadores reservados"
              aria-valuemin={0}
              aria-valuemax={total}
              aria-valuenow={reserved}
              className="h-3 overflow-hidden border border-steel-dark/60 bg-graphite/80"
            >
              <div
                className="h-full bg-gradient-to-r from-steel-brand to-steel-light transition-[width] duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-5 whitespace-pre-line text-sm leading-7 text-steel-light sm:text-base">
              {secondaryText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
