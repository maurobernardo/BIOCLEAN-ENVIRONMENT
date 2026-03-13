"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Category = "all" | "ambiental" | "limpeza" | "social" | "hst";

const projects = [
  {
    name: "Auditoria Ambiental — Empresa Mineira, Nampula",
    category: "ambiental" as Category,
    location: "Nampula",
    type: "Ambiental",
    image: "/Galeria/Nampula.jpeg"
  },
  {
    name: "Plano de Segurança Ocupacional — Construtora, Pemba",
    category: "hst" as Category,
    location: "Pemba",
    type: "HST",
    image: "/Galeria/HST.jpeg"
  },
  {
    name: "Limpeza Industrial — Armazém Logístico, Nacala",
    category: "limpeza" as Category,
    location: "Nacala",
    type: "Limpeza",
    image: "/Galeria/Nacala.jpeg"
  },
  {
    name: "EIA — Projecto Agroindustrial, Zambézia",
    category: "ambiental" as Category,
    location: "Zambézia",
    type: "Ambiental",
    image: "/Galeria/Zambezia.jpeg"
  },
  {
    name: "Gestão de Resíduos — Hospital Provincial, Nampula",
    category: "ambiental" as Category,
    location: "Nampula",
    type: "Ambiental",
    image: "/Galeria/Nampula1.jpeg"
  },
  {
    name: "Reassentamento Comunitário — Projecto de Infraestrutura",
    category: "social" as Category,
    location: "Moçambique",
    type: "Social",
    image: "/Galeria/Social.jpeg"
  }
];

export function ProjectsPreviewSection() {
  const t = useTranslations("homeProjects");
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [filter, setFilter] = useState<Category>("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="section-divider relative overflow-hidden bg-[#f8f9f5]">
      <div className="pointer-events-none absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(12,71,36,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(12,71,36,0.06)_1px,transparent_1px)] bg-[size:34px_34px]" />
        <div className="absolute -top-20 right-0 h-56 w-56 rounded-full bg-primary-soft/25 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
      </div>

      <div className="section-container section-padding relative z-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-soft/60 bg-primary-soft/20 px-4 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>{t("kicker")}</span>
            </div>
            <h2 className="font-display text-3xl font-extrabold text-primary sm:text-4xl md:text-[2.6rem]">
              {t("title")}
            </h2>
          </div>

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
              {t("filterAll")}
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
              {t("filterEnvironmental")}
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
              {t("filterCleaning")}
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
              {t("filterSocial")}
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
              {t("filterHst")}
            </button>
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          <div className="mt-8 grid gap-6 md:grid-cols-3">
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
                  <h3 className="text-sm font-semibold text-primary">
                    {project.name}
                  </h3>
                  <motion.div className="mt-1 flex justify-end">
                    <button
                      type="button"
                      onClick={() =>
                        startTransition(() =>
                          router.push(`/${locale}/projectos`)
                        )
                      }
                      className="rounded-full border border-primary bg-primary/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary shadow-sm transition group-hover:bg-primary group-hover:text-white"
                    >
                      {isPending ? "A abrir..." : t("cta")}
                    </button>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}

