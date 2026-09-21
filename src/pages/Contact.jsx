import React from "react";
import { profile } from "../data/profile.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Contact() {
  const { t, pick } = useLanguage();
  const cards = [
    { k: t("contact.email"), v: profile.email, href: `mailto:${profile.email}` },
    { k: t("contact.scholar"), v: t("contact.scholarDesc"), href: profile.social.scholar },
    { k: t("contact.scopus"), v: t("contact.scopusDesc"), href: profile.social.scopus },
    { k: t("contact.orcid"), v: profile.social.orcid.replace("https://orcid.org/", ""), href: profile.social.orcid },
    { k: t("contact.researchgate"), v: t("contact.researchgateDesc"), href: profile.social.researchgate },
    { k: t("contact.institution"), v: profile.affiliation, href: null },
  ];

  return (
    <>
      <div className="page-header container">
        <span className="eyebrow">{t("contact.eyebrow")}</span>
        <h1>{t("contact.title")}</h1>
        <p>{t("contact.subtitle")}</p>
      </div>

      <section className="section">
        <div className="container contact-grid">
          {cards.map((c) => (
            <div className="contact-card" key={c.k}>
              <span className="k">{c.k}</span>
              {c.href ? (
                <a className="v" href={c.href} target="_blank" rel="noreferrer">{c.v}</a>
              ) : (
                <span className="v">{c.v}</span>
              )}
            </div>
          ))}
          <div className="contact-card">
            <span className="k">{t("contact.address")}</span>
            <span className="v">{profile.address}</span>
          </div>
        </div>
      </section>
    </>
  );
}
