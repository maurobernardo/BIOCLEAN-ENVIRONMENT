"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef } from "react";

/* ─── Pillar card with 3D tilt ──────────────────────────────── */
const PILLARS = [
  {
    key: "innovation",
    icon: Sparkles,
    gradient: "from-[#0c4724] to-[#1a7a43]",
    glow: "rgba(26,122,67,0.35)",
    accent: "#2da05a",
  },
  {
    key: "sustainability",
    icon: Leaf,
    gradient: "from-[#1a7a43] to-[#2da05a]",
    glow: "rgba(45,160,90,0.30)",
    accent: "#4ade80",
  },
  {
    key: "compliance",
    icon: ShieldCheck,
    gradient: "from-[#0c4724] to-[#155c35]",
    glow: "rgba(12,71,36,0.35)",
    accent: "#2da05a",
  },
];

function PillarCard({
  pillar,
  idx,
  titleKey,
  bodyKey,
}: {
  pillar: (typeof PILLARS)[0];
  idx: number;
  titleKey: string;
  bodyKey: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 22 });
  const glareX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  const Icon = pillar.icon;

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() { x.set(0); y.set(0); }

  return (
    <motion.div
      initial={{ opacity: 0, y: 36, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 900 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative cursor-default h-full"
      >
        {/* Hover glow */}
        <div
          className="pointer-events-none absolute -inset-1 rounded-[26px] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: pillar.glow }}
        />

        {/* Card */}
        <div className="relative h-full overflow-hidden rounded-[22px] border border-[#1a7a43]/20 bg-white shadow-[0_4px_28px_rgba(12,71,36,0.10),inset_0_1px_0_rgba(255,255,255,0.95)]">

          {/* Glare layer */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.5) 0%, transparent 65%)`,
            }}
          />

          {/* Left accent bar */}
          <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${pillar.gradient}`} />

          <div className="relative p-7 pl-8">
            {/* Icon in floating circle */}
            <motion.div
              style={{ translateZ: 20 }}
              className={`relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${pillar.gradient} shadow-lg`}
            >
              <Icon className="h-5 w-5 text-white" strokeWidth={1.8} />
              {/* Glow dot */}
              <span
                className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white"
                style={{ background: pillar.accent }}
              />
            </motion.div>

            {/* Number label */}
            <span className="absolute right-6 top-6 font-mono text-5xl font-black leading-none text-[#0c4724]/5 select-none">
              0{idx + 1}
            </span>

            <h3 className="text-base font-extrabold leading-tight tracking-tight text-[#0c4724]">
              {titleKey}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#3d5a47]/80">{bodyKey}</p>

            {/* Bottom shimmer line */}
            <div className="mt-5 h-px w-full overflow-hidden rounded-full bg-[#1a7a43]/10">
              <motion.div
                className={`h-full bg-gradient-to-r ${pillar.gradient}`}
                initial={{ x: "-100%" }}
                whileInView={{ x: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3 + idx * 0.15, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Stat badge ─────────────────────────────────────────────── */
function StatBadge({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-0.5 rounded-2xl border border-[#1a7a43]/15 bg-white/80 px-6 py-4 shadow-sm backdrop-blur-sm"
    >
      <span className="text-2xl font-black tracking-tight text-[#0c4724]">{value}</span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#3d5a47]/55">{label}</span>
    </motion.div>
  );
}

/* ─── Section ────────────────────────────────────────────────── */
export function AboutSection() {
  const t = useTranslations("homeAbout");
  const tp = useTranslations("homeAbout.pillars");

  return (
    <section className="section-divider relative overflow-hidden bg-[#f4faf6]">

      {/* ── Background ───────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(12,71,36,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(12,71,36,0.045)_1px,transparent_1px)] bg-[size:40px_40px]" />
        {/* Orbs */}
        <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#0c4724]/8 blur-[90px]" />
        <div className="absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-[#2da05a]/10 blur-[90px]" />
        {/* Decorative leaf shape */}
        <svg className="absolute right-8 top-8 h-48 w-48 text-[#0c4724]/5" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 10 C160 10 190 60 190 100 C190 160 140 190 100 190 C60 190 10 160 10 100 C10 60 40 10 100 10 Z" />
        </svg>
        <svg className="absolute bottom-8 left-8 h-32 w-32 text-[#1a7a43]/5" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 10 C160 10 190 60 190 100 C190 160 140 190 100 190 C60 190 10 160 10 100 C10 60 40 10 100 10 Z" />
        </svg>
      </div>

      <div className="section-container section-padding relative z-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-start">

          {/* ── Left — text column ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {/* Kicker */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#1a7a43]/30 bg-[#0c4724]/8 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2da05a] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2da05a]" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#0c4724]">
                {t("kicker")}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0c4724] sm:text-5xl">
              {t("title")}
            </h2>

            {/* Body paragraphs */}
            <p className="text-sm leading-relaxed text-[#3d5a47]/80 md:text-base">{t("body1")}</p>
            <p className="text-sm leading-relaxed text-[#3d5a47]/80 md:text-base">{t("body2")}</p>

            {/* Decorative dash */}
            <div className="flex items-center gap-3 pt-2">
              <div className="h-1 w-14 rounded-full bg-[#0c4724]" />
              <div className="h-1 w-7 rounded-full bg-[#1a7a43]/50" />
              <div className="h-1 w-3 rounded-full bg-[#2da05a]/30" />
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-3 pt-2">
              <StatBadge value="3+" label="Anos exp." delay={0.2} />
              <StatBadge value="100%" label="Sustentável" delay={0.3} />
              <StatBadge value="MZ" label="Moçambique" delay={0.4} />
            </div>

            {/* Quote / highlight block */}
            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="relative overflow-hidden rounded-2xl border-l-4 border-[#0c4724] bg-white/70 px-5 py-4 shadow-sm backdrop-blur-sm"
            >
              <div className="absolute -right-3 -top-3 text-7xl font-black text-[#0c4724]/5 select-none leading-none">"</div>
              <p className="relative text-sm font-semibold italic leading-relaxed text-[#0c4724]/75">
                Ambiente limpo, futuro sustentável — a nossa missão em cada projecto.
              </p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-[#1a7a43]/50">
                BioClean Environment
              </p>
            </motion.blockquote>
          </motion.div>

          {/* ── Right — pillar cards ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-4"
          >
            {PILLARS.map((pillar, idx) => (
              <PillarCard
                key={pillar.key}
                pillar={pillar}
                idx={idx}
                titleKey={tp(`${pillar.key}Title`)}
                bodyKey={tp(`${pillar.key}Body`)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}