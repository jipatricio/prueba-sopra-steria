import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxSaga from 'redux-saga';
import rootSaga from '../components/sagas';
import { userReducer } from '../components/App/reducer/usersReducer';
import { detailUserReducer } from '../components/ListUsers/reducer/detailUserReducer';
import { loginReducer } from '../components/Login/reducer/loginReducer';

const rootReducer = combineReducers({
  userReducer,
  detailUserReducer,
  loginReducer,
});

const sagaMiddleware = reduxSaga();

export default () => {
  return {
    ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga),
  };
};
