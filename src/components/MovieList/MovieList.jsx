import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteMovie } from '../../redux/MovieSlice';

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, searchTitle, searchActor } = useSelector(
    state => state.movies
  );

  const handleDelete = id => {
    dispatch(deleteMovie(id));
  };

  const filteredMovies = Array.isArray(movies)
    ? movies.filter(movie => {
        const titleMatch = movie.title
          .toLowerCase()
          .includes(searchTitle.toLowerCase());
        const actorMatch = movie.stars?.some(star =>
          star.toLowerCase().includes(searchActor.toLowerCase())
        );
        return titleMatch && actorMatch;
      })
    : [];

  const sortedMovies = [...filteredMovies].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

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
            <br />
            <button onClick={() => handleDelete(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
