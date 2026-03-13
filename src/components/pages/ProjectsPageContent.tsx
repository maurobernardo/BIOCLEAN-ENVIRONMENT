"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";

type Category = "all" | "ambiental" | "limpeza" | "social" | "hst";

type Project = {
  name: string;
  category: Exclude<Category, "all">;
  location: string;
  type: string;
  image: string;
  description: string;
};

const projectsPt: Project[] = [
  {
    name: "Auditoria Ambiental — Empresa Mineira, Nampula",
    category: "ambiental",
    location: "Nampula",
    type: "Ambiental",
    image: "/Galeria/Nampula.jpeg",
    description:
      "Avaliação abrangente de conformidade ambiental e optimização de processos para reduzir impactos."
  },
  {
    name: "Plano de Segurança Ocupacional — Construtora, Pemba",
    category: "hst",
    location: "Pemba",
    type: "HST",
    image: "/Galeria/HST.jpeg",
    description:
      "Desenvolvimento de plano de segurança e formação em HST para equipas de obra."
  },
  {
    name: "Limpeza Industrial — Armazém Logístico, Nacala",
    category: "limpeza",
    location: "Nacala",
    type: "Limpeza",
    image: "/Galeria/Nacala.jpeg",
    description:
      "Serviço especializado de limpeza profunda e manutenção de armazéns logísticos."
  },
  {
    name: "EIA — Projecto Agroindustrial, Zambézia",
    category: "ambiental",
    location: "Zambézia",
    type: "Ambiental",
    image: "/Galeria/Zambezia.jpeg",
    description:
      "Estudo de impacto ambiental para novo empreendimento agroindustrial, com foco em uso sustentável de recursos."
  },
  {
    name: "Gestão de Resíduos — Hospital Provincial, Nampula",
    category: "ambiental",
    location: "Nampula",
    type: "Ambiental",
    image: "/Galeria/Nampula1.jpeg",
    description:
      "Implementação de plano integrado de gestão de resíduos hospitalares."
  },
  {
    name: "Reassentamento Comunitário — Projecto de Infraestrutura",
    category: "social",
    location: "Moçambique",
    type: "Social",
    image: "/Galeria/Social.jpeg",
    description:
      "Apoio técnico em processos de reassentamento e envolvimento comunitário."
  }
];

const projectsEn: Project[] = [
  {
    name: "Environmental Audit — Mining Company, Nampula",
    category: "ambiental",
    location: "Nampula",
    type: "Environmental",
    image: "/Galeria/Nampula.jpeg",
    description:
      "Comprehensive assessment of environmental compliance and process optimization to reduce impacts."
  },
  {
    name: "Occupational Safety Plan — Construction Company, Pemba",
    category: "hst",
    location: "Pemba",
    type: "OHS",
    image: "/Galeria/HST.jpeg",
    description:
      "Development of a safety plan and OHS training for construction teams."
  },
  {
    name: "Industrial Cleaning — Logistics Warehouse, Nacala",
    category: "limpeza",
    location: "Nacala",
    type: "Cleaning",
    image: "/Galeria/Nacala.jpeg",
    description:
      "Specialized deep‑cleaning and maintenance service for logistics warehouses."
  },
  {
    name: "EIA — Agro‑Industrial Project, Zambézia",
    category: "ambiental",
    location: "Zambézia",
    type: "Environmental",
    image: "/Galeria/Zambezia.jpeg",
    description:
      "Environmental impact assessment for a new agro‑industrial venture focused on sustainable resource use."
  },
  {
    name: "Waste Management — Provincial Hospital, Nampula",
    category: "ambiental",
    location: "Nampula",
    type: "Environmental",
    image: "/Galeria/Nampula1.jpeg",
    description:
      "Implementation of an integrated management plan for hospital waste."
  },
  {
    name: "Community Resettlement — Infrastructure Project",
    category: "social",
    location: "Mozambique",
    type: "Social",
    image: "/Galeria/Social.jpeg",
    description:
      "Technical support for resettlement processes and community engagement."
  }
];

export function ProjectsPageContent() {
  const locale = useLocale();
  const tPage = useTranslations("pages.projectos");
  const tHome = useTranslations("homeProjects");
  const [filter, setFilter] = useState<Category>("all");

  const baseProjects = locale === "en" ? projectsEn : projectsPt;

  const filtered =
    filter === "all"
      ? baseProjects
      : baseProjects.filter((project) => project.category === filter);

  return (
    <section className="relative overflow-hidden bg-muted pb-32 md:pb-48">
      <div className="pointer-events-none absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(12,71,36,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(12,71,36,0.06)_1px,transparent_1px)] bg-[size:34px_34px]" />
        <div className="absolute -top-20 right-0 h-64 w-64 rounded-full bg-primary-soft/25 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />
      </div>

      <div className="section-container relative z-10 space-y-8 pt-8 pb-12 sm:pt-10 sm:pb-12 lg:pt-14 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-soft/60 bg-primary-soft/20 px-4 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span>{tPage("kicker")}</span>
          </div>
          <h1 className="font-display text-3xl font-extrabold text-primary sm:text-4xl md:text-[2.6rem]">
            {tPage("title")}
          </h1>
          <p className="max-w-2xl text-sm text-warm-gray leading-relaxed">
            {tPage("intro")}
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 text-xs font-mono uppercase tracking-[0.18em]">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`rounded-full border px-3 py-1 ${
              filter === "all"
                ? "border-primary bg-primary text-white"
                : "border-primary-soft/60 bg-primary-soft/10 text-primary"
            }`}
          >
            {tHome("filterAll")}
          </button>
          <button
            type="button"
            onClick={() => setFilter("ambiental")}
            className={`rounded-full border px-3 py-1 ${
              filter === "ambiental"
                ? "border-primary bg-primary text-white"
                : "border-primary-soft/60 bg-primary-soft/10 text-primary"
            }`}
          >
            {tHome("filterEnvironmental")}
          </button>
          <button
            type="button"
            onClick={() => setFilter("limpeza")}
            className={`rounded-full border px-3 py-1 ${
              filter === "limpeza"
                ? "border-primary bg-primary text-white"
                : "border-primary-soft/60 bg-primary-soft/10 text-primary"
            }`}
          >
            {tHome("filterCleaning")}
          </button>
          <button
            type="button"
            onClick={() => setFilter("social")}
            className={`rounded-full border px-3 py-1 ${
              filter === "social"
                ? "border-primary bg-primary text-white"
                : "border-primary-soft/60 bg-primary-soft/10 text-primary"
            }`}
          >
            {tHome("filterSocial")}
          </button>
          <button
            type="button"
            onClick={() => setFilter("hst")}
            className={`rounded-full border px-3 py-1 ${
              filter === "hst"
                ? "border-primary bg-primary text-white"
                : "border-primary-soft/60 bg-primary-soft/10 text-primary"
            }`}
          >
            {tHome("filterHst")}
          </button>
        </div>

        <AnimatePresence mode="popLayout">
          <div className="grid gap-6 pb-8 md:grid-cols-3 md:pb-12">
            {filtered.map((project) => (
              <motion.article
                key={project.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="group overflow-hidden rounded-2xl border-2 border-primary bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl hover:border-primary-accent"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
                  <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-charcoal">
                    {project.type} · {project.location}
                  </div>
                </div>

                <div className="flex flex-col gap-3 px-4 pb-4 pt-3">
                  <h2 className="text-sm font-semibold text-primary">
                    {project.name}
                  </h2>
                  <p className="text-xs text-warm-gray">
                    {project.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}

