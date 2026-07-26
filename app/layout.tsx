import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.GITHUB_ACTIONS === "true" ? "/marisol-higienizacao" : "";

export const metadata: Metadata = {
  title: "Marisol Higienização | Higienização de Estofados",
  description:
    "Higienização e impermeabilização profissional de sofás, colchões, poltronas e estofados automotivos.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: `${basePath}/logo.webp`,
    shortcut: `${basePath}/logo.webp`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
