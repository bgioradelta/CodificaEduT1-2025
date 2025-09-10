import React from "react";
import Button from "./Button.jsx";

export default function ProductCard({ product }) {
  const [adding, setAdding] = React.useState(false);

  function handleAdd() {
    setAdding(true);
    setTimeout(() => setAdding(false), 900);
  }

  return (
    <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transform transition-all duration-200 hover:-translate-y-1">
      <div className="relative aspect-square">
        <img src={product.image} alt="" loading="lazy" className="w-full h-full object-cover"/>
        {product.tag && (
          <span className={`absolute top-2 left-2 px-2 py-0.5 text-xs font-bold rounded ${product.tag === 'Novo' ? 'bg-teal-500 text-white' : 'bg-red-500 text-white'}`}>
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-4 grid gap-3">
        <h2 className="text-sm font-bold line-clamp-2">{product.title}</h2>
        <div className="flex justify-between text-gray-500 dark:text-gray-400">
          <span className="font-bold text-gray-900 dark:text-gray-100">{product.price}</span>
          <span>{"★".repeat(Math.round(product.rating))}</span>
        </div>
        <div className="grid grid-cols-[1fr_1fr_44px] gap-3">
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
