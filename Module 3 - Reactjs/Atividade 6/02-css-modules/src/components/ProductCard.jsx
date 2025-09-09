import React from "react";
import Button from "./Button.jsx";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const [adding, setAdding] = React.useState(false);

  function handleAdd() {
    setAdding(true);
    setTimeout(() => setAdding(false), 900);
  }

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img src={product.image} alt="" loading="lazy" width="400" height="400" />
        {product.tag && <span className={`${styles.tag} ${styles[product.tag]}`}>{product.tag}</span>}
      </div>
      <div className={styles.body}>
        <h2 className={styles.title}>{product.title}</h2>
        <div className={styles.meta}>
          <span className={styles.price}>{product.price}</span>
          <span>{"★".repeat(Math.round(product.rating))}</span>
        </div>
        <div className={styles.actions}>
          <Button variant="solid" onClick={handleAdd} disabled={adding}>
            {adding ? "Adicionando..." : "Adicionar"}
          </Button>
          <Button variant="outline">Detalhes</Button>
          <Button variant="ghost">♥</Button>
        </div>
      </div>
    </article>
  );
}
