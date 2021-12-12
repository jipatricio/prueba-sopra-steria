import { put, call, takeLatest } from 'redux-saga/effects';
import { apiCall } from '../../../services/api/apiCall';
import { SUCCESS_USERS, REQUEST_ALL_USERS, FAILED_USERS } from '../actions';

function* getUsers(payload) {
  try {
    const results = yield call(
      apiCall,
      'get',
      `https://reqres.in/api/users?page=${payload.page}`
    );

    yield put({ type: SUCCESS_USERS, results });
  } catch (err) {
    yield put({ type: FAILED_USERS });
  }
}

export default function* usersSagas() {
  yield takeLatest(REQUEST_ALL_USERS, getUsers);
}
