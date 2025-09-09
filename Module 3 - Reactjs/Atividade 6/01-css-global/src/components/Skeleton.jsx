import React from "react";

export default function Skeleton() {
  return (
    <div className="card" aria-hidden="true">
      <div className="card-media skeleton-block" />
      <div className="card-body">
        <div className="skeleton-line skeleton-line--lg" />
        <div className="card-meta">
          <div className="skeleton-line skeleton-line--sm" />
          <div className="skeleton-line skeleton-line--sm" />
        </div>
        <div className="card-actions">
          <div className="skeleton-btn" />
          <div className="skeleton-btn skeleton-btn--outline" />
          <div className="skeleton-btn skeleton-btn--ghost" />
        </div>
      </div>
    </div>
  );
}
