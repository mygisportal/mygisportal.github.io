import React from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile.js";
import { research } from "../data/research.js";
import { publications } from "../data/publications.js";
import ProjectCard from "../components/ProjectCard.jsx";
import PublicationItem from "../components/PublicationItem.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Home() {
  const { t, pick } = useLanguage();
  const recentProjects = research.slice(0, 3);
  const recentPubs = publications.slice(0, 3);
  const headline = pick(profile.headline).replace(/\.$/, "");

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="hero-kicker">{t("home.kicker")}</p>
            <h1>
              {headline.split(". ").map((part, i) => (
                <React.Fragment key={i}>
                  {part}
                  <span className="dot">.</span>
                  <br />
                </React.Fragment>
              ))}
            </h1>
            <p className="hero-sub">{pick(profile.subheadline)}</p>
            <p className="hero-desc">{pick(profile.heroDesc)}</p>
            <div className="hero-actions">
              <Link to="/research" className="btn btn-primary">{t("home.ctaPrimary")}</Link>
              <Link to="/publications" className="btn btn-ghost">{t("home.ctaSecondary")}</Link>
            </div>
            <div className="hero-stats">
              {profile.stats.map((s) => (
                <div key={s.value + pick(s.label)}>
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{pick(s.label)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="portrait-frame">
            <div className="backdrop"></div>
            <div className="card">
              <div className="photo-wrap">
                <img src={profile.photo} alt={profile.name} />
              </div>
              <div className="portrait-caption">
                <span className="k">{t("home.currently")}</span>
                <p className="v">{profile.affiliation}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t("home.expertiseEyebrow")}</span>
            <h2>{t("home.expertiseTitle")}</h2>
          </div>
          <div className="grid-3">
            {t("home.expertise").map((e) => (
              <div className="expertise-card" key={e.title}>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12, maxWidth: "none" }}>
            <div>
              <span className="eyebrow">{t("home.researchEyebrow")}</span>
              <h2>{t("home.researchTitle")}</h2>
            </div>
            <Link to="/research" style={{ fontSize: "0.88rem" }}>{t("common.viewAll")} →</Link>
          </div>
          <div className="grid-3">
            {recentProjects.map((p) => (
              <ProjectCard key={p.title} item={p} showFunder />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12, maxWidth: "none" }}>
            <div>
              <span className="eyebrow">{t("home.pubEyebrow")}</span>
              <h2>{t("home.pubTitle")}</h2>
            </div>
            <Link to="/publications" style={{ fontSize: "0.88rem" }}>{t("common.viewAll")} →</Link>
          </div>
          <ul className="pub-list">
            {recentPubs.map((p) => (
              <PublicationItem key={p.title} pub={p} />
            ))}
          </ul>
        </div>
      </section>

      <section className="section" style={{ background: "var(--teal-dark)", color: "var(--paper)", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ color: "var(--paper)", fontStyle: "italic" }}>{t("home.ctaTitle")}</h2>
          <p style={{ maxWidth: "56ch", margin: "14px auto 26px", opacity: 0.88 }}>{t("home.ctaDesc")}</p>
          <Link to="/contact" className="btn" style={{ background: "var(--paper)", color: "var(--teal-dark)" }}>
            {t("home.ctaBtn")}
          </Link>
        </div>
      </section>
    </>
  );
}
