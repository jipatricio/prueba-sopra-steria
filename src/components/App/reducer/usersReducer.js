import {
  FAILED_DELETE_USER,
  FAILED_EDIT_USER,
  REQUEST_DELETE_USER,
  REQUEST_EDIT_USER,
  SUCCESS_DELETE_USER,
  SUCCESS_EDIT_USER,
} from '../../DetailUser/actions';
import { SUCCESS_USERS, REQUEST_ALL_USERS, FAILED_USERS } from '../actions';

export const userState = {
  users: [],
  userDelete: '',
  loading: true,
};

export const userReducer = (state = userState, action = {}) => {
  switch (action.type) {
    case REQUEST_ALL_USERS:
      return { ...state, users: [], loading: true };
    case SUCCESS_USERS:
      return { ...state, users: action.results.data, loading: false };
    case FAILED_USERS:
      return { ...state, users: [], loading: false };
    // Delete User
    case REQUEST_DELETE_USER:
      return { ...state, statusDelete: null, loading: true };
    case SUCCESS_DELETE_USER:
      return {
        ...state,
        statusDelete: action.userDelete.status,
        loading: false,
      };
    case FAILED_DELETE_USER:
      return {
        ...state,
        statusDelete: null,
        loading: false,
      };
    // Edit User
    case REQUEST_EDIT_USER:
      return { ...state, loading: true };
    case SUCCESS_EDIT_USER:
      console.log('ACTION', action);
      return { ...state, statusEdit: action.userEdit.status, loading: false };
    case FAILED_EDIT_USER:
      return { ...state, statusEdit: null, loading: false };
    default:
      return state;
  }
};
