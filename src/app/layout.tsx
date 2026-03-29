import type { Metadata } from "next";
import "./globals.css";
import { poppins, spaceMono } from "./fonts";

export const metadata: Metadata = {
  title: "BIOCLEAN ENVIRONMENT SU, LDA",
  description:
    "Soluções profissionais em consultoria ambiental e social em Moçambique. BIOCLEAN ENVIRONMENT SU, LDA – Nampula.",
  keywords: [
    "consultoria ambiental",
    "Moçambique",
    "Nampula",
    "gestão ambiental",
    "BIOCLEAN ENVIRONMENT",
  ],

  // ── Favicon / ícones ───────────────────────────────────────
  // Substitui "logo.png" pelo nome exacto do teu ficheiro em public/images/
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
    shortcut: "/images/logo.png",
  },

  openGraph: {
    title: "BIOCLEAN ENVIRONMENT SU, LDA",
    description:
      "Soluções profissionais em consultoria ambiental e social em Moçambique.",
    url: "https://www.biocleanenvironment.com",
    siteName: "BIOCLEAN ENVIRONMENT SU, LDA",
    locale: "pt_MZ",
    type: "website",
    images: [
      {
        url: "https://www.biocleanenvironment.com/images/og-share.png",
        width: 1200,
        height: 630,
        alt: "BIOCLEAN ENVIRONMENT - Consultoria Ambiental e Social em Moçambique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BIOCLEAN ENVIRONMENT SU, LDA",
    description:
      "Soluções profissionais em consultoria ambiental e social em Moçambique.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${poppins.variable} ${spaceMono.variable} antialiased bg-muted text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}