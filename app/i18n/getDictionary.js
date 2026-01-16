// i18n/getDictionary.js
import "server-only";
import { locales, defaultLocale } from "./config";

const dictionaries = {
  tr: () => import("./dictionaries/tr.json").then((m) => m.default),
  en: () => import("./dictionaries/en.json").then((m) => m.default),
};

export async function getDictionary(locale) {
  const safeLocale = locales.includes(locale) ? locale : defaultLocale;
  return dictionaries[safeLocale]();
}
