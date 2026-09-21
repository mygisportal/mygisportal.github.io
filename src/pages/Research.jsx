import React, { useState } from "react";
import { research, researchCategories } from "../data/research.js";
import ProjectCard from "../components/ProjectCard.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Research() {
  const [filter, setFilter] = useState("all");
  const { t, pick } = useLanguage();
  const items = filter === "all" ? research : research.filter((r) => r.category === filter);

  return (
    <>
      <div className="page-header container">
        <span className="eyebrow">{t("research.eyebrow")}</span>
        <h1>{t("research.title")}</h1>
        <p>{t("research.subtitle")}</p>
      </div>

      <section className="section">
        <div className="container">
          <div className="filter-row">
            {researchCategories.map((c) => (
              <button
                key={c.key}
                className={`filter-btn${filter === c.key ? " active" : ""}`}
                onClick={() => setFilter(c.key)}
              >
                {pick(c.label)}
              </button>
            ))}
          </div>
          <div className="grid-3">
            {items.map((p) => (
              <ProjectCard key={p.title} item={p} showFunder />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
