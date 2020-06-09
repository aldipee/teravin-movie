const initialState = {
  isLoading: false,
  movieDetail: {},
};

const MovieDetail = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIE_DETAILS_PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_MOVIE_DETAILS_REJECTED':
      return {
        ...state,
        isLoading: false,
      };
    case 'GET_MOVIE_DETAILS_FULFILLED':
      return {
        ...state,
        isLoading: false,
        movieDetail: action.payload,
      };

    default:
      return state;
  }
};
export default MovieDetail;
