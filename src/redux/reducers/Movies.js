const initialState = {
  isLoading: false,
  movies: {
    page: 0,
    total_results: 0,
    total_pages: 0,
    results: [],
  },
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_MOVIES_PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_ALL_MOVIES_REJECTED':
      return {
        ...state,
        isLoading: false,
      };
    case 'GET_ALL_MOVIES_FULFILLED':
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
      };

    default:
      return state;
  }
};

export default movies;
