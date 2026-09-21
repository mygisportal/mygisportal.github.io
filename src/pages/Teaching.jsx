import React from "react";
import { teaching, teachingAwards } from "../data/teaching.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Teaching() {
  const { t, pick } = useLanguage();
  return (
    <>
      <div className="page-header container">
        <span className="eyebrow">{t("teaching.eyebrow")}</span>
        <h1>{t("teaching.title")}</h1>
        <p>{pick(teaching.summary)}</p>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{pick(teaching.period)}</span>
            <h2>{pick(teaching.position)}</h2>
            <p>{teaching.institution}</p>
          </div>
          <div className="grid-2">
            {teaching.courses.map((c) => (
              <div className="card" key={pick(c.name)}>
                <h3>{pick(c.name)}</h3>
                <p>{pick(c.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t("teaching.awardsEyebrow")}</span>
            <h2>{t("teaching.awardsTitle")}</h2>
          </div>
          <ul className="pub-list">
            {teachingAwards.map((a, i) => (
              <li className="pub-item" key={i}>
                <span className="pub-year">{a.year}</span>
                <div>
                  <p className="pub-title">{pick(a.title)}</p>
                  <p className="pub-venue">{a.institution}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
