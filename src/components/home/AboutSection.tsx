"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.6 }
  })
};

export function AboutSection() {
  const t = useTranslations("homeAbout");
  const tp = useTranslations("homeAbout.pillars");

  return (
    <section className="section-divider relative overflow-hidden bg-[#f8f9f5]">
      <div className="pointer-events-none absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(12,71,36,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(12,71,36,0.06)_1px,transparent_1px)] bg-[size:34px_34px]" />
        <div className="absolute -top-24 left-10 h-64 w-64 rounded-full bg-primary-soft/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      </div>

      <div className="section-container section-padding relative z-10 space-y-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="space-y-5"
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-soft/60 bg-primary-soft/20 px-4 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span>{t("kicker")}</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold text-primary sm:text-4xl md:text-[2.6rem]">{t("title")}</h2>
          <p className="text-sm text-warm-gray leading-relaxed">
            {t("body1")}
          </p>
          <p className="text-sm text-warm-gray leading-relaxed">
            {t("body2")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="grid gap-4 sm:grid-cols-3"
        >
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={0}
            className="group relative overflow-hidden rounded-2xl border-2 border-primary bg-white p-5 shadow-md transition hover:-translate-y-2 hover:shadow-xl hover:border-primary-accent"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft/30 text-primary">
              <Sparkles className="h-4 w-4" />
            </div>
            <h3 className="mt-3 text-sm font-semibold text-primary">
              {tp("innovationTitle")}
            </h3>
            <p className="mt-1 text-xs text-warm-gray">
              {tp("innovationBody")}
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={1}
            className="group relative overflow-hidden rounded-2xl border-2 border-primary bg-white p-5 shadow-md transition hover:-translate-y-2 hover:shadow-xl hover:border-primary-accent"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft/30 text-primary">
              <Leaf className="h-4 w-4" />
            </div>
            <h3 className="mt-3 text-sm font-semibold text-primary">
              {tp("sustainabilityTitle")}
            </h3>
            <p className="mt-1 text-xs text-warm-gray">
              {tp("sustainabilityBody")}
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={2}
            className="group relative overflow-hidden rounded-2xl border-2 border-primary bg-white p-5 shadow-md transition hover:-translate-y-2 hover:shadow-xl hover:border-primary-accent"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft/30 text-primary">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <h3 className="mt-3 text-sm font-semibold text-primary">
              {tp("complianceTitle")}
            </h3>
            <p className="mt-1 text-xs text-warm-gray">
              {tp("complianceBody")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


