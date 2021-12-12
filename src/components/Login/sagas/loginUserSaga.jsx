import { put, takeLatest } from 'redux-saga/effects';
import { FAILED_LOGIN, REQUEST_LOGIN, SUCCESS_LOGIN } from '../actions';

function* getUserLogin(payload) {
  try {
    const userLogin = yield fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload.infoUser),
    });
    const responseLogin = yield userLogin.json();
    yield put({ type: SUCCESS_LOGIN, userLogin, responseLogin });
  } catch (err) {
    yield put({ type: FAILED_LOGIN });
  }
}

export default function* userLoginSagas() {
  yield takeLatest(REQUEST_LOGIN, getUserLogin);
}
