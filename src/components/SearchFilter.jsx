import React, { useState } from 'react';

function SearchFilter({ onSearch, onFilter, genres }) {
  const [term, setTerm] = useState('');
  const [genre, setGenre] = useState('');

  return (
    <form className="d-flex flex-column flex-md-row gap-2 mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="🔍 Search for movies..."
        value={term}
        onChange={(e) => {
          setTerm(e.target.value);
          onSearch(e.target.value);
        }}
      />
      <select
        className="form-select"
        value={genre}
        onChange={(e) => {
          setGenre(e.target.value);
          onFilter(e.target.value);
        }}
      >
        <option value="">🎞️ All Genres</option>
        {genres.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>
    </form>
  );
}

export default SearchFilter;
