import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata = {
  title: "UTKUEREN",
  description: "UTKUEREN's Portfolio",
};

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={josefin.className} suppressHydrationWarning>
      <body>
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = window.gtag || gtag;
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  send_page_view: false
                });
              `}
            </Script>
          </>
        ) : null}

        {children}
      </body>
    </html>
  );
}
