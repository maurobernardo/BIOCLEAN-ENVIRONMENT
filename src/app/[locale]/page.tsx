import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsBand } from "@/components/home/StatsBand";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { CeoSection } from "@/components/home/CeoSection";
import { TeamSection } from "@/components/shared/TeamSection";
import { ProjectsPreviewSection } from "@/components/home/ProjectsPreviewSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBannerSection } from "@/components/home/CtaBannerSection";

export const metadata: Metadata = {
  title: "BIOCLEAN ENVIRONMENT · Consultoria Ambiental e Social",
  description:
    "Consultoria ambiental e social em Nampula, Moçambique. Estudos de impacto ambiental, gestão de resíduos, HST, limpeza industrial e implementação de soluções sustentáveis.",
  openGraph: {
    title: "BIOCLEAN ENVIRONMENT · Consultoria Ambiental e Social",
    description:
      "Soluções profissionais em consultoria ambiental e social para projectos em todo o território moçambicano.",
    type: "website"
  }
};

export default function LocaleHomePage() {
  return (
    <main className="-mt-20 bg-muted md:-mt-24">
      <HeroSection />
      <StatsBand />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <CeoSection />
      <TeamSection />
      <ProjectsPreviewSection />
      <TestimonialsSection />
      <PartnersSection />
      <FaqSection />
      <CtaBannerSection />
    </main>
  );
}


