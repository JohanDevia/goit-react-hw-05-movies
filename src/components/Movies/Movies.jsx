import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Movies = () => {
  // Estado local para almacenar la palabra clave de búsqueda y los resultados de películas
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  // Función para manejar cambios en el campo de búsqueda
  const handleSearchChange = e => {
    setQuery(e.target.value);
  };

  // Función para realizar la búsqueda de películas
  const searchMovies = async () => {
    try {
      const apiKey = 'f363c7f847ff3862e66e9336f55534d2';
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  // Manejar la búsqueda cuando se envía el formulario
  const handleSubmit = e => {
    e.preventDefault();
    searchMovies();
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>

      {/* Mostrar resultados de películas */}
      <div>
        {movies.map(movie => (
          <div key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
