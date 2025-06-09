import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../../redux/MovieSlice';
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
    <Form onSubmit={handleSubmit}>
      <Input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        value={releaseYear}
        onChange={e => setReleaseYear(e.target.value)}
        placeholder="Year"
      />
      <Select value={format} onChange={e => setFormat(e.target.value)}>
        <option>VHS</option>
        <option>DVD</option>
        <option>Blu-ray</option>
      </Select>
      <input
        value={stars}
        onChange={e => setStars(e.target.value)}
        placeholder="Stars"
      />
      <Button type="submit">Add Movie</Button>
    </Form>
  );
};

export default MovieForm;
