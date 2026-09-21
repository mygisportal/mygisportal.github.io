import React from "react";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function ProjectCard({ item, showFunder }) {
  const { lang } = useLanguage();
  return (
    <article className="card">
      <span className="meta">{item.year}</span>
      <h3>{item.title}</h3>
      {showFunder && (
        <p>
          {item.funder}
          {item.partner && item.partner !== "—" ? ` · ${item.partner}` : ""}
        </p>
      )}
      {item.category && (
        <div className="tag-row">
          <span className="tag">{item.category.replace("-", " ")}</span>
        </div>
      )}
    </article>
  );
}
