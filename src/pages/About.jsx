import React from "react";
import { profile } from "../data/profile.js";
import { education } from "../data/education.js";
import { experience } from "../data/experience.js";
import TimelineItem from "../components/TimelineItem.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function About() {
  const { t, pick } = useLanguage();
  return (
    <>
      <div className="page-header container">
        <span className="eyebrow">{t("about.eyebrow")}</span>
        <h1>{t("about.title")}</h1>
        <p>{t("about.subtitle")}</p>
      </div>

      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48 }}>
          <div className="prose">
            {pick(profile.bio).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <aside className="facts-box">
            <span className="eyebrow" style={{ marginBottom: 16 }}>{t("about.factsEyebrow")}</span>
            <dl>
              {profile.quickFacts.map((f) => (
                <div className="row" key={pick(f.label)}>
                  <dt>{pick(f.label)}</dt>
                  <dd>{pick(f.value)}</dd>
                </div>
              ))}
            </dl>
            <a href={profile.cvFile} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 18 }}>
              {t("common.downloadCv")}
            </a>
          </aside>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t("about.educationEyebrow")}</span>
            <h2>{t("about.educationTitle")}</h2>
          </div>
          <div className="grid-2">
            {education.map((e) => (
              <div className="card" key={e.degree}>
                <span className="meta">{e.year}</span>
                <h3>{e.degree}</h3>
                <p>{e.institution} · {e.field}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t("about.experienceEyebrow")}</span>
            <h2>{t("about.experienceTitle")}</h2>
            <p>{t("about.experienceDesc")}</p>
          </div>
          <div className="timeline">
            {experience.map((e, i) => (
              <TimelineItem key={i} {...e} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
