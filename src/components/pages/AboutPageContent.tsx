"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Sparkles, Leaf, ShieldCheck } from "lucide-react";
import { TeamSection } from "@/components/shared/TeamSection";

export function AboutPageContent() {
  const t = useTranslations("pages.sobre");
  const tv = useTranslations("pages.sobre.values");
  const th = useTranslations("pages.sobre.history");
  const tl = useTranslations("pages.sobre.timeline");

  return (
    <>
      <section className="relative overflow-hidden bg-muted pb-12 md:pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(12,71,36,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(12,71,36,0.06)_1px,transparent_1px)] bg-[size:34px_34px]" />
          <div className="absolute -top-24 left-10 h-64 w-64 rounded-full bg-primary-soft/25 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />
        </div>

        <div className="section-container relative z-10 space-y-12 pt-8 pb-10 sm:pt-10 sm:pb-10 lg:pt-14 lg:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl space-y-4"
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-soft/60 bg-primary-soft/20 px-4 py-1 text-xs font-mono uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span>{t("kicker")}</span>
          </div>
          <h1 className="font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl md:text-[2.9rem]">
            {t("title")}
          </h1>
          <p className="text-sm text-warm-gray leading-relaxed md:text-base">
            {t("intro")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid gap-6 md:grid-cols-3"
        >
          <div className="relative flex items-start gap-4 overflow-hidden rounded-3xl border-2 border-primary bg-white p-6 shadow-md">
            <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-primary-soft/15" />
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary-soft/25 text-primary">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="relative space-y-1">
              <p className="text-sm font-semibold text-primary">{tv("integrityTitle")}</p>
              <ul className="space-y-1 text-sm text-warm-gray leading-relaxed md:text-base">
                <li>{tv("integrityLine1")}</li>
                <li>{tv("integrityLine2")}</li>
              </ul>
            </div>
          </div>
          <div className="relative flex items-start gap-4 overflow-hidden rounded-3xl border-2 border-primary bg-white p-6 shadow-md">
            <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-primary-soft/15" />
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary-soft/25 text-primary">
              <Leaf className="h-5 w-5" />
            </div>
            <div className="relative space-y-1">
              <p className="text-sm font-semibold text-primary">{tv("innovationTitle")}</p>
              <ul className="space-y-1 text-sm text-warm-gray leading-relaxed md:text-base">
                <li>{tv("innovationLine1")}</li>
                <li>{tv("innovationLine2")}</li>
              </ul>
            </div>
          </div>
          <div className="relative flex items-start gap-4 overflow-hidden rounded-3xl border-2 border-primary bg-white p-6 shadow-md">
            <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-primary-soft/15" />
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary-soft/25 text-primary">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="relative space-y-1">
              <p className="text-sm font-semibold text-primary">{tv("impactTitle")}</p>
              <ul className="space-y-1 text-sm text-warm-gray leading-relaxed md:text-base">
                <li>{tv("impactLine1")}</li>
                <li>{tv("impactLine2")}</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-soft/60 bg-primary-soft/20 px-4 py-1 text-xs font-mono uppercase tracking-[0.18em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>{th("kicker")}</span>
            </div>
            <p className="text-sm text-warm-gray leading-relaxed md:text-base">
              {th("body")}
            </p>
            <div className="grid gap-5 md:grid-cols-3">
              <div className="relative rounded-3xl border-2 border-primary bg-white/95 p-6 shadow-sm">
                <div className="absolute -top-3 left-5 flex h-7 w-7 items-center justify-center rounded-full border border-primary-soft/70 bg-muted text-xs font-mono text-primary">
                  1
                </div>
                <p className="mt-4 text-sm font-mono uppercase tracking-[0.18em] text-primary">
                  {tl("step1Label")}
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-warm-gray leading-relaxed md:text-base">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{tl("step1Item1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{tl("step1Item2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{tl("step1Item3")}</span>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-3xl border-2 border-primary bg-white/95 p-6 shadow-sm">
                <div className="absolute -top-3 left-5 flex h-7 w-7 items-center justify-center rounded-full border border-primary-soft/70 bg-muted text-xs font-mono text-primary">
                  2
                </div>
                <p className="mt-4 text-sm font-mono uppercase tracking-[0.18em] text-primary">
                  {tl("step2Label")}
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-warm-gray leading-relaxed md:text-base">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{tl("step2Item1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{tl("step2Item2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{tl("step2Item3")}</span>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-3xl border-2 border-primary bg-white/95 p-6 shadow-sm">
                <div className="absolute -top-3 left-5 flex h-7 w-7 items-center justify-center rounded-full border border-primary-soft/70 bg-muted text-xs font-mono text-primary">
                  3
                </div>
                <p className="mt-4 text-sm font-mono uppercase tracking-[0.18em] text-primary">
                  {tl("step3Label")}
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-warm-gray leading-relaxed md:text-base">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{tl("step3Item1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{tl("step3Item2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{tl("step3Item3")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
      </section>

      <TeamSection />
    </>
  );
}
