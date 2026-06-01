import { siteContent } from "@/data/siteContent";

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="surface-card p-6">
      <h3 className="text-xl font-semibold text-[#171614]">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li className="flex gap-3 text-[#4e473e]" key={item}>
            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#3f513f]" />
            <span className="leading-7">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function AudienceSection() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
      <ListBlock title={siteContent.audience.positiveTitle} items={siteContent.audience.positive} />
      <article className="surface-card p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#3f513f]">
          Nota
        </p>
        <p className="mt-4 leading-7 text-[#4e473e]">{siteContent.audience.note}</p>
      </article>
    </div>
  );
}
