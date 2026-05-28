import { siteContent } from "@/data/siteContent";

export default function MethodCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {siteContent.method.cards.map((card, index) => (
        <article
          className="surface-card p-6"
          key={card.title}
        >
          <span className="text-sm font-bold text-[#8e9b79]">
            0{index + 1}
          </span>
          <h3 className="mt-5 text-xl font-semibold text-[#f4efe5]">{card.title}</h3>
          <p className="mt-4 leading-7 text-[#c7beb0]">{card.text}</p>
        </article>
      ))}
    </div>
  );
}
