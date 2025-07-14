import React, { useState, useEffect } from 'react';
import MovieGrid from '../components/MovieGrid';

const Favorites = () => {
  const [favList, setFavList] = useState([]);

  useEffect(() => {
    setFavList(JSON.parse(localStorage.getItem('favs') || '[]'));
  }, []);

  const remove = movie => {
    const updated = favList.filter(f => f.id !== movie.id);
    setFavList(updated);
    localStorage.setItem('favs', JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h2 className="text-start mt-4 mb-3 text-success">❤️ Your Favorite Movies</h2>
      {favList.length ? (
        <MovieGrid movies={favList} favList={favList} onFavToggle={remove} />
      ) : (
        <p className="text-muted">You haven’t added any favorites yet.</p>
      )}
    </div>
  );
};

export default Favorites;
