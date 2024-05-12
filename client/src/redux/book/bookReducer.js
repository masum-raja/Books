import { FETCH_BOOK_LIST_SUCCESS, FETCH_BOOK_LIST_FAILURE, FETCH_BOOK_LIST_LOADING, CREATE_BOOK_LIST, CREATE_BOOK_LIST_FAILURE, CREATE_BOOK_LIST_LOADING, UPDATE_BOOK_LIST, UPDATE_BOOK_LIST_FAILURE, UPDATE_BOOK_LIST_LOADING } from '../book/bookActions';

const initialState = {
  bookList: [],
  isLoading: true,
  isAddBtnLoading: false,
  isUpdateBtnLoading: false,
  error: null,
  message: false
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOK_LIST_SUCCESS:
      return {
        ...state,
        bookList: action.payload,
        error: null,
      };
    case FETCH_BOOK_LIST_FAILURE:
      return {
        ...state,
        isLoading: true,
        error: action.payload,
      };
    case FETCH_BOOK_LIST_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case CREATE_BOOK_LIST:
      return {
        ...state,
        bookList: [...state.bookList, action.payload],
        message: true,
        error: null,
      };
    case CREATE_BOOK_LIST_FAILURE:
      return {
        ...state,
        isAddBtnLoading: false,
        error: action.payload,
      };
    case CREATE_BOOK_LIST_LOADING:
      return {
        ...state,
        isAddBtnLoading: action.payload,
      };
      case UPDATE_BOOK_LIST:
      console.log(action.payload, "....");
     return {
       ...state,
       bookList: state.bookList?.map((item) => (
         console.log(item, ".............."),
         item.uuid === action.payload.uuid ? {...item, ...action.payload.data} : item
       )),
       error: null,
     };
   case UPDATE_BOOK_LIST_FAILURE:
     return {
       ...state,
       isUpdateBtnLoading: false,
       error: action.payload,
     };
   case UPDATE_BOOK_LIST_LOADING:
     return {
       ...state,
       isUpdateBtnLoading: action.payload,
     };
    default:
      return state;
  }
};

export default bookReducer;
