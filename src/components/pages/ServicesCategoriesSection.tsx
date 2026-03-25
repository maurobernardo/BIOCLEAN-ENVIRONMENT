"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

type CategoryKey = "ambiental" | "hst" | "social" | "limpeza" | "adicionais";

type SubServiceCard = {
  title: string;
  image: string;
  bullets: string[];
};

type ServiceCategory = {
  key: CategoryKey;
  title: string;
  services: SubServiceCard[];
};

const sectionCopy = {
  pt: {
    title: "Portefólio Detalhado de Serviços",
    intro:
      "Cada categoria abaixo reúne serviços especializados que podem ser combinados e adaptados à realidade do seu projecto em Moçambique."
  },
  en: {
    title: "Detailed Services Portfolio",
    intro:
      "Each category below brings together specialized services that can be combined and tailored to your project in Mozambique."
  }
};

const categoriesPt: ServiceCategory[] = [
  {
    key: "ambiental",
    title: "Serviços Ambientais",
    services: [
      {
        title: "Consultoria Ambiental",
        image: "/Galeria/Nampula.jpeg",
        bullets: [
          "Licenciamento Ambiental.",
          "Estudos de Impacto Ambiental (EIA/EIAS).",
          "Planos de Gestão Ambiental (PGA).",
          "Implementação ISO 14001.",
          "Soluções Baseadas na Natureza."
        ]
      },
      {
        title: "Monitoramento Ambiental",
        image: "/Galeria/Nampula1.jpeg",
        bullets: [
          "Qualidade do Ar.",
          "Análise de Água.",
          "Monitoramento de Ruído.",
          "Relatórios técnicos.",
          "Acompanhamento periódico."
        ]
      },
      {
        title: "Auditorias Ambientais Privadas",
        image: "/Galeria/Zambezia.jpeg",
        bullets: [
          "Auditorias de Conformidade Legal.",
          "Auditorias Internas ISO 14001.",
          "Avaliação de Riscos e Impactos Ambientais.",
          "Relatórios e Planos de Ação Corretiva."
        ]
      }
    ]
  },
  {
    key: "hst",
    title: "Higiene e Segurança no Trabalho (HST)",
    services: [
      {
        title: "Planos e Programas de Saúde e Segurança Ocupacional",
        image: "/Galeria/HST.jpeg",
        bullets: [
          "Elaboração de planos de segurança.",
          "Programas de prevenção de acidentes.",
          "Análise de riscos ocupacionais.",
          "Auditorias de segurança regulares."
        ]
      },
      {
        title: "Implementação de Sistemas de Gestão (ISO 45001)",
        image: "/Galeria/HST.jpeg",
        bullets: [
          "Diagnóstico e gap analysis.",
          "Desenvolvimento de documentação.",
          "Formação interna e sensibilização.",
          "Apoio na auditoria de certificação."
        ]
      },
      {
        title: "Indução e Treinamentos",
        image: "/Galeria/HST.jpeg",
        bullets: [
          "Treinamentos de segurança específicos.",
          "Simulacros de emergência.",
          "Indução de novos colaboradores.",
          "Atualização de conhecimentos em HST."
        ]
      }
    ]
  },
  {
    key: "social",
    title: "Implementação e Gestão Social",
    services: [
      {
        title: "Prevenção da Violência Baseada no Género (VBG)",
        image: "/Galeria/Social.jpeg",
        bullets: [
          "Formação e sensibilização.",
          "Criação de políticas de proteção.",
          "Mecanismos de denúncia e apoio.",
          "Parcerias com organizações locais."
        ]
      },
      {
        title: "Promoção de Desenvolvimento Comunitário",
        image: "/Galeria/Social.jpeg",
        bullets: [
          "Programas de capacitação.",
          "Apoio a micro‑empreendimentos.",
          "Melhoria de infraestruturas básicas.",
          "Engajamento comunitário."
        ]
      },
      {
        title:
          "Planos de Reassentamento de Populações Atingidas por Projectos (PAPs)",
        image: "/Galeria/Social.jpeg",
        bullets: [
          "Avaliação socioeconómica.",
          "Consulta e participação das comunidades.",
          "Compensação justa e reassentamento.",
          "Monitoramento pós‑reassentamento."
        ]
      }
    ]
  },
  {
    key: "limpeza",
    title: "Limpeza Geral e Industrial",
    services: [
      {
        title: "Limpeza de Equipamentos",
        image: "/Galeria/Nacala.jpeg",
        bullets: [
          "Desengorduramento.",
          "Desinfecção.",
          "Controle de resíduos perigosos.",
          "Limpeza manual e mecânica."
        ]
      },
      {
        title: "Limpeza Industrial",
        image: "/Galeria/Nacala.jpeg",
        bullets: [
          "Atuação em oficinas, armazéns e áreas técnicas.",
          "Ambientes logísticos e industriais.",
          "Limpeza Pós‑Obra.",
          "Higienização de Silos e Tanques."
        ]
      },
      {
        title: "Lavagem à Seco",
        image: "/Galeria/Nampula1.jpeg",
        bullets: [
          "Limpeza de sofás.",
          "Tapetes e cortinas.",
          "Assentos de viaturas.",
          "Outros tecidos."
        ]
      }
    ]
  },
  {
    key: "adicionais",
    title: "Serviços Adicionais",
    services: [
      {
        title: "Engenharia e Manutenção",
        image: "/Galeria/Zambezia.jpeg",
        bullets: [
          "Construção e Manutenção de Furos de Água.",
          "Instalação e Manutenção de Sistemas Elétricos.",
          "Instalação e Manutenção de Sistemas Hidráulicos.",
          "Higienização e Manutenção de Reservatórios."
        ]
      },
      {
        title: "Projeção e Manutenção de Sistemas de Gestão de Resíduos Sólidos",
        image: "/Galeria/Zambezia.jpeg",
        bullets: [
          "Projetos de recolha, transporte e tratamento de resíduos.",
          "Resíduos urbanos, industriais e hospitalares.",
          "Programas de reciclagem e reaproveitamento.",
          "Projetos de aterros sanitários e estações de tratamento."
        ]
      },
      {
        title: "Consultoria em Sustentabilidade e Energias Renováveis",
        image: "/Galeria/Social.jpeg",
        bullets: [
          "Projetos de eficiência energética e energias limpas.",
          "Avaliação de pegada de carbono.",
          "Medidas de mitigação.",
          "Programas de responsabilidade ambiental corporativa."
        ]
      }
    ]
  }
];

