"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  linkedin?: string;
  portfolio?: string;
};

/* ─── Social overlay icons ──────────────────────────────────── */
function SocialOverlay({
  linkedin,
  portfolio,
  show,
}: {
  linkedin?: string;
  portfolio?: string;
  show: boolean;
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="absolute inset-0 z-20 flex items-center justify-center gap-3 bg-[#0c4724]/60 backdrop-blur-[2px]"
        >
          {linkedin && (
            <motion.a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0.7, y: 8 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.7, y: 8 }}
              transition={{ duration: 0.2 }}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg shadow-black/30 transition hover:scale-110 hover:bg-[#0077b5]"
              title="LinkedIn"
            >
              {/* LinkedIn icon */}
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  className="text-[#0077b5] group-hover:text-white"
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  fill="#0077b5"
                />
              </svg>
            </motion.a>
          )}
          {portfolio && (
            <motion.a
              href={portfolio}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0.7, y: 8 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.7, y: 8 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg shadow-black/30 transition hover:scale-110 hover:bg-[#0c4724]"
              title="Portfólio"
            >
              {/* Globe / portfolio icon */}
              <svg className="h-5 w-5 text-[#0c4724]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </motion.a>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── 3D Tilt Card ──────────────────────────────────────────── */
function MemberCard({ member, idx }: { member: TeamMember; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 180, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 180, damping: 22 });
  const glareX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
    setHovered(false);
  }

  const hasSocials = !!(member.linkedin || member.portfolio);

  return (
    <motion.div
      initial={{ opacity: 0, y: 44, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.72, delay: idx * 0.09, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouse}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative cursor-default"
      >
        {/* Outer glow */}
        <div className="pointer-events-none absolute -inset-1 rounded-[28px] bg-gradient-to-br from-[#1a7a43] to-[#0c4724] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-45" />

        {/* Card */}
        <div className="relative overflow-hidden rounded-[24px] border border-[#1a7a43]/25 bg-white shadow-[0_6px_32px_rgba(12,71,36,0.11),inset_0_1px_0_rgba(255,255,255,0.9)]">

          {/* Glare */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.45) 0%, transparent 60%)`,
            }}
          />

          {/* Top strip */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#0c4724] via-[#1a7a43] to-[#2da05a]" />

          {/* Photo area */}
          <div className="relative h-48 w-full overflow-hidden bg-gradient-to-b from-[#e8f5ed] to-[#d0ebda]">
            <Image
              src={member.imageSrc}
              alt={member.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            {/* Fade bottom */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />

            {/* Social overlay on hover */}
            {hasSocials && (
              <SocialOverlay
                linkedin={member.linkedin}
                portfolio={member.portfolio}
                show={hovered}
              />
            )}

            {/* Role badge */}
            <div className="absolute bottom-2.5 left-3 z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0c4724] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white shadow-md shadow-[#0c4724]/40">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4ade80]" />
                {member.role}
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="px-4 pb-5 pt-3">
            <p className="text-sm font-extrabold leading-tight tracking-tight text-[#0c4724]">
              {member.name}
            </p>

            <div className="my-2.5 h-px bg-gradient-to-r from-[#1a7a43]/25 via-[#1a7a43]/10 to-transparent" />

            <p className="text-xs leading-relaxed text-[#3d5a47]">{member.bio}</p>

            {/* Dots */}
            <div className="mt-3 flex items-center gap-1.5">
              <div className="h-1 w-6 rounded-full bg-[#0c4724]/15 transition-all duration-300 group-hover:bg-[#0c4724]/40" />
              <div className="h-1 w-3 rounded-full bg-[#1a7a43]/15 transition-all duration-300 group-hover:bg-[#1a7a43]/35" />
              <div className="h-1 w-2 rounded-full bg-[#2da05a]/15 transition-all duration-300 group-hover:bg-[#2da05a]/30" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Section ───────────────────────────────────────────────── */
export function TeamSection() {
  const t = useTranslations("teamSection");
  const members = t.raw("members") as TeamMember[];

  // First 3 on top row, rest below (centred)
  const topRow = members.slice(0, 3);
  const bottomRow = members.slice(3);

  return (
    <section
      id="equipa"
      className="relative scroll-mt-28 overflow-hidden bg-[#f4faf6] py-16 sm:py-20 lg:py-24"
    >

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(12,71,36,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(12,71,36,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute -left-40 -top-20 h-[480px] w-[480px] rounded-full bg-[#0c4724]/8 blur-[100px]" />
        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#1a7a43]/10 blur-[100px]" />
        <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-[#2da05a]/8 blur-[80px]" />
        <svg className="absolute right-0 top-0 h-72 w-72 text-[#0c4724]/5" viewBox="0 0 300 300" fill="none">
          <circle cx="300" cy="0" r="200" stroke="currentColor" strokeWidth="1" />
          <circle cx="300" cy="0" r="150" stroke="currentColor" strokeWidth="1" />
          <circle cx="300" cy="0" r="100" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-0 left-0 h-56 w-56 text-[#0c4724]/5" viewBox="0 0 300 300" fill="none">
          <circle cx="0" cy="300" r="200" stroke="currentColor" strokeWidth="1" />
          <circle cx="0" cy="300" r="140" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#1a7a43]/30 bg-[#0c4724]/8 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2da05a] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2da05a]" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#0c4724]">
              {t("kicker")}
            </span>
          </div>

          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#0c4724] sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-1 text-base font-semibold tracking-wide text-[#1a7a43]/65">
            BioClean Environment
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#3d5a47]/75">{t("intro")}</p>

          <div className="mt-7 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-[#0c4724]" />
            <div className="h-1 w-6 rounded-full bg-[#1a7a43]/50" />
            <div className="h-1 w-3 rounded-full bg-[#2da05a]/30" />
          </div>
        </motion.div>

        {/* Top row — 3 cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topRow.map((member, idx) => (
            <MemberCard key={member.name} member={member} idx={idx} />
          ))}
        </div>

        {/* Bottom row — remaining cards centred */}
        {bottomRow.length > 0 && (
          <div className="mt-5 flex flex-wrap justify-center gap-5">
            {bottomRow.map((member, idx) => (
              <div key={member.name} className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]">
                <MemberCard member={member} idx={topRow.length + idx} />
              </div>
            ))}
          </div>
        )}

        {/* Stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-8 rounded-2xl border border-[#1a7a43]/20 bg-white/70 px-8 py-5 shadow-sm backdrop-blur-sm"
        >
          {[
            { label: "Membros", value: `${members.length}` },
            { label: "Fundada", value: "2024" },
            { label: "Localização", value: "Moçambique" },
            { label: "Missão", value: "Sustentabilidade" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-3">
              {i !== 0 && <div className="hidden h-5 w-px bg-[#1a7a43]/20 sm:block" />}
              <div className="text-center">
                <p className="text-lg font-black tracking-tight text-[#0c4724]">{stat.value}</p>
                <p className="text-[9px] font-semibold uppercase tracking-widest text-[#3d5a47]/55">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}