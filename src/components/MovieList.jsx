import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteMovie } from '../redux/MovieSlice';

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
      <h2 className="text-xl font-semibold mt-4 mb-2">Movie List</h2>
      <ul className="space-y-2">
        {sortedMovies.map(movie => (
          <li key={movie.id} className="border p-2 rounded">
            <strong>{movie.title}</strong> ({movie.releaseYear}) [{movie.format}
            ]<br />
            Stars: {movie.stars.join(', ')}
            <button
              onClick={() => handleDelete(movie.id)}
              className="ml-4 text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
