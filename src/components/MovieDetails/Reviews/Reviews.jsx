import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Reviews = ({ movieId: propMovieId }) => {
  const { movieId: routeMovieId } = useParams(); // Obtener el parámetro de ruta movieId
  const movieId = propMovieId || routeMovieId;

  // Estado local para almacenar las críticas de la película
  const [reviews, setReviews] = useState([]);

  // Función para obtener las críticas de la película
  const fetchReviews = async () => {
    try {
      const apiKey = 'f363c7f847ff3862e66e9336f55534d2';
      const reviewsUrl = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`;

      const response = await axios.get(reviewsUrl);
      setReviews(response.data.results);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [movieId]); // Se ejecuta una vez al montar el componente

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <p>{review.content}</p>
          <p>By: {review.author}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
