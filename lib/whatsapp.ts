import { siteContent } from "@/data/siteContent";

export function getWhatsAppUrl() {
  const { number, message } = siteContent.whatsapp;

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
