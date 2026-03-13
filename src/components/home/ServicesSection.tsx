"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  LineChart,
  Shield,
  Sparkles,
  Recycle,
  Users
} from "lucide-react";
import { useTranslations } from "next-intl";

const services = [
  {
    icon: Leaf,
    title: "Consultoria Ambiental",
    description:
      "Estudos de Impacto Ambiental (EIA), auditorias, planos de gestão e monitoria de desempenho ambiental.",
    bullets: [
      "Estudos de Impacto Ambiental (EIA)",
      "Planos de Gestão Ambiental",
      "Auditorias Ambientais",
      "Licenciamento Ambiental"
    ]
  },
  {
    icon: LineChart,
    title: "Monitoramento Ambiental",
    description:
      "Monitoria periódica de indicadores físicos, químicos e biológicos para controlo de impactos.",
    bullets: [
      "Monitoria de qualidade de água",
      "Monitoria de qualidade do ar",
      "Ruído e vibrações",
      "Relatórios de conformidade"
    ]
  },
  {
    icon: Shield,
    title: "Higiene & Segurança no Trabalho",
    description:
      "Avaliação de riscos, HIRA, planos de segurança e capacitação de equipas.",
    bullets: [
      "Avaliação de riscos (HIRA)",
      "Planos de segurança ocupacional",
      "Formação em HST",
      "Procedimentos de emergência"
    ]
  },
  {
    icon: Sparkles,
    title: "Limpeza Geral e Industrial",
    description:
      "Serviços de limpeza profissional para escritórios, unidades industriais e infraestruturas críticas.",
    bullets: [
      "Limpeza de escritórios",
      "Limpeza industrial pesada",
      "Limpeza pós-obra",
      "Planos de manutenção"
    ]
  },
  {
    icon: Recycle,
    title: "Gestão de Resíduos",
    description:
      "Soluções integradas para resíduos sólidos urbanos, industriais e hospitalares.",
    bullets: [
      "Planos de gestão de resíduos",
      "Segregação e armazenamento",
      "Transporte e destino final",
      "Resíduos hospitalares"
    ]
  },
  {
    icon: Users,
    title: "Implementação e Gestão Social",
    description:
      "Programas sociais, reassentamento, consulta pública e envolvimento comunitário.",
    bullets: [
      "Planos de gestão social",
      "Reassentamento e compensações",
      "Consulta e participação pública",
      "Monitoria de impacto social"
    ]
  }
];

export function ServicesSection() {
  const t = useTranslations("homeServices");

  return (
    <section className="section-divider relative overflow-hidden bg-muted">
      <div className="pointer-events-none absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(12,71,36,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(12,71,36,0.06)_1px,transparent_1px)] bg-[size:34px_34px]" />
        <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-primary-soft/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
      </div>

      <div className="section-container relative z-10 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="flex flex-col gap-5 text-left">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-[11px] font-mono uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span>{t("kicker")}</span>
          </div>
          <div className="space-y-3">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-[3rem]">
              {t("title")}
            </h2>
            <div className="h-1 w-24 rounded-full bg-gold" />
          </div>
          <p className="max-w-2xl text-sm text-warm-gray">
            {t("intro")}
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.06 * idx, duration: 0.6 }}
                whileHover={{
                  y: -8,
                  scale: 1.01,
                  boxShadow: "0 20px 50px rgba(45,106,45,0.18)"
                }}
                className="group relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-white p-6 shadow-md transition duration-300 hover:border-primary/50"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-primary-accent opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary/20">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-warm-gray leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {service.bullets.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-warm-gray"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

