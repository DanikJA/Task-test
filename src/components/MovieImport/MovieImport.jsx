import React from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../../redux/MovieSlice';
import { ImportContainer, FileInput } from './MovieImport.styled';

import { parseMoviesFile } from '../../utils/parseMovie.jsx';

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
    <ImportContainer>
      <FileInput type="file" accept=".txt" onChange={handleFileChange} />
    </ImportContainer>
  );
};

export default MovieImport;
