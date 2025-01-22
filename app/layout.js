import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata = {
  title: "UTKUEREN",
  description: "UTKUEREN's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.variable} antialiased bg-primary`}>
        {children}
      </body>
    </html>
  );
}
