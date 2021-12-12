import { all } from 'redux-saga/effects';
import usersSagas from '../App/sagas/userSagas';
import userDeleteSagas from '../DetailUser/sagas/deleteUserSaga';
import userEditSagas from '../DetailUser/sagas/detailUserEditSaga';
import userDetailSagas from '../ListUsers/sagas/detailUserSaga';
import userLoginSagas from '../Login/sagas/loginUserSaga';

export default function* rootSaga() {
  yield all([
    usersSagas(),
    userDetailSagas(),
    userDeleteSagas(),
    userEditSagas(),
    userLoginSagas(),
  ]);
}
