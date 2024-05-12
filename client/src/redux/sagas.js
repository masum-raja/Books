import { all } from 'redux-saga/effects';
import bookSaga from './book/bookSaga';
import countSaga from './count/countSaga';

function* rootSaga() {
  yield all([
    bookSaga(),
    countSaga()
  ]);
}

export default rootSaga;
