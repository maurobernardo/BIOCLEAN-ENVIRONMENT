"use client";

import { Facebook, Linkedin, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";

const footerCopy = {
  pt: {
    tagline: "Soluções profissionais em consultoria ambiental e social em Moçambique.",
    founded: "Fundada em 2024 · Nampula, Moçambique",
    contacts: "Contactos",
    quickLinks: "Links Rápidos",
    home: "Início",
    about: "Sobre Nós",
    services: "Serviços",
    projects: "Projectos",
    contact: "Contacto",
    social: "Redes Sociais",
    copyright: "© 2026 BIOCLEAN ENVIRONMENT SU, LDA. Todos os direitos reservados."
  },
  en: {
    tagline: "Professional environmental and social consulting solutions in Mozambique.",
    founded: "Founded in 2024 · Nampula, Mozambique",
    contacts: "Contacts",
    quickLinks: "Quick Links",
    home: "Home",
    about: "About Us",
    services: "Services",
    projects: "Projects",
    contact: "Contact",
    social: "Social Media",
    copyright: "© 2026 BIOCLEAN ENVIRONMENT SU, LDA. All rights reserved."
  }
};

export function Footer() {
  const locale = useLocale();
  const copy = locale === "en" ? footerCopy.en : footerCopy.pt;

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
            <h3 className="text-base font-semibold text-white">
              BIOCLEAN ENVIRONMENT SU, LDA
            </h3>
          </div>
          <p className="mt-3 text-sm text-primary-soft">{copy.tagline}</p>
          <p className="mt-3 text-xs text-primary-soft/80">{copy.founded}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">{copy.contacts}</h4>
          <p className="mt-2 text-sm">
            Tel: +258 87 808 5088 / +258 87 637 2482
          </p>
          <p className="mt-1 text-sm">Email: info@biocleanenvironment.com</p>
          <p className="mt-1 text-sm">
            Bairro Muhala Expansão, Nampula, Moçambique
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-gold">
              {copy.quickLinks}
            </h4>
            <ul className="mt-2 space-y-1 text-sm text-primary-soft">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-white hover:underline hover:underline-offset-2"
                >
                  {copy.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="transition hover:text-white hover:underline hover:underline-offset-2"
                >
                  {copy.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="transition hover:text-white hover:underline hover:underline-offset-2"
                >
                  {copy.services}
                </Link>
              </li>
              <li>
                <Link
                  href="/projectos"
                  className="transition hover:text-white hover:underline hover:underline-offset-2"
                >
                  {copy.projects}
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="transition hover:text-white hover:underline hover:underline-offset-2"
                >
                  {copy.contact}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gold">{copy.social}</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              <a
                href="https://www.linkedin.com/company/bioclean-environment-lda/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm text-primary-soft transition hover:bg-white/20"
              >
                <Linkedin className="h-4 w-4 text-gold" />
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/share/1Aty6UbRf2/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm text-primary-soft transition hover:bg-white/20"
              >
                <Facebook className="h-4 w-4 text-gold" />
                Facebook
              </a>
              <a
                href="https://wa.me/258876372482"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm text-primary-soft transition hover:bg-white/20"
              >
                <MessageCircle className="h-4 w-4 text-gold" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-soft/50 bg-gold py-3 text-center text-[11px] text-charcoal">
        {copy.copyright}
      </div>
    </footer>
  );
}

