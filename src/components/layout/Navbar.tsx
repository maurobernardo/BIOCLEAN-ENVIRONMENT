"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  Menu,
  X,
  Home,
  Info,
  Briefcase,
  ImageIcon,
  PhoneCall
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { href: "/", key: "nav.home", icon: Home },
  { href: "/sobre", key: "nav.about", icon: Info },
  { href: "/servicos", key: "nav.services", icon: Briefcase },
  { href: "/projectos", key: "nav.projects", icon: ImageIcon },
  { href: "/contacto", key: "nav.contact", icon: PhoneCall }
] as const;

export function Navbar() {
  const t = useTranslations();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = (segments[0] === "pt" || segments[0] === "en"
    ? segments[0]
    : "pt") as "pt" | "en";

  const isHome =
    pathname === `/${currentLocale}` || pathname === "/" || pathname === "";

  const replaceLocale = (nextLocale: "pt" | "en") => {
    const rest = segments.slice(1).join("/");
    return `/${nextLocale}${rest ? `/${rest}` : ""}`;
  };

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setOpen(false);
      setIsScrolled(window.scrollY > 40); // garante estado correcto ao carregar/navegar
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <motion.header className="fixed inset-x-0 top-0 z-40">
      <motion.div
        animate={{
          backgroundColor:
            isHome && !isScrolled ? "transparent" : "rgba(255,255,255,0.96)",
          backdropFilter:
            isHome && !isScrolled ? "blur(0px)" : "blur(14px)",
          boxShadow:
            isHome && !isScrolled
              ? "0 0 0 rgba(0,0,0,0)"
              : "0 10px 30px rgba(0,0,0,0.18)",
          scale: 1,
          opacity: 1,
          y: 0
        }}
        transition={{ type: "spring", stiffness: 180, damping: 22 }}
        className="border-b border-white/5"
      >
        <nav className="section-container flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="BIOCLEAN ENVIRONMENT logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>

          <div
            className={`hidden items-center gap-10 text-sm md:flex ${
              isHome && !isScrolled ? "text-zinc-100" : "text-charcoal"
            }`}
          >
            <div className="flex gap-6">
              {navLinks.map(({ href, key, icon: Icon }) => {
                const fullPath =
                  href === "/"
                    ? `/${currentLocale}`
                    : `/${currentLocale}${href}`;
                const active = pathname === fullPath;
                return (
                  <Link
                    key={key}
                    href={fullPath}
                    className="relative flex items-center gap-1.5 font-medium tracking-wide transition-colors hover:text-gold"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{t(key)}</span>
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-gold"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 30
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/30 p-1 text-[11px] font-mono uppercase tracking-[0.18em]">
                <Link
                  href={replaceLocale("pt")}
                  className={`px-2 py-1 rounded-full transition-colors ${
                    currentLocale === "pt"
                      ? "bg-gold text-charcoal"
                      : "text-zinc-200"
                  }`}
                >
                  PT
                </Link>
                <Link
                  href={replaceLocale("en")}
                  className={`px-2 py-1 rounded-full transition-colors ${
                    currentLocale === "en"
                      ? "bg-gold text-charcoal"
                      : "text-zinc-200"
                  }`}
                >
                  EN
                </Link>
              </div>

              <Link
                href={`/${currentLocale}/contacto`}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] shadow-lg transition hover:shadow-xl ${
                  isScrolled
                    ? "bg-primary text-white shadow-primary/40 hover:shadow-primary/60"
                    : "bg-gold text-charcoal shadow-gold/40 hover:shadow-gold/60"
                }`}
              >
                {t("nav.ctaProposal")}
              </Link>
            </div>
          </div>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className={`inline-flex items-center justify-center rounded-full p-3 transition-colors md:hidden ${
              open
                ? "border-4 border-primary bg-white/95 text-primary shadow-lg ring-2 ring-primary/30"
                : isHome && !isScrolled
                  ? "border-2 border-white/25 bg-primary/90 text-white shadow-md backdrop-blur-sm"
                  : "border-4 border-primary bg-primary text-white shadow-lg shadow-primary/30 ring-2 ring-primary/30"
            }`}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-container pb-4 md:hidden"
          >
            <div className="space-y-1 rounded-2xl border-2 border-primary/40 bg-primary p-4 shadow-xl shadow-primary/20">
              {navLinks.map(({ href, key, icon: Icon }) => {
                const fullPath =
                  href === "/"
                    ? `/${currentLocale}`
                    : `/${currentLocale}${href}`;
                const active = pathname === fullPath;
                return (
                  <Link
                    key={key}
                    href={fullPath}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      active
                        ? "bg-white/20 text-white"
                        : "text-primary-soft hover:bg-white/15 hover:text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    <span>{t(key)}</span>
                  </Link>
                );
              })}
              <Link
                href={`/${currentLocale}/contacto`}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gold px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-charcoal shadow-lg transition hover:bg-gold/90"
              >
                {t("nav.ctaProposal")}
              </Link>
              <div className="flex gap-2 pt-2">
                <Link
                  href={replaceLocale("pt")}
                  className={`flex-1 rounded-xl px-4 py-2.5 text-center text-sm font-semibold transition-colors ${
                    currentLocale === "pt"
                      ? "bg-white text-primary"
                      : "bg-white/15 text-primary-soft hover:bg-white/25 hover:text-white"
                  }`}
                >
                  PT
                </Link>
                <Link
                  href={replaceLocale("en")}
                  className={`flex-1 rounded-xl px-4 py-2.5 text-center text-sm font-semibold transition-colors ${
                    currentLocale === "en"
                      ? "bg-white text-primary"
                      : "bg-white/15 text-primary-soft hover:bg-white/25 hover:text-white"
                  }`}
                >
                  EN
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.header>
  );
}

