import React from "react";
import styles from "./Button.module.css";

export default function Button({ variant = "solid", disabled, children, ...props }) {
  return (
    <button
      className={`${styles.btn} ${styles[variant]}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
