"use client";

import { Facebook, Linkedin, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { getWhatsAppHref } from "@/lib/whatsapp";

export function Footer() {
  const t = useTranslations("footer");
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const locale = segments[0] === "pt" || segments[0] === "en" ? segments[0] : "pt";

  return (
    <footer className="border-t border-primary-soft/40 bg-primary text-zinc-100">
      <div className="section-container py-8 md:py-10 grid gap-8 md:grid-cols-[minmax(0,1.4fr)_repeat(2,minmax(0,1fr))] items-start">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="BIOCLEAN ENVIRONMENT logo"
              width={40}
              height={40}
              className="rounded-full bg-white/10 p-1"
            />
            <h3 className="text-sm font-semibold text-white sm:text-base">
              BIOCLEAN ENVIRONMENT SU, LDA
            </h3>
          </div>
          <p className="mt-3 text-sm text-primary-soft leading-relaxed md:text-base">{t("tagline")}</p>
          <p className="mt-3 text-sm text-primary-soft/80">{t("founded")}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white sm:text-base">{t("contacts")}</h4>
          <p className="mt-2 text-sm md:text-base">
            Tel: +258 87 808 5088 / +258 87 637 2482
          </p>
          <p className="mt-1 text-sm md:text-base">Email: info@biocleanenvironment.com</p>
          <p className="mt-1 text-sm md:text-base">{t("address")}</p>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-gold sm:text-base">
              {t("quickLinks")}
            </h4>
            <ul className="mt-2 space-y-1 text-sm text-primary-soft md:text-base">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-white hover:underline hover:underline-offset-2"
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="transition hover:text-white hover:underline hover:underline-offset-2"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="transition hover:text-white hover:underline hover:underline-offset-2"
                >
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/projectos"
                  className="transition hover:text-white hover:underline hover:underline-offset-2"
                >
                  {t("projects")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="transition hover:text-white hover:underline hover:underline-offset-2"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gold sm:text-base">{t("social")}</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              <a
                href="https://www.linkedin.com/company/bioclean-environment-lda/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm text-primary-soft transition hover:bg-white/20 md:text-base"
              >
                <Linkedin className="h-4 w-4 text-gold" />
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/share/1Aty6UbRf2/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm text-primary-soft transition hover:bg-white/20 md:text-base"
              >
                <Facebook className="h-4 w-4 text-gold" />
                Facebook
              </a>
              <a
                href={getWhatsAppHref(locale)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm text-primary-soft transition hover:bg-white/20 md:text-base"
              >
                <MessageCircle className="h-4 w-4 text-gold" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-soft/50 bg-gold py-3 text-center text-xs text-charcoal">
        {t("copyright")}
      </div>
    </footer>
  );
}
