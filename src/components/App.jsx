import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/MovieSlice';
import MovieList from './MovieList/MovieList';
import MovieForm from './MovieForm/MovieForm';
import MovieImport from './MovieImport/MovieImport';
import { Container, Title } from './App.styled';
import MovieSearch from './Search/MovieSearch.jsx';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <Container>
      <Title>Movies App</Title>
      <MovieForm />
      <MovieImport />
      <MovieList />
      <MovieSearch />
    </Container>
  );
}

export default App;
