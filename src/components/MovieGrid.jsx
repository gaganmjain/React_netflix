import React from 'react';
import MovieCard from './MovieCard';

function MovieGrid(props) {
  const { movies, favList, onFavToggle } = props;

  return (
    <div className="row g-3">
      {movies.map(function (movie) {
        return (
          <div key={movie.id} className="col-6 col-md-4 col-lg-3">
            <MovieCard
              movie={movie}
              isFav={favList.some(function (f) {
                return f.id === movie.id;
              })}
              onFavToggle={onFavToggle}
            />
          </div>
        );
      })}
    </div>
  );
}

export default MovieGrid;
