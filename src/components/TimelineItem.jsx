import React from "react";

export default function TimelineItem({ period, title, employer, role }) {
  return (
    <div className="timeline-item">
      <span className="period">{period}</span>
      <h3>{title}</h3>
      <p className="employer">{role ? `${role} · ` : ""}{employer}</p>
    </div>
  );
}
