import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import AppBar from '../components/AppBar/AppBar';

const Home = lazy(() => import('../components/Home/Home'));
const Movies = lazy(() => import('../components/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('../components/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('../components/MovieDetails/Cast/Cast'));
const Reviews = lazy(() =>
  import('../components/MovieDetails/Reviews/Reviews')
);

function App() {
  return (
    <Router>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
