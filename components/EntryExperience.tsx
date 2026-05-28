import { siteContent } from "@/data/siteContent";

export default function EntryExperience() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {siteContent.entry.steps.map((step, index) => (
        <article className="surface-card relative p-6" key={step.title}>
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8e9b79]">
            Paso {index + 1}
          </span>
          <h3 className="mt-3 text-2xl font-semibold text-[#f4efe5]">{step.title}</h3>
          <p className="mt-4 leading-7 text-[#c7beb0]">{step.text}</p>
        </article>
      ))}
    </div>
  );
}
