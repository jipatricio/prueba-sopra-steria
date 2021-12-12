import { put, takeLatest } from 'redux-saga/effects';
import {
  SUCCESS_DELETE_USER,
  REQUEST_DELETE_USER,
  FAILED_DELETE_USER,
} from '../actions';

function* getUserDelete(payload) {
  try {
    const userDelete = yield fetch(
      `https://reqres.in/api/users/${payload.id}`,
      {
        method: 'DELETE',
      }
    );
    yield put({ type: SUCCESS_DELETE_USER, userDelete });
  } catch (err) {
    yield put({ type: FAILED_DELETE_USER });
  }
}

export default function* userDeleteSagas() {
  yield takeLatest(REQUEST_DELETE_USER, getUserDelete);
}
