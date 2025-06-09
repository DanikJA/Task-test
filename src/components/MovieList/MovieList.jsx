import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteMovie } from '../../redux/MovieSlice';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies);
  console.log('movies in component:', movies);

  const handleDelete = id => {
    dispatch(deleteMovie(id));
  };

  const sortedMovies = Array.isArray(movies)
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : [];

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {sortedMovies.map(movie => (
          <li key={movie.id}>
            <strong>{movie.title}</strong> ({movie.releaseYear}) [{movie.format}
            ]
            <br />
            Stars:{' '}
            {Array.isArray(movie.stars)
              ? movie.stars.join(', ')
              : 'No stars info'}
            <button onClick={() => handleDelete(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
