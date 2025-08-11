# Projeto: Aplicação de Busca de Filmes com TMDB API

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
