// app/sitemap.js
import { locales, defaultLocale } from "./i18n/config";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const routes = [
    // home route (locale bazlı)
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: locale === defaultLocale ? 1 : 0.9,
    })),
  ];

  return routes;
}
