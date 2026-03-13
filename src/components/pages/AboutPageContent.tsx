"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Sparkles, Leaf, ShieldCheck } from "lucide-react";

export function AboutPageContent() {
  const t = useTranslations("pages.sobre");

  return (
    <section className="relative overflow-hidden bg-muted pb-20 md:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(12,71,36,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(12,71,36,0.06)_1px,transparent_1px)] bg-[size:34px_34px]" />
        <div className="absolute -top-24 left-10 h-64 w-64 rounded-full bg-primary-soft/25 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />
      </div>

      <div className="section-container relative z-10 space-y-12 pt-8 pb-10 sm:pt-10 sm:pb-10 lg:pt-14 lg:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl space-y-4"
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-soft/60 bg-primary-soft/20 px-4 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span>{t("kicker")}</span>
          </div>
          <h1 className="font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl md:text-[2.9rem]">
            {t("title")}
          </h1>
          <p className="text-sm md:text-[15px] text-warm-gray leading-relaxed">
            {t("intro")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid gap-6 md:grid-cols-3"
        >
          <div className="relative flex items-start gap-4 overflow-hidden rounded-3xl border-2 border-primary bg-white p-6 shadow-md">
            <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-primary-soft/15" />
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary-soft/25 text-primary">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="relative space-y-1">
              <p className="text-base font-semibold text-primary">Integridade</p>
              <ul className="space-y-1 text-xs text-warm-gray">
                <li>Atuação com ética e transparência.</li>
                <li>Responsabilidade em todas as fases dos projectos.</li>
              </ul>
            </div>
          </div>
          <div className="relative flex items-start gap-4 overflow-hidden rounded-3xl border-2 border-primary bg-white p-6 shadow-md">
            <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-primary-soft/15" />
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary-soft/25 text-primary">
              <Leaf className="h-5 w-5" />
            </div>
            <div className="relative space-y-1">
              <p className="text-base font-semibold text-primary">Inovação</p>
              <ul className="space-y-1 text-xs text-warm-gray">
                <li>Aplicação de metodologias modernas.</li>
                <li>Parcerias e ferramentas para melhor desempenho ambiental.</li>
              </ul>
            </div>
          </div>
          <div className="relative flex items-start gap-4 overflow-hidden rounded-3xl border-2 border-primary bg-white p-6 shadow-md">
            <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-primary-soft/15" />
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary-soft/25 text-primary">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="relative space-y-1">
              <p className="text-base font-semibold text-primary">Impacto</p>
              <ul className="space-y-1 text-xs text-warm-gray">
                <li>Foco no impacto real nas pessoas e no ambiente.</li>
                <li>Contribuição para negócios mais sustentáveis em Moçambique.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-soft/60 bg-primary-soft/20 px-4 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>Nossa História</span>
            </div>
            <p className="text-sm text-warm-gray leading-relaxed">
              Desde 2024, a BIOCLEAN ENVIRONMENT SU, LDA tem apoiado empresas
              e instituições públicas em Moçambique a integrar a sustentabilidade
              ambiental e social no centro das suas decisões.
            </p>
            <div className="grid gap-5 md:grid-cols-3">
              <div className="relative rounded-3xl border-2 border-primary bg-white/95 p-6 shadow-sm">
                <div className="absolute -top-3 left-5 flex h-7 w-7 items-center justify-center rounded-full border border-primary-soft/70 bg-muted text-[11px] font-mono text-primary">
                  1
                </div>
                <p className="mt-4 text-[12px] font-mono uppercase tracking-[0.18em] text-primary">
                  Fundação · 2024
                </p>
                <ul className="mt-3 space-y-1.5 text-[13px] text-warm-gray">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>Nascemos em Nampula para apoiar projectos mais responsáveis.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>Alinhamento com a legislação ambiental e social.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>Foco em criar valor para empresas e comunidades.</span>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-3xl border-2 border-primary bg-white/95 p-6 shadow-sm">
                <div className="absolute -top-3 left-5 flex h-7 w-7 items-center justify-center rounded-full border border-primary-soft/70 bg-muted text-[11px] font-mono text-primary">
                  2
                </div>
                <p className="mt-4 text-[12px] font-mono uppercase tracking-[0.18em] text-primary">
                  Equipa Multidisciplinar
                </p>
                <ul className="mt-3 space-y-1.5 text-[13px] text-warm-gray">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>Engenharia, gestão ambiental, HST e gestão social.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>Conhecimento técnico aliado à realidade moçambicana.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>Capacidade de actuação em diferentes províncias.</span>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-3xl border-2 border-primary bg-white/95 p-6 shadow-sm">
                <div className="absolute -top-3 left-5 flex h-7 w-7 items-center justify-center rounded-full border border-primary-soft/70 bg-muted text-[11px] font-mono text-primary">
                  3
                </div>
                <p className="mt-4 text-[12px] font-mono uppercase tracking-[0.18em] text-primary">
                  Resultados e Impacto
                </p>
                <ul className="mt-3 space-y-1.5 text-[13px] text-warm-gray">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>Acompanhamento próximo em todas as fases do projecto.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>Indicadores claros de conformidade e desempenho.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>Impacto positivo nas comunidades e no ambiente.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="rounded-3xl border-2 border-primary bg-white/98 p-6 shadow-md md:p-7"
        >
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:text-left">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary-soft/80 bg-primary-soft/40 shadow-md">
              <Image
                src="/images/ceo.png"
                alt="Manuel Jivane Andrade"
                fill
                className="object-cover"
              />
            </div>
              <div className="space-y-3">
              <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-primary">
                Liderança
              </p>
              <p className="text-sm font-semibold text-primary">
                MANUEL JIVANE ANDRADE
              </p>
              <p className="text-xs text-warm-gray leading-relaxed">
                CEO da BIOCLEAN ENVIRONMENT · Engenheiro Rural · Especialista
                em Água, Saneamento e Gestão Ambiental.
              </p>

              <div className="grid gap-4 text-[13px] text-warm-gray md:grid-cols-2">
                <div className="space-y-1">
                  <p className="font-semibold text-primary">
                    Formação Académica
                  </p>
                  <p>
                    Licenciado em Engenharia Rural, com especialização em Água e
                    Saneamento pela Universidade Eduardo Mondlane (2022).
                  </p>
                  <p className="mt-2 font-semibold text-primary">
                    Competências Técnicas
                  </p>
                  <ul className="mt-1 space-y-1.5">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>Gestão de Resíduos e Desenvolvimento Rural.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>Tratamento de Águas Residuais e de Consumo.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>Sistemas de Gestão Ambiental (ISO 14001:2015).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>Segurança e Saúde Ocupacional (ISO 45001:2018).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>Ecologia e Sustentabilidade.</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-primary">
                    Certificações e Ferramentas
                  </p>
                  <ul className="mt-1 space-y-1.5">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>Auditorias Internas ISO 14001 &amp; ISO 45001.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>Análise de Incidentes e Avaliação de Riscos (HIRA).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>Ciclo PDCA (Plan-Do-Check-Act).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>Auditoria Ambiental e Identificação de Impactos.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>Gestão de Não Conformidades e Ações Corretivas.</span>
                    </li>
                  </ul>
                  <p className="mt-3 font-semibold text-primary">
                    Experiência Profissional
                  </p>
                  <ul className="mt-1 space-y-1.5">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>
                        <span className="font-semibold">
                          CEO – BIOCLEAN ENVIRONMENT (2024 – Presente):
                        </span>{" "}
                        lidera a estratégia de crescimento e inovação, assegurando
                        soluções ambientais, de saúde, segurança e bem-estar
                        social.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>
                        <span className="font-semibold">
                          Safety Officer – Zhongmei Engineering Group (Pty) Ltd:
                        </span>{" "}
                        experiência em HST, avaliação de riscos, toolbox talks e
                        relatórios de progresso.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>
                        <span className="font-semibold">
                          Oficial de Saúde e Segurança no Trabalho – BMC
                          Consultores LDA:
                        </span>{" "}
                        implementação de medidas preventivas, auditorias de
                        conformidade e relatórios técnicos.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

