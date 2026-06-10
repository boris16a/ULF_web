import { getWhatsAppUrl } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  label: string;
  variant?: "secondary" | "text" | "floating";
  className?: string;
};

export default function WhatsAppButton({
  label,
  variant = "secondary",
  className = "",
}: WhatsAppButtonProps) {
  const variantClass = {
    secondary: "btn-secondary",
    text: "inline-flex font-semibold text-silver-cold underline decoration-steel-dark underline-offset-4 transition hover:text-white",
    floating:
      "whatsapp-float fixed left-1/2 z-40 inline-flex min-h-11 -translate-x-1/2 items-center justify-center whitespace-nowrap border border-steel-light/60 bg-steel-brand px-4 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.32)] transition hover:bg-steel-light hover:text-graphite md:hidden",
  }[variant];

  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      className={`${variantClass} ${className}`.trim()}
    >
      {label}
    </a>
  );
}
