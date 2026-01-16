// middleware.js
import { NextResponse } from "next/server";
import { locales, defaultLocale } from "./app/i18n/config";

function hasLocale(pathname) {
  return locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
}

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // public dosyalar, next internals, api vs. dokunma
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // .svg .png .pdf vs
  ) {
    return NextResponse.next();
  }

  // "/" => "/tr"
  if (pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(url);
  }

  // "/about" gibi locale’siz girilirse => "/tr/about"
  if (!hasLocale(pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
