import { siteContent } from "@/data/siteContent";

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="surface-card p-6">
      <h3 className="text-xl font-semibold text-[#f4efe5]">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li className="flex gap-3 text-[#c7beb0]" key={item}>
            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#8e9b79]" />
            <span className="leading-7">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function AudienceSection() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <ListBlock title={siteContent.audience.positiveTitle} items={siteContent.audience.positive} />
      <ListBlock title={siteContent.audience.negativeTitle} items={siteContent.audience.negative} />
    </div>
  );
}
