import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const res = await axios.get(`${API_URL}/movies`);
  return res.data;
});

export const addMovie = createAsyncThunk('movies/addMovie', async movie => {
  const res = await axios.post(`${API_URL}/movies`, movie);
  return res.data;
});

export const deleteMovie = createAsyncThunk('movies/deleteMovie', async id => {
  await axios.delete(`${API_URL}/movies/${id}`);
  return id;
});

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    status: 'idle',
    searchTitle: '',
    searchActor: '',
  },
  reducers: {
    setSearchTitle(state, action) {
      state.searchTitle = action.payload;
    },
    setSearchActor(state, action) {
      state.searchActor = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.status = 'succeeded';
      })
      .addCase(addMovie.fulfilled, (state, action) => {
        state.movies.push(action.payload);
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.movies = state.movies.filter(m => m.id !== action.payload);
      });
  },
});

export const { setSearchTitle, setSearchActor } = movieSlice.actions;
export default movieSlice.reducer;
