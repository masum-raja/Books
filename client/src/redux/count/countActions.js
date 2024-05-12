export const FETCH_COUNT = 'FETCH_COUNT';
export const FETCH_COUNT_SUCCESS = 'FETCH_COUNT_SUCCESS';
export const FETCH_COUNT_FAILURE = 'FETCH_COUNT_FAILURE';
export const FETCH_COUNT_LOADING = 'FETCH_COUNT_LOADING';

export const fetchCount = () => ({
  type: FETCH_COUNT,
});

export const fetchCountSuccess = (data) => ({
  type: FETCH_COUNT_SUCCESS,
  payload: data,
});

export const fetchCountFailure = (error) => ({
  type: FETCH_COUNT_FAILURE,
  payload: error,
});

export const fetchCountLoading = (isCountLoading) => ({
  type: FETCH_COUNT_LOADING,
  payload: isCountLoading
});
