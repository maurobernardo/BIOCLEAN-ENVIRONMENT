"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

function useCountUp(target: number, duration = 1.8) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const base = useMotionValue(0);
  const spring = useSpring(base, { duration, bounce: 0 });

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.round(v).toString();
    });
    base.set(target);
    return unsubscribe;
  }, [base, spring, target]);

  return ref;
}

export function StatsBand() {
  const t = useTranslations("stats");
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const stats = [
    { value: 6, suffix: "+", label: t("services") },
    { value: 100, suffix: "%", label: t("commitment") },
    { value: 3, suffix: "+", label: t("sectors") },
    { value: 2024, suffix: "", label: t("foundation") }
  ];

  return (
    <section
      ref={sectionRef}
      className="section-divider-dark relative overflow-hidden bg-charcoal py-10 text-white shadow-[0_-10px_40px_rgba(0,0,0,0.4)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>
      <div className="section-container relative z-10 grid gap-8 sm:grid-cols-4">
        {stats.map((stat, idx) => {
          const counterRef = useCountUp(inView ? stat.value : 0);
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * idx }}
              className="border-l border-white/10 pl-4"
            >
              <div className="flex items-baseline gap-1 font-display text-3xl">
                <span ref={counterRef} />
                <span>{stat.suffix}</span>
              </div>
              <p className="mt-1 text-sm font-mono uppercase tracking-[0.18em] text-zinc-400">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

