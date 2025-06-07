import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/MovieSlice';
import MovieList from './MovieList';
import MovieForm from './MovieForm';
import MovieImport from './MovieImport';
import { Container, Title } from './App.styled';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <Container className="p-4">
      <Title className="text-2xl font-bold mb-4">Movies App</Title>
      <MovieForm />
      <MovieImport />
      <MovieList />
    </Container>
  );
}

export default App;
