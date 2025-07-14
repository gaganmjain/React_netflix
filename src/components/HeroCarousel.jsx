import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroCarousel.css';

const HeroCarousel = ({ movies }) => {
  return (
    <div id="heroCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
      <div className="carousel-inner rounded shadow">
        {movies.slice(0, 3).map((movie, index) => (
          <div
            key={movie.id}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <div className="carousel-overlay">
              <img
                src={movie.poster}
                className="d-block w-100 carousel-img"
                alt={movie.title}
              />
              <div className="carousel-caption d-none d-md-block">
                <h2>{movie.title}</h2>
                <p>⭐ {movie.rating} | {movie.genres.join(', ')}</p>
                <button className="btn btn-danger me-2">Watch Now</button>
                <button className="btn btn-outline-light">Add to Favorites</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HeroCarousel;