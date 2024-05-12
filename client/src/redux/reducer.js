import { combineReducers } from '@reduxjs/toolkit';
import bookReducer from './book/bookReducer';
import countSaga from './count/countReducer';

const rootReducer = combineReducers({
  book: bookReducer,
  count: countSaga
});

export default rootReducer;
