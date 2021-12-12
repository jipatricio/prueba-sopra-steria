import { put, takeLatest } from 'redux-saga/effects';
import {
  FAILED_EDIT_USER,
  REQUEST_EDIT_USER,
  SUCCESS_EDIT_USER,
} from '../actions';

function* getUserEdit(payload) {
  try {
    const element = document.querySelector(
      '#put-request-async-await .date-updated'
    );
    const userEdit = yield fetch(
      `https://reqres.in/api/users/${payload.newDetailUser.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload.newDetailUser.newDetails),
      }
    ).then((res) => console.log('res', res, res.json()));
    console.log(element);
    const responseLogin = yield userEdit.json();
    console.log('RESPONSE', responseLogin);
    yield put({ type: SUCCESS_EDIT_USER, userEdit });
  } catch (err) {
    yield put({ type: FAILED_EDIT_USER });
  }
}

export default function* userEditSagas() {
  yield takeLatest(REQUEST_EDIT_USER, getUserEdit);
}
