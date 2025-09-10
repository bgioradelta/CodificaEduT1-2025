import React from "react";
import Navbar from "./components/Navbar.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Skeleton from "./components/Skeleton.jsx";
import products from "./data/products.js";

export default function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto p-6 md:p-8" role="main">
        <h1 className="sr-only">Mini Loja</h1>
        <section
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          aria-label="Lista de produtos"
          aria-busy={loading ? "true" : "false"}
        >
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)
            : products.map((p) => <ProductCard key={p.id} product={p} />)}
        </section>
      </main>
    </>
  );
}
