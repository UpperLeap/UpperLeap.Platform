export type Locale = (typeof locales)[number];

export const locales = ["en", "de"] as const;
export const defaultLocale: Locale = "en";

export const languagesPrefixes = {
  en: "en-US",
  de: "de-DE",
};
