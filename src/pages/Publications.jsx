import React, { useMemo, useState } from "react";
import { profile } from "../data/profile.js";
import { publications, books, patents } from "../data/publications.js";
import PublicationItem from "../components/PublicationItem.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

const types = ["All", "Journal", "Conference"];

export default function Publications() {
  const [filter, setFilter] = useState("All");
  const { t } = useLanguage();
  const filtered = filter === "All" ? publications : publications.filter((p) => p.type === filter);
  const byYear = useMemo(() => {
    const groups = {};
    filtered.forEach((p) => {
      groups[p.year] = groups[p.year] || [];
      groups[p.year].push(p);
    });
    return Object.entries(groups).sort((a, b) => b[0].localeCompare(a[0]));
  }, [filtered]);

  return (
    <>
      <div className="page-header container">
        <span className="eyebrow">{t("publications.eyebrow")}</span>
        <h1>{t("publications.title")}</h1>
        <p>{t("publications.subtitle")}</p>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-3" style={{ marginBottom: 40 }}>
            <div className="expertise-card">
              <span className="stat-value" style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", display: "block" }}>{publications.length}</span>
              <p>{t("publications.statTotal")}</p>
            </div>
            <div className="expertise-card">
              <span className="stat-value" style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", display: "block" }}>{books.length}</span>
              <p>{t("publications.statBooks")}</p>
            </div>
            <div className="expertise-card">
              <span className="stat-value" style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", display: "block" }}>{patents.length}</span>
              <p>{t("publications.statPatents")}</p>
            </div>
          </div>

          <div className="filter-row">
            {types.map((ty) => (
              <button key={ty} className={`filter-btn${filter === ty ? " active" : ""}`} onClick={() => setFilter(ty)}>
                {t(`publications.filters.${ty}`)}
              </button>
            ))}
          </div>

          {byYear.map(([year, pubs]) => (
            <div key={year} style={{ marginBottom: 36 }}>
              <h2 style={{ fontStyle: "italic", color: "var(--teal-dark)", fontSize: "1.8rem", marginBottom: 8 }}>{year}</h2>
              <ul className="pub-list">
                {pubs.map((p) => (
                  <PublicationItem key={p.title} pub={p} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t("publications.booksEyebrow")}</span>
            <h2>{t("publications.booksTitle")}</h2>
          </div>
          <div className="grid-2">
            {books.map((b) => (
              <div className="card" key={b.title}>
                <span className="meta">{b.year} · {b.pages} pp.</span>
                <h3>{b.title}</h3>
                <p>{b.publisher} · ISBN {b.isbn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t("publications.patentsEyebrow")}</span>
            <h2>{t("publications.patentsTitle")}</h2>
          </div>
          <ul className="pub-list">
            {patents.map((p) => (
              <li className="pub-item" key={p.number}>
                <span className="pub-year">{p.year}</span>
                <div>
                  <p className="pub-title">{p.title}</p>
                  <p className="pub-venue">{p.type} · No. {p.number}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container prose" style={{ maxWidth: "none" }}>
          <h2 style={{ fontStyle: "italic", marginBottom: 12 }}>{t("publications.citingTitle")}</h2>
          <p style={{ maxWidth: "70ch" }}>
            {t("publications.citingDesc").split(/\{scholar\}|\{scopus\}|\{orcid\}/).reduce((acc, part, i, arr) => {
              acc.push(part);
              if (i === 0) acc.push(<a key="scholar" href={profile.social.scholar} target="_blank" rel="noreferrer">Google Scholar</a>);
              else if (i === 1) acc.push(<a key="scopus" href={profile.social.scopus} target="_blank" rel="noreferrer">Scopus</a>);
              else if (i === 2 && i < arr.length - 1) acc.push(<a key="orcid" href={profile.social.orcid} target="_blank" rel="noreferrer">ORCID</a>);
              return acc;
            }, [])}
          </p>
        </div>
      </section>
    </>
  );
}
