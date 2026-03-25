"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function ServicesPageIntro() {
  const t = useTranslations("pages.servicos");

  return (
    <section className="relative overflow-hidden bg-muted">
      <div className="pointer-events-none absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(12,71,36,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(12,71,36,0.06)_1px,transparent_1px)] bg-[size:34px_34px]" />
        <div className="absolute -top-20 right-10 h-56 w-56 rounded-full bg-primary-soft/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-gold/15 blur-3xl" />
      </div>

      <div className="section-container relative z-10 pt-8 pb-16 sm:pt-10 sm:pb-18 lg:pt-14 lg:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl space-y-4"
      >
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-soft/60 bg-primary-soft/20 px-4 py-1 text-xs font-mono uppercase tracking-[0.18em] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span>{t("kicker")}</span>
        </div>
        <h1 className="font-display text-3xl font-extrabold text-primary sm:text-4xl md:text-[2.6rem]">{t("title")}</h1>
        <p className="text-sm text-warm-gray leading-relaxed md:text-base">{t("intro")}</p>
      </motion.div>
      </div>
    </section>
  );
}

