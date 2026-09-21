import React from "react";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function PublicationItem({ pub }) {
  const { t } = useLanguage();
  const Title = pub.link ? "a" : "span";
  const titleProps = pub.link ? { href: pub.link, target: "_blank", rel: "noreferrer" } : {};
  return (
    <li className="pub-item">
      <span className="pub-year">{pub.year}</span>
      <div>
        <Title {...titleProps}>
          <p className="pub-title" style={{ color: pub.link ? "var(--teal-dark)" : "var(--ink)" }}>{pub.title}</p>
        </Title>
        <p className="pub-authors">{pub.authors}</p>
        <p className="pub-venue">{pub.venue}</p>
        <span className="pub-type">{t(`publications.filters.${pub.type}`)}</span>
      </div>
    </li>
  );
}
