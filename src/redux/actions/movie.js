import {getData, getMovieDetail} from '../../utils/request';
export const getAllMovies = (page) => {
  return {
    type: 'GET_ALL_MOVIES',
    payload: getData(page),
  };
};

export const getMovieDetails = (idMovie) => {
  return {
    type: 'GET_MOVIE_DETAILS',
    payload: getMovieDetail(idMovie),
  };
};
