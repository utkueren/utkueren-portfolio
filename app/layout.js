import { Josefin_Sans } from "next/font/google";
import "./globals.css";

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
    <html lang="tr">
      <body className={josefin.className}>{children}</body>
    </html>
  );
}
