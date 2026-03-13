import { getRequestConfig } from "next-intl/server";

const supportedLocales = ["pt", "en"] as const;
type SupportedLocale = (typeof supportedLocales)[number];
const defaultLocale: SupportedLocale = "pt";

export default getRequestConfig(({ locale }) => {
  const currentLocale: SupportedLocale = supportedLocales.includes(
    locale as SupportedLocale
  )
    ? (locale as SupportedLocale)
    : defaultLocale;

  return {
    locale: currentLocale,
    messages: import(`../messages/${currentLocale}.json`).then(
      (mod) => mod.default
    )
  };
});


