"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function CtaBannerSection() {
  const t = useTranslations("homeCta");
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const locale = segments[0] === "pt" || segments[0] === "en" ? segments[0] : "pt";

  return (
    <section className="section-divider-dark relative overflow-hidden bg-primary text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
      </div>

      <div className="section-container py-10 md:py-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl">
              {t("title")}
            </h2>
            <p className="text-sm text-primary-soft leading-relaxed md:text-base">{t("subtitle")}</p>
          </div>
          <div className="flex flex-col gap-2 sm:items-end">
            <Link
              href={`/${locale}/contacto`}
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-charcoal shadow-lg shadow-gold/40 transition hover:shadow-xl hover:shadow-gold/60"
            >
              {t("button")}
            </Link>
            <span className="text-sm font-mono text-primary-soft">
              +258 87 808 5088 · +258 87 637 2482
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

