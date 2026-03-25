"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const FAQ_KEYS = ["q1", "q2", "q3", "q4"] as const;

export function FaqSection() {
  const t = useTranslations("homeFaq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-divider relative overflow-hidden bg-[#f8f9f5]">
      <div className="pointer-events-none absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(12,71,36,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(12,71,36,0.06)_1px,transparent_1px)] bg-[size:34px_34px]" />
        <div className="absolute -top-24 left-10 h-64 w-64 rounded-full bg-primary-soft/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      </div>

      <div className="section-container section-padding relative z-10">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-soft/60 bg-primary-soft/25 px-3 py-1 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-primary">
              {t("kicker")}
            </div>
            <h2 className="font-display text-2xl font-extrabold text-primary sm:text-3xl md:text-[3rem]">
              {t("title")}
            </h2>
          </div>

          <div className="mt-8 space-y-4">
            {FAQ_KEYS.map((key, idx) => {
              const qKey = key as (typeof FAQ_KEYS)[number];
              const aKey = key.replace("q", "a") as "a1" | "a2" | "a3" | "a4";
              const isOpen = openIndex === idx;

              return (
                <motion.div
                  key={key}
                  initial={false}
                  className="overflow-hidden rounded-2xl border-2 border-primary bg-white shadow-md transition hover:border-primary-accent"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7 sm:py-6"
                  >
                    <span className="text-sm font-semibold text-primary sm:text-base">
                      {t(`items.${qKey}`)}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 text-gold"
                    >
                      <ChevronDown className="h-6 w-6" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-primary-soft/30 px-6 pb-5 pt-3 sm:px-7 sm:pb-6 sm:pt-4">
                          <p className="text-sm text-warm-gray leading-relaxed sm:text-base">
                            {t(`items.${aKey}`)}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
