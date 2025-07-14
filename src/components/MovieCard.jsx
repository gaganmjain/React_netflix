import React from 'react';
import './MovieCard.css';
import { useNavigate } from 'react-router-dom';

function MovieCard({ movie, isFav, onFavToggle }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/movie/${movie.id}`);
  }

  return (
    <div className="movie-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={movie.poster} alt={movie.title} className="movie-poster" />
      <div className="movie-info">
        <h5 className="mb-1">{movie.title}</h5>
        <p className="mb-1">{movie.genres.join(', ')}</p>
        <span className="badge bg-danger">⭐ {movie.rating}</span>
        <button
          className={`fav-btn ${isFav ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation(); // Prevent navigation on button click
            onFavToggle(movie);
          }}
        >
          {isFav ? '❤️ Remove' : '🤍 Favorite'}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
