// app/[locale]/layout.js
import { I18nProvider } from "../i18n/i18nProvider";
import { getDictionary } from "../i18n/getDictionary";
import { locales, defaultLocale } from "../i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout(props) {
  const { children } = props;
  const params = await props.params;
  const locale = locales.includes(params.locale)
    ? params.locale
    : defaultLocale;

  const messages = await getDictionary(locale);

  return (
    <I18nProvider locale={locale} messages={messages}>
      {children}
    </I18nProvider>
  );
}
