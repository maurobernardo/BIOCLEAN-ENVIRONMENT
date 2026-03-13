import { Metadata } from "next";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ServicesPageIntro } from "@/components/pages/ServicesPageIntro";
import { ServicesCategoriesSection } from "@/components/pages/ServicesCategoriesSection";

export const metadata: Metadata = {
  title: "Serviços | BIOCLEAN ENVIRONMENT SU, LDA",
  description:
    "Portefólio completo de serviços ambientais, HST, limpeza industrial, gestão de resíduos e soluções sociais para empresas em Moçambique.",
  openGraph: {
    title: "Serviços | BIOCLEAN ENVIRONMENT SU, LDA",
    description:
      "Conheça os serviços especializados da BIOCLEAN ENVIRONMENT em ambiente, segurança e impacto social.",
    type: "website"
  }
};

export default function ServicosPage() {
  return (
    <main className="bg-muted">
      <ServicesPageIntro />
      <ServicesSection />
      <ServicesCategoriesSection />
    </main>
  );
}

