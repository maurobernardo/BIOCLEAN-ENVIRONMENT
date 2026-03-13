import { Metadata } from "next";
import { AboutPageContent } from "@/components/pages/AboutPageContent";

export const metadata: Metadata = {
  title: "Sobre | BIOCLEAN ENVIRONMENT SU, LDA",
  description:
    "Saiba mais sobre a BIOCLEAN ENVIRONMENT, a nossa história, valores e liderança em consultoria ambiental e social em Moçambique.",
  openGraph: {
    title: "Sobre | BIOCLEAN ENVIRONMENT SU, LDA",
    description:
      "Empresa moçambicana de consultoria ambiental e social, focada em sustentabilidade, conformidade e impacto positivo.",
    type: "website"
  }
};

export default function SobrePage() {
  return (
    <main>
      <AboutPageContent />
    </main>
  );
}

