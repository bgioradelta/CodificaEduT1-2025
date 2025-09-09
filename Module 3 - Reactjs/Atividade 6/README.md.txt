# Mini Loja — ReactJS

Bem-vindo(a) ao projeto **Mini Loja**, um exercício prático de ReactJS focado em **estilização e responsividade**.
Neste projeto, você verá **quatro versões da mesma interface**, cada uma usando uma técnica de CSS diferente.

---

## 🎯 Objetivo

Construir uma tela de loja com:

* Navbar fixa com logo, toggle de tema (claro/escuro) e badge do carrinho.
* Grid de produtos responsivo (1–4 colunas, dependendo da largura da tela).
* Cards de produto com imagem 1:1, título truncado, preço, rating, tags e botões com variantes (`solid`, `outline`, `ghost`).
* Estados de hover, focus visível, loading com skeleton, e dark mode persistente.
* Acessibilidade com `aria-*` e contraste mínimo 4.5:1.
* Transições suaves (150–250ms).

---

## 🛠️ As 4 versões

| Pasta                  | Técnica de CSS    | Observações                                                     |
| ---------------------- | ----------------- | --------------------------------------------------------------- |
| `01-css-global`        | CSS Global        | Todos os estilos aplicados globalmente via `global.css`.        |
| `02-css-modules`       | CSS Modules       | Estilos isolados por componente, evitando conflitos globais.    |
| `03-tailwind`          | Tailwind CSS      | Utiliza classes utilitárias para construir a interface.         |
| `04-styled-components` | styled-components | CSS-in-JS com `ThemeProvider` e props dinâmicas para dark mode. |

> Cada pasta é independente: você pode rodar cada versão separadamente.

---

## 🚀 Como rodar qualquer versão

1. Abra o terminal na pasta desejada, por exemplo `02-css-modules`.
2. Instale dependências:

```bash
npm install
```

3. Rode o projeto:

```bash
npm run dev
```

4. Abra o link que aparece no terminal (geralmente `http://localhost:5173`).

---

## 📝 Estrutura geral

```
XX-versao/
├─ README.md
├─ index.html
├─ package.json
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ styles/ (ou módulos/ ou Tailwind config)
   ├─ data/products.js
   └─ components/
      ├─ Navbar
      ├─ ProductCard
      ├─ Button
      └─ Skeleton
```

---

## 💡 Observações

* Todos os breakpoints, dark mode e estados interativos foram implementados.
* Skeletons simulam carregamento sem quebrar o layout.
* Foco visível e contraste adequado foram aplicados para acessibilidade.
* Tokens de cores, espaçamentos, bordas e sombras garantem consistência.
