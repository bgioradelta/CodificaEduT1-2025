import React, { useEffect, useState } from 'react';

const API_KEY = '0944cfd2d8639f97a73aae855da19aa6';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE = 'https://image.tmdb.org/t/p/w300';

function useLocalStorage(key, initial) {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);
  const [favorites, setFavorites] = useLocalStorage('tmdb_favs_v1', []);

  useEffect(() => {
    if (!query) {
      setResults([]);
      setTotalPages(1);
      setError(null);
      return;
    }

    const controller = new AbortController();
    async function fetchSearch() {
      setLoading(true);
      setError(null);
      try {
        const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`;
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setResults(data.results || []);
        setTotalPages(data.total_pages || 1);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message || 'Erro ao buscar');
      } finally {
        setLoading(false);
      }
    }

    fetchSearch();
    return () => controller.abort();
  }, [query, page]);

  async function fetchMovieDetails(movieId) {
    setLoading(true);
    setError(null);
    try {
      const [detailsRes, creditsRes] = await Promise.all([
        fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`),
        fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=pt-BR`),
      ]);

      if (!detailsRes.ok) throw new Error(`Detalhes: HTTP ${detailsRes.status}`);
      if (!creditsRes.ok) throw new Error(`Créditos: HTTP ${creditsRes.status}`);

      const details = await detailsRes.json();
      const credits = await creditsRes.json();

      const directorObj = (credits.crew || []).find((c) => c.job === 'Director');
      const director = directorObj ? directorObj.name : '—';
      const cast = (credits.cast || []).slice(0, 5).map((c) => c.name);

      setSelected({ ...details, director, cast });
    } catch (err) {
      setError(err.message || 'Erro ao carregar detalhes');
    } finally {
      setLoading(false);
    }
  }

  function toggleFavorite(movie) {
    const exists = favorites.find((f) => f.id === movie.id);
    if (exists) {
      setFavorites(favorites.filter((f) => f.id !== movie.id));
    } else {
      setFavorites([...favorites, {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
      }]);
    }
  }

  function isFavorite(id) {
    return favorites.some((f) => f.id === id);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;
    setPage(1);
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f5f5f5', minHeight: '100vh', padding: '20px' }}>
      <h1>Catálogo de Filmes</h1>
      <form onSubmit={handleSearchSubmit} style={{ marginBottom: '10px' }}>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Procure por título" style={{ padding: '8px', width: '60%' }} />
        <button type="submit" style={{ padding: '8px', marginLeft: '5px' }}>Buscar</button>
      </form>
      {loading && <div>Carregando…</div>}
      {error && <div style={{ color: 'red' }}>Erro: {error}</div>}
      <div>
        {results.map((movie) => (
          <div key={movie.id} style={{ background: '#fff', marginBottom: '10px', padding: '10px', display: 'flex' }}>
            <img src={movie.poster_path ? `${IMAGE_BASE}${movie.poster_path}` : 'https://via.placeholder.com/100x150'} alt={movie.title} style={{ width: '100px', marginRight: '10px' }} />
            <div>
              <h3>{movie.title} ({movie.release_date ? movie.release_date.slice(0, 4) : '—'})</h3>
              <p>{movie.overview || 'Sem sinopse.'}</p>
              <button onClick={() => fetchMovieDetails(movie.id)}>Detalhes</button>
              <button onClick={() => toggleFavorite(movie)}>{isFavorite(movie.id) ? 'Remover favorito' : 'Favoritar'}</button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page <= 1}>Anterior</button>
        <span> Página {page} de {totalPages} </span>
        <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page >= totalPages}>Próxima</button>
      </div>
      <h2>Favoritos</h2>
      {favorites.map((f) => (
        <div key={f.id}>
          <span>{f.title} ({f.release_date ? f.release_date.slice(0, 4) : '—'})</span>
          <button onClick={() => fetchMovieDetails(f.id)}>Ver</button>
          <button onClick={() => toggleFavorite(f)}>Remover</button>
        </div>
      ))}
      {selected && (
        <div style={{ background: '#fff', padding: '10px', marginTop: '20px' }}>
          <h3>{selected.title} ({selected.release_date ? selected.release_date.slice(0, 4) : '—'})</h3>
          <p><strong>Diretor:</strong> {selected.director}</p>
          <p><strong>Elenco:</strong> {selected.cast.join(', ')}</p>
          <p>{selected.overview}</p>
          <p>Avaliação: {selected.vote_average} / 10 ({selected.vote_count} votos)</p>
          <button onClick={() => setSelected(null)}>Fechar</button>
        </div>
      )}
    </div>
  );
}
