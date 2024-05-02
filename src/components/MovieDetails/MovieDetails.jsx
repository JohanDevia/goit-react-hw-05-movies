import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const MovieDetails = () => {
  const { movieId } = useParams(); // Obtener el parámetro de ruta movieId

  // Estado local para almacenar los detalles de la película
  const [movieDetails, setMovieDetails] = useState(null);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  // Función para obtener los detalles de la película
  const fetchMovieDetails = async () => {
    try {
      const apiKey = 'f363c7f847ff3862e66e9336f55534d2';
      const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

      const response = await axios.get(movieDetailsUrl);
      setMovieDetails(response.data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [movieId]); // Se ejecuta una vez al montar el componente

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <p>{movieDetails.overview}</p>

      <h2>
        <Link to="#" onClick={() => setShowCast(!showCast)}>
          Cast
        </Link>
      </h2>
      {showCast && <Cast movieId={movieId} />}

      <h2>
        <Link to="#" onClick={() => setShowReviews(!showReviews)}>
          Reviews
        </Link>
      </h2>
      {showReviews && <Reviews movieId={movieId} />}
    </div>
  );
};

export default MovieDetails;
