import ptMessages from "@/messages/pt.json";
import enMessages from "@/messages/en.json";

export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

export const messages = {
  pt: ptMessages,
  en: enMessages,
} as const;

