import React from "react";
import Navbar from "./components/Navbar.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Skeleton from "./components/Skeleton.jsx";
import products from "./data/products.js";

export default function App() {
  const [loading, setLoading] = React.useState(true);

  // Simula atraso de carregamento (skeleton) – 1.2s
  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main className="container" role="main">
        <h1 className="sr-only">Mini Loja</h1>
        <section
          className="products-grid"
          aria-label="Lista de produtos"
          aria-busy={loading ? "true" : "false"}
        >
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)
            : products.map((p) => <ProductCard key={p.id} product={p} />)}
        </section>
      </main>
    </div>
  );
}
