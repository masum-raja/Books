import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_BOOK_LIST, fetchBookListSuccess, fetchBookListFailure, fetchBookListLoading, CREATE_BOOK_LIST, createBookListSuccess, createBookListFailure, createBookListLoading, UPDATE_BOOK_LIST, updateBookListSuccess, updateBookListFailure, updateBookListLoading } from '../book/bookActions';
import { fetchBookListApi, createBookListApi, updateBookListApi } from '../book/bookApi';

function* fetchBookListSaga() {
  try {
    const data = yield call(fetchBookListApi);
    yield put(fetchBookListSuccess(data));
    yield put(fetchBookListLoading(false));
  } catch (error) {
    yield put(fetchBookListFailure(error));
  }
}

function* createBookListSaga(action) {
  try {
    yield put(createBookListLoading(true));
    yield call(createBookListApi, action);
    yield put(createBookListSuccess());
    yield put(createBookListLoading(false));
  } catch (error) {
    yield put(createBookListFailure(error));
  }
}

function* updateBookListSaga(action) {
  try {
    yield put(updateBookListLoading(true));
    yield call(updateBookListApi, action);
    yield put(updateBookListSuccess());
    yield put(updateBookListLoading(false));
  } catch (error) {
    yield put(updateBookListFailure(error));
  }
}

function* bookSaga() {
  yield takeLatest(FETCH_BOOK_LIST, fetchBookListSaga);
  yield takeLatest(CREATE_BOOK_LIST, createBookListSaga);
  yield takeLatest(UPDATE_BOOK_LIST, updateBookListSaga);
}

export default bookSaga;
