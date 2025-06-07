import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../redux/MovieSlice';
import { Form, Input, Select, Button } from './MovieFormStyled';

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
    <Form onSubmit={handleSubmit} className="space-y-2">
      <Input
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
      <Select
        value={format}
        onChange={e => setFormat(e.target.value)}
        className="border p-1"
      >
        <option>VHS</option>
        <option>DVD</option>
        <option>Blu-ray</option>
      </Select>
      <input
        value={stars}
        onChange={e => setStars(e.target.value)}
        placeholder="Stars (comma-separated)"
        className="border p-1"
      />
      <Button
        type="submit"
        className="bg-blue-500 text-white px-2 py-1 rounded"
      >
        Add Movie
      </Button>
    </Form>
  );
};

export default MovieForm;
