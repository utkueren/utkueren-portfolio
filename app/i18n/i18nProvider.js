// components/i18n/I18nProvider.js
"use client";

import React, { createContext, useContext, useMemo } from "react";

const I18nContext = createContext(null);

function getByPath(obj, path) {
  return path
    .split(".")
    .reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

export function I18nProvider({ locale, messages, children }) {
  const value = useMemo(() => {
    const t = (key, fallback) => {
      const v = getByPath(messages, key);
      return v ?? fallback ?? key;
    };
    return { locale, t };
  }, [locale, messages]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
