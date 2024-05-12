import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_COUNT, fetchCountSuccess, fetchCountFailure, fetchCountLoading } from '../count/countActions';
import { fetchCount } from '../count/countApi';

function* fetchCountSaga() {
  try {
    const data = yield call(fetchCount);
    yield put(fetchCountSuccess(data));
    yield put(fetchCountLoading(false));
  } catch (error) {
    yield put(fetchCountFailure(error));
  }
}

function* countSaga() {
  yield takeLatest(FETCH_COUNT, fetchCountSaga);
}

export default countSaga;
