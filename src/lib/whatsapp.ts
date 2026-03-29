const WHATSAPP_NUMBER = "258876372482";

export function getWhatsAppHref(locale: "pt" | "en" = "pt") {
  const text =
    locale === "en"
      ? "Hello! I came from the BIOCLEAN ENVIRONMENT website and would like to talk to a specialist about your services."
      : "Ola! Vim atraves do website da BIOCLEAN ENVIRONMENT e gostaria de falar com um especialista sobre os vossos servicos.";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

