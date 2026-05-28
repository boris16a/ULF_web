import { siteContent } from "@/data/siteContent";

export default function FormatCards() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {siteContent.formats.cards.map((card) => (
        <article
          className="surface-card p-6 text-[#f4efe5]"
          key={card.title}
        >
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-2xl font-black">{card.title}</h3>
            <span className="border border-[#8e9b79]/35 bg-[#8e9b79]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#cdd7b6]">
              {card.tag}
            </span>
          </div>
          <p className="mt-5 leading-7 text-[#c7beb0]">{card.text}</p>
          {"highlight" in card && card.highlight ? (
            <p className="mt-5 border border-[#8e9b79]/30 bg-[#8e9b79]/10 p-3 text-sm font-semibold leading-6 text-[#e4e8d6]">
              {card.highlight}
            </p>
          ) : null}
        </article>
      ))}
    </div>
  );
}
