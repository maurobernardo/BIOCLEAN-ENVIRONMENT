"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Facebook, Linkedin, MessageCircle } from "lucide-react";

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, duration: 0.7 }
  }
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function HeroSection() {
  const t = useTranslations("hero");
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const locale = segments[0] === "pt" || segments[0] === "en" ? segments[0] : "pt";
  const pills = t.raw("pills") as string[];

  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {/* Background image + gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/Fundo.jpg"
          alt={t("imageAlt")}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-charcoal/80 to-charcoal/90" />
      </div>

      <div className="section-container relative z-10 flex min-h-screen flex-col justify-between pt-20 pb-10">
        {/* Top content */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="mt-4 max-w-2xl space-y-6 lg:mt-6"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-primary-soft"
          >
            {t("badge")}
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
          >
            {t("headline")}
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-xl text-base text-zinc-200 sm:text-lg"
          >
            {t("tagline")}
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href={`/${locale}/servicos`}
              className="rounded-full bg-gold px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-charcoal shadow-lg shadow-gold/40 transition hover:shadow-xl hover:shadow-gold/60"
            >
              {t("ctaServices")}
            </Link>
            <Link
              href={`/${locale}/contacto`}
              className="rounded-full border border-white/60 bg-white/5 px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              {t("ctaContact")}
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-2 text-[11px] font-mono uppercase tracking-[0.18em] text-zinc-200"
          >
            {t("foundedBadge")}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-4 flex flex-wrap gap-2 text-[11px] font-mono uppercase tracking-[0.16em] text-zinc-200"
          >
            {pills.map((label) => (
              <span
                key={label}
                className="rounded-full bg-black/35 px-3 py-1"
              >
                {label}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* (cards removidos a pedido do cliente) */}
      </div>

      {/* Vertical social bar on the left */}
      <div className="pointer-events-none absolute inset-y-0 left-4 hidden md:flex">
        <div className="flex flex-col items-center justify-center gap-4 text-xs text-zinc-200">
          <div className="pointer-events-auto flex -rotate-90 items-center gap-2 font-mono uppercase tracking-[0.18em]">
            <span>{t("followLabel")}</span>
          </div>
          <div className="h-16 w-px bg-white/40" />
          <div className="pointer-events-auto flex flex-col gap-3">
            <a
              href="https://www.facebook.com/share/1Aty6UbRf2/"
              target="_blank"
              rel="noreferrer"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-white hover:text-charcoal"
            >
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/company/bioclean-environment-lda/"
              target="_blank"
              rel="noreferrer"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-white hover:text-charcoal"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://wa.me/258876372482"
              target="_blank"
              rel="noreferrer"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-white hover:text-charcoal"
            >
              <MessageCircle className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}

