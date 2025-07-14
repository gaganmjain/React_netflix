import React from 'react';

function HeroBanner(props) {
  const { movie } = props;

  if (!movie) {
    return null;
  }

  return (
    <div
      className="hero-banner text-white p-5 rounded mb-4"
      style={{
        backgroundImage: `url(${movie.backdrop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '300px'
      }}
    >
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
}

export default HeroBanner;
