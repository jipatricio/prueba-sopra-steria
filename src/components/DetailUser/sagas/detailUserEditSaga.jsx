import { put, takeLatest } from 'redux-saga/effects';
import {
  FAILED_EDIT_USER,
  REQUEST_EDIT_USER,
  SUCCESS_EDIT_USER,
} from '../actions';

function* getUserEdit(payload) {
  try {
    const userEdit = yield fetch(
      `https://reqres.in/api/users/${payload.newDetailUser.id}`,
      { method: 'PUT', body: JSON.stringify(payload.newDetailUser.newDetails) }
    );
    yield put({ type: SUCCESS_EDIT_USER, userEdit });
  } catch (err) {
    yield put({ type: FAILED_EDIT_USER });
  }
}

export default function* userEditSagas() {
  yield takeLatest(REQUEST_EDIT_USER, getUserEdit);
}
