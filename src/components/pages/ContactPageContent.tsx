"use client";

import { motion } from "framer-motion";
import { ChevronDown, Facebook, Linkedin, MapPin, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export function ContactPageContent() {
  const t = useTranslations("pages.contacto");

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = "Obrigatório.";
    if (!form.email.trim()) nextErrors.email = "Obrigatório.";
    if (!form.phone.trim()) nextErrors.phone = "Obrigatório.";
    if (!form.message.trim()) nextErrors.message = "Obrigatório.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      return;
    }

    setErrors({});

    // Simula envio assíncrono
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
  };

  return (
    <section className="relative overflow-hidden bg-muted pb-20 md:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(12,71,36,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(12,71,36,0.06)_1px,transparent_1px)] bg-[size:34px_34px]" />
        <div className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-primary-soft/25 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />
      </div>

      <div className="section-container relative z-10 space-y-12 pt-8 pb-10 sm:pt-10 sm:pb-10 lg:pt-14 lg:pb-12">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-soft/60 bg-primary-soft/20 px-4 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span>{t("kicker")}</span>
          </div>
          <h1 className="mt-2 font-display text-3xl font-extrabold text-primary sm:text-4xl md:text-[2.6rem]">
            {t("title")}
          </h1>
          <p className="mt-3 text-sm text-warm-gray">{t("intro")}</p>

          <form
            className="mt-8 space-y-5 rounded-3xl border-2 border-primary bg-white/95 p-5 shadow-md sm:p-6"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {t("form.name")}
                </label>
                <input
                  type="text"
                  placeholder={t("form.namePlaceholder")}
                  value={form.name}
                  onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                  aria-label={t("form.name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className={`mt-1 w-full rounded-xl border bg-white/90 px-3 py-2.5 text-sm text-primary placeholder:text-primary/60 outline-none transition focus:ring-2 focus:ring-primary/20 ${
                    errors.name ? "border-red-500" : "border-primary-soft/50 focus:border-primary"
                  }`}
                />
                {errors.name && (
                  <p id="contact-name-error" className="mt-1 text-xs text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {t("form.email")}
                </label>
                <input
                  type="email"
                  placeholder={t("form.emailPlaceholder")}
                  value={form.email}
                  onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                  aria-label={t("form.email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  className={`mt-1 w-full rounded-xl border bg-white/90 px-3 py-2.5 text-sm text-primary placeholder:text-primary/60 outline-none transition focus:ring-2 focus:ring-primary/20 ${
                    errors.email ? "border-red-500" : "border-primary-soft/50 focus:border-primary"
                  }`}
                />
                {errors.email && (
                  <p id="contact-email-error" className="mt-1 text-xs text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {t("form.phone")}
                </label>
                <input
                  type="tel"
                  placeholder={t("form.phonePlaceholder")}
                  value={form.phone}
                  onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                  aria-label={t("form.phone")}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                  className={`mt-1 w-full rounded-xl border bg-white/90 px-3 py-2.5 text-sm text-primary placeholder:text-primary/60 outline-none transition focus:ring-2 focus:ring-primary/20 ${
                    errors.phone ? "border-red-500" : "border-primary-soft/50 focus:border-primary"
                  }`}
                />
                {errors.phone && (
                  <p id="contact-phone-error" className="mt-1 text-xs text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {t("form.service")}
                </label>
                <div className="relative mt-1">
                  <select
                    className="w-full appearance-none rounded-xl border border-primary-soft/50 bg-white/90 py-2.5 pl-3 pr-10 text-sm text-primary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 [&>option]:bg-white [&>option]:text-primary"
                    value={form.service}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, service: e.target.value }))
                    }
                    aria-label={t("form.service")}
                  >
                    <option value="">{t("form.servicePlaceholder")}</option>
                    <option value="consultoria">{t("form.services.consultoria")}</option>
                    <option value="monitoramento">
                      {t("form.services.monitoramento")}
                    </option>
                    <option value="hst">{t("form.services.hst")}</option>
                    <option value="limpeza">{t("form.services.limpeza")}</option>
                    <option value="residuos">{t("form.services.residuos")}</option>
                    <option value="social">{t("form.services.social")}</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/70" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {t("form.message")}
              </label>
              <textarea
                rows={4}
                placeholder={t("form.messagePlaceholder")}
                value={form.message}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, message: e.target.value }))
                }
                aria-label={t("form.message")}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className={`mt-1 w-full rounded-xl border bg-white/90 px-3 py-2.5 text-sm text-primary placeholder:text-primary/60 outline-none transition focus:ring-2 focus:ring-primary/20 ${
                  errors.message
                    ? "border-red-500"
                    : "border-primary-soft/50 focus:border-primary"
                }`}
              />
              {errors.message && (
                <p id="contact-message-error" className="mt-1 text-xs text-red-600">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-primary/40 transition hover:bg-primary-accent hover:shadow-primary/60 disabled:cursor-not-allowed disabled:bg-primary/60"
              >
                {status === "submitting" ? "A enviar..." : t("form.submit")}
              </button>
              <p className="text-[11px] text-warm-gray">
                Respondemos normalmente em até{" "}
                <span className="font-semibold text-primary">1 dia útil</span>.
              </p>
            </div>

            {status === "success" && (
              <p className="text-xs font-semibold text-primary">
                Mensagem enviada com sucesso. Entraremos em contacto em breve.
              </p>
            )}
            {status === "error" && Object.keys(errors).length > 0 && (
              <p className="text-xs font-semibold text-red-600">
                Por favor, preencha os campos obrigatórios destacados.
              </p>
            )}
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="space-y-5 rounded-3xl border-2 border-primary bg-white/98 p-6 shadow-md md:p-7"
        >
          <h2 className="text-base font-semibold text-primary md:text-lg">{t("contactBox.title")}</h2>
          <p className="text-sm text-warm-gray">
            Tel: +258 87 808 5088 / +258 87 637 2482
            <br />
            Email: info@biocleanenvironment.com
          </p>
          <p className="text-sm text-warm-gray">
            Bairro Muhala Expansão,
            <br />
            Nampula, Moçambique
          </p>
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary">
              {t("contactBox.mapPlaceholder")}
            </p>
            <a
              href="https://www.google.com/maps/search/Bairro+Muhala+Expans%C3%A3o,+Nampula,+Mozambique"
              target="_blank"
              rel="noreferrer"
              className="group relative flex h-[220px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary-soft/40 via-primary-soft/20 to-primary/15"
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDQ1LDEwOSw0NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiLz48L2c+PC9zdmc+')] opacity-60" />
              <MapPin className="relative z-10 h-14 w-14 text-primary" strokeWidth={2} />
              <span className="relative z-10 mt-2 text-center text-sm font-semibold text-primary">
                Bairro Muhala Expansão, Nampula
              </span>
              <span className="relative z-10 mt-1 text-xs text-primary/80">
                Clique para ver no Google Maps
              </span>
              <div className="absolute inset-0 bg-primary/0 transition group-hover:bg-primary/10" />
            </a>
            <a
              href="https://www.google.com/maps/search/Bairro+Muhala+Expans%C3%A3o,+Nampula,+Mozambique"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-sm font-medium text-primary underline-offset-2 hover:underline"
            >
              Ver no Google Maps →
            </a>
          </div>

          <div className="pt-3">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary">
              Redes Sociais
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href="https://www.linkedin.com/company/bioclean-environment-lda/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary-soft/60 bg-primary/5 px-4 py-2.5 text-sm font-medium text-primary transition hover:border-primary hover:bg-primary hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/share/1Aty6UbRf2/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary-soft/60 bg-primary/5 px-4 py-2.5 text-sm font-medium text-primary transition hover:border-primary hover:bg-primary hover:text-white"
              >
                <Facebook className="h-5 w-5" />
                Facebook
              </a>
              <a
                href="https://wa.me/258876372482"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary-soft/60 bg-primary/5 px-4 py-2.5 text-sm font-medium text-primary transition hover:border-primary hover:bg-primary hover:text-white"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-12 mb-8 grid gap-6 md:grid-cols-3 md:mb-12">
        <div className="rounded-2xl border-2 border-primary bg-white/95 p-6 shadow-md">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary">
            Perguntas Frequentes
          </p>
          <p className="mt-3 text-sm font-semibold text-primary">
            Quanto tempo demora para responderem ao meu pedido?
          </p>
          <p className="mt-2 text-sm text-warm-gray leading-relaxed">
            Normalmente respondemos em até 1 dia útil, dependendo da
            complexidade do projecto.
          </p>
        </div>
        <div className="rounded-2xl border-2 border-primary bg-white/95 p-6 shadow-md">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary">
            Serviços &amp; Abrangência
          </p>
          <p className="mt-3 text-sm font-semibold text-primary">
            Atendem apenas empresas em Nampula?
          </p>
          <p className="mt-2 text-sm text-warm-gray leading-relaxed">
            Não. Atuamos em diferentes províncias de Moçambique, de acordo com
            a necessidade do cliente.
          </p>
        </div>
        <div className="rounded-2xl border-2 border-primary bg-white/95 p-6 shadow-md">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary">
            Propostas &amp; Orçamentos
          </p>
          <p className="mt-3 text-sm font-semibold text-primary">
            As propostas têm custo?
          </p>
          <p className="mt-2 text-sm text-warm-gray leading-relaxed">
            A análise inicial do pedido e a elaboração de uma proposta base não
            têm custos associados.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}

