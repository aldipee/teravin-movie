import {combineReducers} from 'redux';

import MoviesReducer from './Movies';
import MovieDetails from './MovieDetail';

export default combineReducers({
  listMovies: MoviesReducer,
  movieDetails: MovieDetails,
});
