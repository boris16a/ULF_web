import { siteContent } from "@/data/siteContent";

export default function MethodCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {siteContent.method.cards.map((card, index) => (
        <article
          className="surface-card p-6"
          key={card.title}
        >
          <span className="text-sm font-bold text-[#3f513f]">
            0{index + 1}
          </span>
          <h3 className="mt-5 text-xl font-semibold text-[#171614]">{card.title}</h3>
          <p className="mt-4 leading-7 text-[#4e473e]">{card.text}</p>
        </article>
      ))}
    </div>
  );
}
