import { Metadata } from "next";
import { ContactPageContent } from "@/components/pages/ContactPageContent";

export const metadata: Metadata = {
  title: "Contacto | BIOCLEAN ENVIRONMENT SU, LDA",
  description:
    "Fale com a BIOCLEAN ENVIRONMENT para apoio em consultoria ambiental, HST, limpeza industrial, gestão de resíduos e projectos sociais.",
  openGraph: {
    title: "Contacto | BIOCLEAN ENVIRONMENT SU, LDA",
    description:
      "Entre em contacto para solicitar propostas e apoio técnico em projectos ambientais e sociais em Moçambique.",
    type: "website"
  }
};

export default function ContactoPage() {
  return (
    <main>
      <ContactPageContent />
    </main>
  );
}

