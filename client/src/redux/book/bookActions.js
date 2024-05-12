export const FETCH_BOOK_LIST = 'FETCH_BOOK_LIST';
export const FETCH_BOOK_LIST_SUCCESS = 'FETCH_BOOK_LIST_SUCCESS';
export const FETCH_BOOK_LIST_FAILURE = 'FETCH_BOOK_LIST_FAILURE';
export const FETCH_BOOK_LIST_LOADING = 'FETCH_BOOK_LIST_LOADING';

export const CREATE_BOOK_LIST = 'CREATE_BOOK_LIST';
export const CREATE_BOOK_LIST_SUCCESS = 'CREATE_BOOK_LIST_SUCCESS';
export const CREATE_BOOK_LIST_FAILURE = 'CREATE_BOOK_LIST_FAILURE';
export const CREATE_BOOK_LIST_LOADING = 'CREATE_BOOK_LIST_LOADING';

export const UPDATE_BOOK_LIST = 'UPDATE_BOOK_LIST';
export const UPDATE_BOOK_LIST_SUCCESS = 'UPDATE_BOOK_LIST_SUCCESS';
export const UPDATE_BOOK_LIST_FAILURE = 'UPDATE_BOOK_LIST_FAILURE';
export const UPDATE_BOOK_LIST_LOADING = 'UPDATE_BOOK_LIST_LOADING';

export const fetchBookList = () => ({
  type: FETCH_BOOK_LIST,
});

export const fetchBookListSuccess = (data) => ({
  type: FETCH_BOOK_LIST_SUCCESS,
  payload: data,
});

export const fetchBookListFailure = (error) => ({
  type: FETCH_BOOK_LIST_FAILURE,
  payload: error,
});

export const fetchBookListLoading = (isLoading) => ({
  type: FETCH_BOOK_LIST_LOADING,
  payload: isLoading
});

export const createBookList = (payload) => ({
  type: CREATE_BOOK_LIST,
  payload,
});

export const createBookListSuccess = () => ({
  type: CREATE_BOOK_LIST_SUCCESS,
});

export const createBookListFailure = (error) => ({
  type: CREATE_BOOK_LIST_FAILURE,
  payload: error,
});

export const createBookListLoading = (isLoading) => ({
  type: CREATE_BOOK_LIST_LOADING,
  payload: isLoading
});

export const updateBookList = (payload) => ({
  type: UPDATE_BOOK_LIST,
  payload,
});

export const updateBookListSuccess = () => ({
  type: UPDATE_BOOK_LIST_SUCCESS,
});

export const updateBookListFailure = (error) => ({
  type: UPDATE_BOOK_LIST_FAILURE,
  payload: error,
});

export const updateBookListLoading = (isLoading) => ({
  type: UPDATE_BOOK_LIST_LOADING,
  payload: isLoading
});
