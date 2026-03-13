"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Linkedin } from "lucide-react";
import Image from "next/image";

const skills = [
  "ISO 14001",
  "ISO 45001",
  "HIRA",
  "Gestão de Resíduos",
  "Sustentabilidade"
];

export function CeoSection() {
  const t = useTranslations("homeCeo");

  return (
    <section className="section-divider relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(45,106,45,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,106,45,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary-soft/20 blur-3xl" />
      </div>

      <div className="section-container section-padding relative z-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6, boxShadow: "0 30px 70px rgba(45,106,45,0.25)" }}
            className="group relative overflow-hidden rounded-3xl border-2 border-primary/20 bg-white p-8 shadow-xl transition duration-300"
          >
            <div className="absolute left-0 top-0 h-2 w-24 rounded-br-full bg-gradient-to-r from-primary to-primary-accent" />
            <div className="flex flex-col items-center pt-4">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/30 to-gold/20 blur-md" />
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-xl ring-4 ring-primary/20">
                  <Image
                    src="/images/ceo.png"
                    alt={t("name")}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-primary">
                  {t("kicker")}
                </div>
                <h2 className="mt-2 font-display text-2xl font-extrabold text-primary">
                  {t("title")}
                </h2>
                <p className="mt-1 text-base font-bold text-primary">{t("name")}</p>
                <p className="mt-1 max-w-xs text-sm text-warm-gray leading-relaxed">{t("role")}</p>
                <p className="mt-1 text-xs text-warm-gray">{t("education")}</p>
              </div>
              <a
                href="https://www.linkedin.com/company/bioclean-environment-lda/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-accent hover:shadow-primary/40"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-[11px] font-mono uppercase tracking-[0.18em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>{t("kicker")}</span>
            </div>
            <p className="text-base text-warm-gray leading-relaxed">{t("bio")}</p>
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary">
            {t("skillsLabel")}
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-primary/30 bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm transition hover:border-primary hover:bg-primary/5"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}


