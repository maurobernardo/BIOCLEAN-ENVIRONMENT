"use client";

import { motion } from "framer-motion";
import { Users2, Puzzle, Leaf } from "lucide-react";
import { useTranslations } from "next-intl";

export function WhyUsSection() {
  const t = useTranslations("homeWhyUs");
  const items = t.raw("items") as {
    teamTitle: string;
    teamBody: string;
    solutionsTitle: string;
    solutionsBody: string;
    ecoTitle: string;
    ecoBody: string;
  };

  const cards = [
    {
      icon: Users2,
      title: items.teamTitle,
      body: items.teamBody
    },
    {
      icon: Puzzle,
      title: items.solutionsTitle,
      body: items.solutionsBody
    },
    {
      icon: Leaf,
      title: items.ecoTitle,
      body: items.ecoBody
    }
  ];

  return (
    <section className="section-divider-dark relative overflow-hidden bg-primary text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute -top-24 left-10 h-64 w-64 rotate-6 bg-primary-accent/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 -rotate-6 bg-gold/20 blur-3xl" />
      </div>

      <div className="section-container section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl space-y-3"
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-primary-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span>{t("kicker")}</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl md:text-[2.6rem]">{t("title")}</h2>
        </motion.div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  boxShadow: "0 24px 60px rgba(0,0,0,0.45)"
                }}
                className="group relative overflow-hidden rounded-2xl border-2 border-white/25 bg-white/10 p-6 backdrop-blur-sm transition hover:border-gold/60 hover:bg-white/15"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-sm font-semibold">{card.title}</h3>
                <p className="mt-2 text-xs text-zinc-200">{card.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

