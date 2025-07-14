import React, { useEffect, useState } from 'react';
import './CustomHeroCarousel.css';

function CustomHeroCarousel(props) {
  const { movies } = props;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % movies.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [movies.length]);

  if (!movies.length) {
    return null;
  }

  const movie = movies[index];

  return (
    <div className="hero-carousel mb-4">
      <img src={movie.poster} alt={movie.title} className="carousel-image" />
      <div className="carousel-overlay">
        <div className="carousel-content">
          <h1>{movie.title}</h1>
          <p>⭐ {movie.rating} | {movie.genres.join(', ')}</p>
          <div className="carousel-buttons">
            <button className="btn btn-danger">Watch Now</button>
          </div>
        </div>
      </div>
      <div className="carousel-indicators">
        {movies.map((_, i) => (
          <span
            key={i}
            className={i === index ? 'active' : ''}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default CustomHeroCarousel;
