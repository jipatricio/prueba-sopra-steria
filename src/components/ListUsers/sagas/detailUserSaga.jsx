import { put, call, takeLatest } from 'redux-saga/effects';
import { apiCall } from '../../../services/api/apiCall';
import {
  SUCCESS_DETAIL_USER,
  REQUEST_DETAIL_USER,
  FAILED_DETAIL_USER,
} from '../actions';

function* getUserDetail(payload) {
  try {
    const userDetail = yield call(
      apiCall,
      'get',
      `https://reqres.in/api/users/${payload.id}`
    );
    yield put({ type: SUCCESS_DETAIL_USER, userDetail });
  } catch (err) {
    yield put({ type: FAILED_DETAIL_USER });
  }
}

export default function* userDetailSagas() {
  yield takeLatest(REQUEST_DETAIL_USER, getUserDetail);
}