const categoriesEn: ServiceCategory[] = [
  {
    key: "ambiental",
    title: "Environmental Services",
    services: [
      {
        title: "Environmental Consulting",
        image: "/Galeria/Nampula.jpeg",
        bullets: [
          "Environmental licensing.",
          "Environmental Impact Studies (EIA/EIAS).",
          "Environmental Management Plans (EMP).",
          "ISO 14001 implementation.",
          "Nature‑based solutions."
        ]
      },
      {
        title: "Environmental Monitoring",
        image: "/Galeria/Nampula1.jpeg",
        bullets: [
          "Air quality.",
          "Water analysis.",
          "Noise monitoring.",
          "Technical reports.",
          "Periodic follow‑up."
        ]
      },
      {
        title: "Private Environmental Audits",
        image: "/Galeria/Zambezia.jpeg",
        bullets: [
          "Legal compliance audits.",
          "Internal ISO 14001 audits.",
          "Environmental risk and impact assessment.",
          "Corrective action plans and reports."
        ]
      }
    ]
  },
  {
    key: "hst",
    title: "Occupational Health and Safety (OHS)",
    services: [
      {
        title: "Occupational Health and Safety Plans and Programs",
        image: "/Galeria/HST.jpeg",
        bullets: [
          "Development of safety plans.",
          "Accident prevention programs.",
          "Occupational risk analysis.",
          "Regular safety audits."
        ]
      },
      {
        title: "Management Systems Implementation (ISO 45001)",
        image: "/Galeria/HST.jpeg",
        bullets: [
          "Diagnosis and gap analysis.",
          "Documentation development.",
          "Internal training and awareness.",
          "Support during certification audits."
        ]
      },
      {
        title: "Induction and Trainings",
        image: "/Galeria/HST.jpeg",
        bullets: [
          "Specific safety trainings.",
          "Emergency drills.",
          "New employee induction.",
          "Ongoing OHS upskilling."
        ]
      }
    ]
  },
  {
    key: "social",
    title: "Social Implementation and Management",
    services: [
      {
        title: "Gender‑Based Violence (GBV) Prevention",
        image: "/Galeria/Social.jpeg",
        bullets: [
          "Training and awareness.",
          "Protection policy development.",
          "Reporting and support mechanisms.",
          "Partnerships with local organizations."
        ]
      },
      {
        title: "Community Development Promotion",
        image: "/Galeria/Social.jpeg",
        bullets: [
          "Capacity‑building programs.",
          "Support to micro‑enterprises.",
          "Improvement of basic infrastructure.",
          "Community engagement."
        ]
      },
      {
        title:
          "Resettlement Plans for Project‑Affected Populations (PAPs)",
        image: "/Galeria/Social.jpeg",
        bullets: [
          "Socio‑economic assessment.",
          "Community consultation and participation.",
          "Fair compensation and resettlement.",
          "Post‑resettlement monitoring."
        ]
      }
    ]
  },
  {
    key: "limpeza",
    title: "General and Industrial Cleaning",
    services: [
      {
        title: "Equipment Cleaning",
        image: "/Galeria/Nacala.jpeg",
        bullets: [
          "Degreasing.",
          "Disinfection.",
          "Handling of hazardous residues.",
          "Manual and mechanical cleaning."
        ]
      },
      {
        title: "Industrial Cleaning",
        image: "/Galeria/Nacala.jpeg",
        bullets: [
          "Workshops, warehouses and technical areas.",
          "Logistics and industrial environments.",
          "Post‑construction cleaning.",
          "Silos and tank cleaning."
        ]
      },
      {
        title: "Dry Cleaning",
        image: "/Galeria/Nampula1.jpeg",
        bullets: [
          "Sofa cleaning.",
          "Carpets and curtains.",
          "Vehicle seats.",
          "Other fabrics."
        ]
      }
    ]
  },
  {
    key: "adicionais",
    title: "Additional Services",
    services: [
      {
        title: "Engineering and Maintenance",
        image: "/Galeria/Zambezia.jpeg",
        bullets: [
          "Construction and maintenance of boreholes.",
          "Installation and maintenance of electrical systems.",
          "Installation and maintenance of hydraulic systems.",
          "Reservoir cleaning and maintenance."
        ]
      },
      {
        title:
          "Design and Maintenance of Solid Waste Management Systems",
        image: "/Galeria/Zambezia.jpeg",
        bullets: [
          "Design of collection, transport and treatment systems.",
          "Urban, industrial and hospital waste.",
          "Recycling and recovery programs.",
          "Landfill and treatment facility projects."
        ]
      },
      {
        title: "Sustainability and Renewable Energy Consulting",
        image: "/Galeria/Social.jpeg",
        bullets: [
          "Energy efficiency and clean energy projects.",
          "Carbon footprint assessment.",
          "Mitigation measures.",
          "Corporate environmental responsibility programs."
        ]
      }
    ]
  }
];

