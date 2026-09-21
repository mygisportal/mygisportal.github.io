import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <div className="container" style={{ padding: "100px 24px", textAlign: "center" }}>
      <span className="eyebrow">404</span>
      <h1 style={{ marginBottom: 16 }}>{t("notfound.title")}</h1>
      <Link to="/" className="btn btn-primary">{t("common.backHome")}</Link>
    </div>
  );
}
