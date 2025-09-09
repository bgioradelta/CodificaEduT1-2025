import React from "react";
import styles from "./Navbar.module.css";

function getStoredTheme() {
  try {
    const v = localStorage.getItem("theme");
    if (v === "light" || v === "dark") return v;
  } catch {}
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function Navbar() {
  const [theme, setTheme] = React.useState(getStoredTheme());
  const [cartCount] = React.useState(0);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className={styles.navbar} role="banner">
      <nav className={styles.navbarInner} aria-label="Barra de navegação">
        <a href="#" className={styles.logo}>
          🛍️ Mini Loja
        </a>
        <div className={styles.actions}>
          <button
            className={styles.iconBtn}
            role="switch"
            aria-checked={theme === "dark"}
            aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
            onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
          <a href="#" className={styles.cart}>
            🛒
            <span className={styles.badge}>{cartCount}</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