export function ServicesCategoriesSection() {
  const locale = useLocale();
  const copy = locale === "en" ? sectionCopy.en : sectionCopy.pt;
  const categories = locale === "en" ? categoriesEn : categoriesPt;

  return (
    <section className="section-divider relative overflow-hidden bg-muted">
      <div className="pointer-events-none absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(12,71,36,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(12,71,36,0.06)_1px,transparent_1px)] bg-[size:34px_34px]" />
      </div>

      <div className="section-container section-padding relative z-10 space-y-14">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="font-display text-2xl font-extrabold text-primary sm:text-3xl">
            {copy.title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-warm-gray leading-relaxed md:mx-0 md:text-base">
            {copy.intro}
          </p>
        </div>
        <div className="space-y-14">
          {categories.map((category, catIdx) => (
            <div key={category.key} className="space-y-8">
              <motion.h3
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.05 * catIdx, duration: 0.6 }}
                className="text-center font-display text-2xl font-extrabold text-primary sm:text-3xl"
              >
                {category.title}
              </motion.h3>

              <div className="grid gap-6 md:grid-cols-3">
                {category.services.map((service, idx) => (
                  <motion.article
                    key={service.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ delay: 0.04 * idx, duration: 0.55 }}
                    whileHover={{
                      y: -8,
                      boxShadow: "0 22px 55px rgba(0,0,0,0.18)"
                    }}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-primary bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl hover:border-primary-accent"
                  >
                    <div className="relative h-40 w-full overflow-hidden md:h-48">
                      <Image
                        src={service.image}
                        alt={service.title}
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-1 flex-col gap-3 px-4 pb-4 pt-3">
                      <h4 className="text-base font-semibold text-primary">
                        {service.title}
                      </h4>
                      <ul className="space-y-1.5 text-sm text-warm-gray leading-relaxed md:text-base">
                        {service.bullets.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-[3px] h-2 w-2 shrink-0 rounded-full bg-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

