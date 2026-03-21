import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Polarius - Solusi Teknologi yang Mengerti Prioritas Anda",
  description:
    "Menyederhanakan Kompleksitas, Mempercepat Inovasi. Kami menghadirkan strategi IT yang adaptif dan terukur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
