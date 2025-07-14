import React, { useEffect, useState } from 'react';
import SearchFilter from '../components/SearchFilter';
import MovieGrid from '../components/MovieGrid';
import Spinner from '../components/Spinner';
import CustomHeroCarousel from '../components/CustomHeroCarousel';

function Home() {
  const [all, setAll] = useState([]);
  const [display, setDisplay] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favList, setFavList] = useState(JSON.parse(localStorage.getItem('favs') || '[]'));

  useEffect(function () {
    fetch('/movies.json')
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setAll(data);
        setDisplay(data);
        setLoading(false);
      });
  }, []);

  function onSearch(term) {
    const filtered = all.filter(function (m) {
      return m.title.toLowerCase().includes(term.toLowerCase());
    });
    setDisplay(filtered);
  }

  function onFilter(genre) {
    const filtered = genre ? all.filter(function (m) {
      return m.genres.includes(genre);
    }) : all;
    setDisplay(filtered);
  }

  function toggleFav(movie) {
    const updated = favList.some(function (f) {
      return f.id === movie.id;
    })
      ? favList.filter(function (f) {
          return f.id !== movie.id;
        })
      : [movie].concat(favList);
    setFavList(updated);
    localStorage.setItem('favs', JSON.stringify(updated));
  }

  if (loading) return <Spinner />;

  return (
    <div className="container">
      <h2 className="text-start mt-3 mb-2 text-danger">Handpicked for You</h2>
      <CustomHeroCarousel movies={all.slice(0, 5)} />
      <SearchFilter
        onSearch={onSearch}
        onFilter={onFilter}
        genres={[...new Set(all.flatMap(function (m) {
          return m.genres;
        }))]}
      />
      <h3 className="text-start mt-4 mb-3 text-primary">🎞️ Explore Movies</h3>
      <MovieGrid movies={display} favList={favList} onFavToggle={toggleFav} />
    </div>
  );
}

export default Home;
