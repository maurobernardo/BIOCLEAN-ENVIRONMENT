"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const partners = [
  "EcoMining Solutions",
  "Nacala Logistics",
  "Pemba Constructors",
  "MozAgro Industries",
  "HealthCare Provincial",
  "GreenInfra Projects",
  "NorthEnergy Moçambique",
  "UrbanClean Services"
];

export function PartnersSection() {
  const t = useTranslations("homePartners");

  return (
    <section className="section-divider-dark relative overflow-hidden bg-charcoal section-padding text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute -top-20 left-1/4 h-48 w-48 rounded-full bg-primary-accent/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="section-container relative z-10 space-y-6">
        <div className="space-y-2 text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-primary-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span>{t("kicker")}</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl md:text-[2.6rem]">
            {t("title")}
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear"
            }}
          >
            {[...partners, ...partners].map((name, idx) => (
              <div
                key={`${name}-${idx}`}
                className="flex h-16 min-w-[160px] items-center justify-center rounded-2xl border-2 border-white/15 bg-white/5 px-4 text-xs font-mono uppercase tracking-[0.18em] text-zinc-300 transition hover:border-gold/60 hover:bg-white/10 hover:text-gold"
              >
                {name}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

