import {
  FAILED_DETAIL_USER,
  REQUEST_DETAIL_USER,
  SUCCESS_DETAIL_USER,
} from '../actions';

export const detailUserReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case REQUEST_DETAIL_USER:
      return { ...state, user: {}, loading: true };
    case SUCCESS_DETAIL_USER:
      return { ...state, user: action.userDetail.data, loading: false };
    case FAILED_DETAIL_USER:
      return { ...state, user: {}, loading: false };
    default:
      return state;
  }
};
