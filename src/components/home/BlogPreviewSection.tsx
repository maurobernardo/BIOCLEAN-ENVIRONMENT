"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const posts = [
  {
    title: "ISO 14001 em Moçambique: O que as empresas precisam de saber",
    category: "Gestão Ambiental",
    date: "2024",
    href: "#"
  },
  {
    title: "Boas práticas na gestão de resíduos hospitalares",
    category: "Gestão de Resíduos",
    date: "2024",
    href: "#"
  },
  {
    title: "Segurança no trabalho em obras de construção",
    category: "Higiene & Segurança",
    date: "2024",
    href: "#"
  }
];

export function BlogPreviewSection() {
  const t = useTranslations("homeBlog");

  return (
    <section className="relative overflow-hidden bg-muted">
      <div className="pointer-events-none absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(12,71,36,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(12,71,36,0.06)_1px,transparent_1px)] bg-[size:34px_34px]" />
        <div className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-primary-soft/25 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />
      </div>

      <div className="section-container section-padding relative z-10">
      <div className="space-y-3 text-center">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-soft/60 bg-primary-soft/20 px-4 py-1 text-xs font-mono uppercase tracking-[0.18em] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span>{t("kicker")}</span>
        </div>
        <h2 className="font-display text-3xl font-extrabold text-primary sm:text-4xl md:text-[2.6rem]">{t("title")}</h2>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {posts.map((post, idx) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.08 * idx }}
            whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(0,0,0,0.12)" }}
            className="flex flex-col rounded-2xl border-2 border-primary-soft/60 bg-white/95 p-4 text-left shadow-sm transition hover:border-primary/40"
          >
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary">
              {post.category} · {post.date}
            </p>
            <h3 className="mt-2 text-sm font-semibold sm:text-base">{post.title}</h3>
            <a
              href={post.href}
              className="mt-3 text-sm font-medium text-primary underline-offset-2 hover:underline"
            >
              Ler Mais
            </a>
          </motion.article>
        ))}
      </div>
      </div>
    </section>
  );
}

