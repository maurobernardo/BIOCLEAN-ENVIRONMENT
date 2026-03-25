"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ContactMiniSection() {
  const t = useTranslations("homeContactMini");
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const locale = segments[0] === "pt" || segments[0] === "en" ? segments[0] : "pt";

  return (
    <section className="section-container section-padding">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="space-y-3 text-center"
      >
        <p className="text-sm font-mono uppercase tracking-[0.18em] text-primary">
          {t("kicker")}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl">{t("title")}</h2>
        <p className="mx-auto max-w-2xl text-sm text-warm-gray leading-relaxed md:text-base">
          {t("description")}
        </p>
      </motion.div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="flex items-center gap-3 rounded-2xl border border-primary-soft/40 bg-white/90 p-4 text-sm md:text-base">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft/30 text-primary">
            <Phone className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-semibold">Telefone</p>
            <p className="text-sm text-warm-gray">
              +258 87 808 5088
              <br />
              +258 87 637 2482
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-primary-soft/40 bg-white/90 p-4 text-sm md:text-base">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft/30 text-primary">
            <Mail className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-semibold">Email</p>
            <p className="text-sm text-warm-gray">
              info@biocleanenvironment.com
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-primary-soft/40 bg-white/90 p-4 text-sm md:text-base">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft/30 text-primary">
            <MapPin className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-semibold">Endereço</p>
            <p className="text-sm text-warm-gray">
              Bairro Muhala Expansão
              <br />
              Nampula, Moçambique
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-sm">
        <Link
          href={`/${locale}/contacto`}
          className="font-mono uppercase tracking-[0.18em] text-primary underline-offset-2 hover:underline"
        >
          Página de Contacto Detalhada
        </Link>
      </div>
    </section>
  );
}

