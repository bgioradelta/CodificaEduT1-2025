import React from "react";

/**
 * variantes: "solid" | "outline" | "ghost"
 * estados: disabled
 */
export default function Button({
  children,
  variant = "solid",
  disabled = false,
  onClick,
  ariaLabel
}) {
  return (
    <button
      className={`btn btn--${variant}`}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
