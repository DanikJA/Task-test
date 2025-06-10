import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTitle, setSearchActor } from '../../redux/MovieSlice';
import { SearchContainer, SearchInput } from './SearchStyled';

const MovieSearch = () => {
  const dispatch = useDispatch();
  const { searchTitle, searchActor } = useSelector(state => state.movies);

  const handleTitleChange = e => {
    dispatch(setSearchTitle(e.target.value));
  };

  const handleActorChange = e => {
    dispatch(setSearchActor(e.target.value));
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={searchTitle}
        onChange={handleTitleChange}
        placeholder="Search by title"
      />
      <SearchInput
        type="text"
        value={searchActor}
        onChange={handleActorChange}
        placeholder="Search by actor"
      />
    </SearchContainer>
  );
};

export default MovieSearch;
