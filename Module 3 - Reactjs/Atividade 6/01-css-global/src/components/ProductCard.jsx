import React from "react";
import Button from "./Button.jsx";

export default function ProductCard({ product }) {
  const [adding, setAdding] = React.useState(false);

  function handleAdd() {
    setAdding(true);
    setTimeout(() => setAdding(false), 900);
  }

  // Acessibilidade para rating e tag
  const ratingLabel = `Avaliação ${product.rating} de 5`;
  const tagLabel = product.tag === "novo" ? "Novo" : "Promoção";

  return (
    <article className="card" tabIndex={0} aria-labelledby={`title-${product.id}`}>
      <div className="card-media">
        {/* ratio 1:1, sem layout shift; lazy loading */}
        <img
          src={product.image}
          alt=""
          loading="lazy"
          width="400"
          height="400"
        />
        {product.tag && (
          <span
            className={`tag tag--${product.tag}`}
            aria-label={`Tag: ${tagLabel}`}
          >
            {product.tag === "novo" ? "Novo" : "Promo"}
          </span>
        )}
      </div>

      <div className="card-body">
        <h2 id={`title-${product.id}`} className="card-title" title={product.title}>
          {product.title}
        </h2>

        <div className="card-meta">
          <span className="price" aria-label={`Preço ${product.price}`}>
            {product.price}
          </span>
          <span className="rating" aria-label={ratingLabel}>
            {"★".repeat(Math.round(product.rating))}{" "}
            <span className="sr-only">{ratingLabel}</span>
          </span>
        </div>

        <div className="card-actions">
          <Button
            variant="solid"
            onClick={handleAdd}
            disabled={adding}
            ariaLabel="Adicionar ao carrinho"
          >
            {adding ? "Adicionando..." : "Adicionar"}
          </Button>

          <Button variant="outline" ariaLabel="Ver detalhes">
            Detalhes
          </Button>

          <Button variant="ghost" ariaLabel="Favoritar">
            ♥
          </Button>
        </div>
      </div>
    </article>
  );
}
