import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import type { Locale } from "@/lib/i18n";
import { messages } from "@/lib/i18n";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTopButton } from "@/components/layout/ScrollToTopButton";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const typedLocale = (locale as Locale) ?? "pt";
  const localeMessages = messages[typedLocale];

  return (
    <NextIntlClientProvider locale={typedLocale} messages={localeMessages}>
      <div className="flex min-h-screen flex-col text-foreground">
        <Navbar />
        <div className="flex-1 bg-muted pt-20 md:pt-24">
          {children}
        </div>
        <Footer />
        <ScrollToTopButton />
        <WhatsAppButton />
      </div>
    </NextIntlClientProvider>
  );
}

