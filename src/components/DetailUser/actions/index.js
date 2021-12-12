// Actions Delete
export const REQUEST_DELETE_USER = 'requestDeleteUser';
export const requestDeleteUser = (id) => {
  return {
    type: REQUEST_DELETE_USER,
    id,
  };
};

export const SUCCESS_DELETE_USER = 'successDeleteUser';
export const successDeleteUsers = (payload) => ({
  type: SUCCESS_DELETE_USER,
  ...payload,
});

export const FAILED_DELETE_USER = 'failedDeleteUser';
export const failedDeleteUsers = (payload) => ({
  type: FAILED_DELETE_USER,
  ...payload,
});

// Actions Edit
export const REQUEST_EDIT_USER = 'requestEditUser';
export const requestEditUser = (newDetailUser) => ({
  type: REQUEST_EDIT_USER,
  newDetailUser,
});

export const SUCCESS_EDIT_USER = 'successEditUser';
export const successEditUsers = (payload) => ({
  type: SUCCESS_EDIT_USER,
  ...payload,
});

export const FAILED_EDIT_USER = 'failedEditUser';
export const failedEditUsers = (payload) => ({
  type: FAILED_EDIT_USER,
  ...payload,
});
