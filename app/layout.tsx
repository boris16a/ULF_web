import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ULF | Socios Fundadores · Centro de Entrenamiento Estructurado",
  description:
    "Postula a la primera generación de Socios Fundadores ULF. Entrenamiento estructurado con evaluación inicial, corrección técnica, seguimiento real y progresión medible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
