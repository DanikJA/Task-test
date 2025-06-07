import React from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../redux/MovieSlice';

import { parseMoviesFile } from '../components/parseMovie.jsx';

const MovieImport = () => {
  const dispatch = useDispatch();

  const handleFileChange = async e => {
    const file = e.target.files?.[0];
    if (!file) return;
    const text = await file.text();
    const movies = parseMoviesFile(text);
    movies.forEach(movie => dispatch(addMovie(movie)));
  };

  return (
    <div className="my-4">
      <input type="file" accept=".txt" onChange={handleFileChange} />
    </div>
  );
};

export default MovieImport;
