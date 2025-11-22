import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comment utiliser l'assistant",
  description:
    "Guide interactif pour découvrir comment tirer profit de l'assistant IA Codex."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
