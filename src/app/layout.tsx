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
  openGraph: {
    title: "BIOCLEAN ENVIRONMENT SU, LDA",
    description:
      "Soluções profissionais em consultoria ambiental e social em Moçambique.",
    url: "https://www.biocleanenvironment.com",
    siteName: "BIOCLEAN ENVIRONMENT SU, LDA",
    locale: "pt_MZ",
    type: "website",
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
