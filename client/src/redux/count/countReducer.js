import { FETCH_COUNT_SUCCESS, FETCH_COUNT_FAILURE, FETCH_COUNT_LOADING } from '../count/countActions';

const initialState = {
  count: '',
  isCountLoading: true,
  countError: null,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNT_SUCCESS:
      return {
        ...state,
        count: action.payload,
        error: null,
      };
    case FETCH_COUNT_FAILURE:
      return {
        ...state,
        isLoading: true,
        countError: action.payload,
      };
    case FETCH_COUNT_LOADING:
      return {
        ...state,
        isCountLoading: action.payload,
      };
    default:
      return state;
  }
};

export default countReducer;
