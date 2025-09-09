import React from "react";
import styles from "./Skeleton.module.css";

export default function Skeleton() {
  return (
    <div className={styles.card} aria-hidden="true">
      <div className={styles.media} />
      <div className={styles.body}>
        <div className={styles.line} />
        <div className={styles.meta}>
          <div className={styles.lineSm} />
          <div className={styles.lineSm} />
        </div>
        <div className={styles.actions}>
          <div className={styles.btn} />
          <div className={styles.btn} />
          <div className={styles.btn} />
        </div>
      </div>
    </div>
  );
}
