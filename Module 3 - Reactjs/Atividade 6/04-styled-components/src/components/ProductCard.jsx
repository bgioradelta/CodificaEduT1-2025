import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import Skeleton from "./Skeleton";

const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius};
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export default function ProductCard({ product }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Skeleton />;

  return (
    <Card>
      <div style={{ aspectRatio: "1/1", background: "#ddd" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          loading="lazy"
        />
      </div>
      <h3 style={{ fontSize: "1rem", marginTop: "0.5rem" }}>{product.title}</h3>
      <p style={{ fontWeight: "bold" }}>R$ {product.price}</p>
      <p>{"★".repeat(product.rating)}</p>
      {product.tag && <span>{product.tag}</span>}
      <Button $variant="outline">Adicionar</Button>
    </Card>
  );
}
