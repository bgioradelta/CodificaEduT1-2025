import React from "react";

function getStoredTheme() {
  try {
    const v = localStorage.getItem("theme");
    if (v === "light" || v === "dark") return v;
  } catch {}
  // fallback: respeita prefers-color-scheme na primeira carga
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function Navbar() {
  const [theme, setTheme] = React.useState(getStoredTheme());
  const [cartCount] = React.useState(0);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  function toggleTheme() {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  }

  return (
    <header className="navbar" role="banner">
      <nav className="navbar-inner" aria-label="Barra de navegação">
        <a href="#" className="logo" aria-label="Página inicial">
          <span aria-hidden="true">🛍️</span> Mini Loja
        </a>

        <div className="navbar-actions">
          <button
            className="icon-btn"
            role="switch"
            aria-checked={theme === "dark"}
            aria-label={
              theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"
            }
            onClick={toggleTheme}
          >
            <span className="icon" aria-hidden="true">
              {theme === "dark" ? "🌙" : "☀️"}
            </span>
          </button>

          <a
            href="#"
            className="cart"
            aria-label={`Carrinho com ${cartCount} itens`}
          >
            <span className="icon" aria-hidden="true">🛒</span>
            <span className="badge" aria-hidden="true">{cartCount}</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
