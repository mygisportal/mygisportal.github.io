import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { profile } from "../data/profile.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/research", label: t("nav.research") },
    { to: "/publications", label: t("nav.publications") },
    { to: "/teaching", label: t("nav.teaching") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="site-header">
      <div className="container">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">{profile.name.charAt(0)}</span>
          <span className="brand-name">
            {profile.name}
            <em>— researcher</em>
          </span>
        </NavLink>

        <nav className={`main-nav${open ? " open" : ""}`} aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div className="lang-switch" role="group" aria-label="Language">
            <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
            <button className={lang === "id" ? "active" : ""} onClick={() => setLang("id")}>ID</button>
          </div>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
