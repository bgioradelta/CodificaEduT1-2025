# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Projeto: Aplicação de Busca de Filmes com TMDB API

Este projeto é uma aplicação React que consome a API do TMDB para permitir que usuários busquem filmes, visualizem detalhes e mantenham uma lista de favoritos.

### Funcionalidades Implementadas
- **Página de Busca:** Campo de texto para pesquisar filmes e exibir resultados com pôster, título e ano.
- **Paginação:** Navegação entre páginas de resultados.
- **Página de Detalhes:** Informações completas sobre o filme (diretor, elenco, sinopse, avaliação).
- **Lista de Favoritos:** Adição e remoção de filmes com persistência via `localStorage`.
- **Tratamento de Erros & Loading:** Indicador de carregamento e mensagens de erro.

### Configuração da Chave da API
A chave da API do TMDB é armazenada no arquivo `.env` na raiz do projeto:

```env
VITE_TMDB_API_KEY=SUA_CHAVE_AQUI

