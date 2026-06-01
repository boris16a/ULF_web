import { siteContent } from "@/data/siteContent";

export default function EntryExperience() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {siteContent.entry.steps.map((step, index) => (
        <article className="surface-card relative p-6" key={step.title}>
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#3f513f]">
            Paso {index + 1}
          </span>
          <h3 className="mt-3 text-2xl font-semibold text-[#171614]">{step.title}</h3>
          <p className="mt-4 leading-7 text-[#4e473e]">{step.text}</p>
        </article>
      ))}
    </div>
  );
}
