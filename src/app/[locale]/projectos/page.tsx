import { Metadata } from "next";
import { ProjectsPageContent } from "@/components/pages/ProjectsPageContent";

export const metadata: Metadata = {
  title: "Projectos | BIOCLEAN ENVIRONMENT SU, LDA",
  description:
    "Galeria de projectos ambientais, sociais, de limpeza industrial e HST realizados pela BIOCLEAN ENVIRONMENT em Moçambique.",
  openGraph: {
    title: "Projectos | BIOCLEAN ENVIRONMENT SU, LDA",
    description:
      "Veja exemplos de projectos em diferentes sectores, desde auditorias ambientais até programas sociais e de segurança.",
    type: "website"
  }
};

export default function ProjectosPage() {
  return (
    <main>
      <ProjectsPageContent />
    </main>
  );
}

