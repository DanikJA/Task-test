import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL;
// const token = import.meta.env.VITE_API_TOKEN;

const API_URL = 'http://localhost:8000/api/v1';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI0OTcyMjYwfQ.X31cryg_A126WLYT96PD-SLLFWSxb2SeoQZ4cvx3VhU';

const axiosInst = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const res = await axiosInst.get(`/movies`);
  console.log('API response:', res.data);
  return res.data;
});

export const addMovie = createAsyncThunk('movies/addMovie', async movie => {
  const res = await axiosInst.post(`/movies`, movie);
  return res.data;
});

export const deleteMovie = createAsyncThunk('movies/deleteMovie', async id => {
  await axiosInst.delete(`/movies/${id}`);
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
        console.log('fetchMovies payload:', action.payload);
        state.movies = action.payload.movies;
        state.status = 'succeeded';
      })
      .addCase(addMovie.fulfilled, (state, action) => {
        console.log('addMovie payload:', action.payload);
        state.movies.push(action.payload);
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.movies = state.movies.filter(m => m.id !== action.payload);
      });
  },
});

export const { setSearchTitle, setSearchActor } = movieSlice.actions;
export default movieSlice.reducer;
