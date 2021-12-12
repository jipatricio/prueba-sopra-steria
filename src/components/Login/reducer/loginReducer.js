import { FAILED_LOGIN, REQUEST_LOGIN, SUCCESS_LOGIN } from '../actions';

export const loginReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return { ...state, token: null, loading: true };
    case SUCCESS_LOGIN:
      if (action.responseLogin && action.responseLogin.token) {
        return { ...state, token: action.responseLogin.token, loading: false };
      }
      return { ...state, token: null, loading: false };
    case FAILED_LOGIN:
      return { ...state, token: null, loading: false };

    default:
      return state;
  }
};
