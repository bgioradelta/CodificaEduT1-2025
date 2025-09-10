import React from "react";

function getStoredTheme() {
  try {
    const t = localStorage.getItem("theme");
    if (t === "light" || t === "dark") return t;
  } catch {}
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function Navbar() {
  const [theme, setTheme] = React.useState(getStoredTheme());
  const [cartCount] = React.useState(0);

  React.useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="sticky top-0 z-50 bg-surface dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <a href="#" className="font-bold text-xl">🛍️ Mini Loja</a>
        <div className="flex items-center gap-4">
          <button
            role="switch"
            aria-checked={theme === "dark"}
            aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
          <a href="#" className="relative inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-full">
            🛒
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-600 rounded-full">{cartCount}</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
