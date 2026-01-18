// app/[locale]/layout.js
import { I18nProvider } from "../i18n/i18nProvider";
import { getDictionary } from "../i18n/getDictionary";
import { locales, defaultLocale } from "../i18n/config";

const siteName = "Utku Eren";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function resolveLocale(localeFromParams) {
  return locales.includes(localeFromParams) ? localeFromParams : defaultLocale;
}

export async function generateMetadata({ params }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  // ✅ Next.js sync dynamic api fix
  const { locale: localeFromParams } = await params;
  const locale = resolveLocale(localeFromParams);

  const isTR = locale === "tr";

  const title = isTR
    ? "UTKUEREN — Ürün Tasarımcısı & Geliştirici"
    : "UTKUEREN — Product Designer & Developer";

  const description = isTR
    ? "Bilgisayar Mühendisi olarak ürün tasarımı ve geliştirme odaklı, kullanıcı merkezli dijital ürünler geliştiriyor; AI destekli ürünler üzerine çalışıyorum."
    : "Computer Engineer focused on product design and development, building user-centered digital products while working on AI-powered solutions.";

  const url = `${baseUrl}/${locale}`;

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,

    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en`,
        tr: `${baseUrl}/tr`,
      },
    },

    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName,
      locale: isTR ? "tr_TR" : "en_US",
      images: [
        {
          url: "/og/og.png", // ✅ public/og/og.png
          width: 1200,
          height: 630,
          alt: `${siteName} — Portfolio`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og/og.png"],
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  // ✅ Next.js sync dynamic api fix
  const { locale: localeFromParams } = await params;
  const locale = resolveLocale(localeFromParams);

  const messages = await getDictionary(locale);

  return (
    <I18nProvider locale={locale} messages={messages}>
      {children}
    </I18nProvider>
  );
}
