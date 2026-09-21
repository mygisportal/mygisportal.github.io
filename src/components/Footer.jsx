import React from "react";
import { profile } from "../data/profile.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <p className="footer-note">
          © {year} {profile.name}. {t("footer.note")}
        </p>
        <div className="footer-links">
          <a href={profile.social.scholar} target="_blank" rel="noreferrer">Google Scholar</a>
          <a href={profile.social.scopus} target="_blank" rel="noreferrer">Scopus</a>
          <a href={profile.social.orcid} target="_blank" rel="noreferrer">ORCID</a>
          <a href={profile.social.researchgate} target="_blank" rel="noreferrer">ResearchGate</a>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </div>
    </footer>
  );
}
