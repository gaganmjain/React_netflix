import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(function () {
    fetch(import.meta.env.BASE_URL + 'movies.json')

      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        const found = data.find(function (m) {
          return m.id.toString() === id;
        });
        setMovie(found);
      });
  }, [id]);

  if (!movie) return <p className="text-center my-5">Loading movie details...</p>;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-5">
          <img src={movie.poster} alt={movie.title} className="img-fluid rounded" />
        </div>
        <div className="col-md-7">
          <h2>{movie.title}</h2>
          <p><strong>Genres:</strong> {movie.genres.join(', ')}</p>
          <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
          <p><strong>Release Date:</strong> {movie.releaseDate || 'N/A'}</p>
          <p><strong>Description:</strong> {movie.description || 'No description available.'}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
