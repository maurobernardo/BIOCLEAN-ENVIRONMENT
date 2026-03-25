"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  LineChart,
  Shield,
  Sparkles,
  Recycle,
  Users,
  type LucideIcon
} from "lucide-react";
import { useTranslations } from "next-intl";

const SERVICE_ORDER: { key: string; icon: LucideIcon }[] = [
  { key: "consultoria", icon: Leaf },
  { key: "monitoramento", icon: LineChart },
  { key: "hst", icon: Shield },
  { key: "limpeza", icon: Sparkles },
  { key: "residuos", icon: Recycle },
  { key: "social", icon: Users }
];

type ServiceItem = {
  title: string;
  description: string;
  bullets: string[];
};

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
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span>{t("kicker")}</span>
          </div>
          <div className="space-y-3">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-[3rem]">
              {t("title")}
            </h2>
            <div className="h-1 w-24 rounded-full bg-gold" />
          </div>
          <p className="max-w-2xl text-sm text-warm-gray leading-relaxed md:text-base">
            {t("intro")}
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {SERVICE_ORDER.map((def, idx) => {
            const Icon = def.icon;
            const service = t.raw(`items.${def.key}`) as ServiceItem;
            return (
              <motion.article
                key={def.key}
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
                    <h3 className="text-base font-bold text-primary sm:text-lg">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-warm-gray leading-relaxed md:text-base">
                      {service.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {service.bullets.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-warm-gray md:text-base"
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
