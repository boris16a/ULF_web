import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ULF | Centro de Entrenamiento Estructurado",
  description:
    "Entrenamiento con método, evaluación inicial, seguimiento digital y progresión estructurada. ULF no es un gimnasio tradicional. Es un sistema para entrenar mejor y sostener el proceso.",
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
