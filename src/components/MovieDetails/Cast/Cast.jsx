import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Cast = ({ movieId: propMovieId }) => {
  const { movieId: routeMovieId } = useParams(); // Obtener el parámetro de ruta movieId
  const movieId = propMovieId || routeMovieId;

  // Estado local para almacenar el reparto de la película
  const [cast, setCast] = useState([]);

  // Función para obtener el reparto de la película
  const fetchCast = async () => {
    try {
      const apiKey = 'f363c7f847ff3862e66e9336f55534d2';
      const castUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;

      const response = await axios.get(castUrl);
      setCast(response.data.cast);
    } catch (error) {
      console.error('Error fetching cast:', error);
    }
  };

  useEffect(() => {
    fetchCast();
  }, [movieId]); // Se ejecuta una vez al montar el componente

  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          {actor.name} as {actor.character}
        </li>
      ))}
    </ul>
  );
};

export default Cast;
