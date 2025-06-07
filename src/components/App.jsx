import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/MovieSlice';
import MovieList from './MovieList';
import MovieForm from './MovieForm';
import MovieImport from './MovieImport';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Movies App</h1>
      <MovieForm />
      <MovieImport />
      <MovieList />
    </div>
  );
}

export default App;
