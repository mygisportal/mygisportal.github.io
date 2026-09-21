import React, { createContext, useContext, useEffect, useState } from "react";
import { strings } from "./strings.js";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("site-lang") || "en");

  useEffect(() => {
    localStorage.setItem("site-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (path) => path.split(".").reduce((o, k) => (o ? o[k] : undefined), strings[lang]) ?? path;
  const pick = (field) => (field && typeof field === "object" && "en" in field ? field[lang] : field);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, pick }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
