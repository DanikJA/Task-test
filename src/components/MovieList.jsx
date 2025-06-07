import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteMovie } from '../redux/MovieSlice';
import { ListTitle, MovieItem, DeleteButton } from './MovieList.styled';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);

  const handleDelete = id => {
    dispatch(deleteMovie(id));
  };

  const sortedMovies = [...movies].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div>
      <ListTitle>Movie List</ListTitle>
      <ul>
        {sortedMovies.map(movie => (
          <MovieItem key={movie.id}>
            <strong>{movie.title}</strong> ({movie.releaseYear}) [{movie.format}
            ]
            <br />
            Stars: {movie.stars.join(', ')}
            <DeleteButton onClick={() => handleDelete(movie.id)}>
              Delete
            </DeleteButton>
          </MovieItem>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
