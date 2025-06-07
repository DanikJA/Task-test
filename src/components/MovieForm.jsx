import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../redux/MovieSlice';

const MovieForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [format, setFormat] = useState('DVD');
  const [stars, setStars] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      addMovie({
        title,
        releaseYear: Number(releaseYear),
        format,
        stars: stars.split(',').map(s => s.trim()),
      })
    );
    setTitle('');
    setReleaseYear('');
    setStars('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        className="border p-1"
      />
      <input
        value={releaseYear}
        onChange={e => setReleaseYear(e.target.value)}
        placeholder="Year"
        className="border p-1"
      />
      <select
        value={format}
        onChange={e => setFormat(e.target.value)}
        className="border p-1"
      >
        <option>DVD</option>
        <option>VHS</option>
        <option>Blu-Ray</option>
      </select>
      <input
        value={stars}
        onChange={e => setStars(e.target.value)}
        placeholder="Stars (comma-separated)"
        className="border p-1"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-2 py-1 rounded"
      >
        Add Movie
      </button>
    </form>
  );
};

export default MovieForm;
