"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

const testimonials = [
  {
    quote:
      "A Bioclean transformou a nossa gestão ambiental completamente.",
    name: "Directora de Operações",
    company: "Empresa Logística",
    rating: 5
  },
  {
    quote: "Profissionalismo e rigor técnico excepcionais.",
    name: "Gestor de Projecto",
    company: "Construtora Nacional",
    rating: 5
  },
  {
    quote:
      "Parceiros de confiança no nosso processo de certificação ISO.",
    name: "Responsável HST",
    company: "Indústria Alimentar",
    rating: 5
  }
];

export function TestimonialsSection() {
  const t = useTranslations("homeTestimonials");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const current = testimonials[index];

  return (
    <section className="section-divider relative overflow-hidden bg-white section-padding">
      <div className="pointer-events-none absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(12,71,36,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(12,71,36,0.06)_1px,transparent_1px)] bg-[size:34px_34px]" />
        <div className="absolute top-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary-soft/20 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-48 w-48 rounded-full bg-gold/15 blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-soft/60 bg-primary-soft/20 px-4 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span>{t("kicker")}</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold text-primary sm:text-4xl md:text-[2.6rem]">
            {t("title")}
          </h2>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border-2 border-primary bg-white p-8 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.quote}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold" />
                  ))}
                </div>
                <p className="text-sm text-primary italic">
                  “{current.quote}”
                </p>
                <p className="text-xs font-semibold text-primary">
                  {current.name} ·{" "}
                  <span className="font-normal text-warm-gray">
                    {current.company}
                  </span>
                </p>
                <div className="flex justify-center gap-2 pt-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setIndex(i)}
                      className={`h-1.5 w-4 rounded-full ${
                        i === index ? "bg-primary" : "bg-primary-soft/40"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

