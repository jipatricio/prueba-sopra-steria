export const REQUEST_ALL_USERS = 'actionViewAllUsers';
export const requestViewAllUsers = (page) => {
  return {
    type: REQUEST_ALL_USERS,
    page,
  };
};

export const SUCCESS_USERS = 'successUsers';
export const successUsers = (payload) => ({
  type: SUCCESS_USERS,
  ...payload,
});

export const FAILED_USERS = 'failedUsers';
export const failedUsers = (payload) => ({
  type: FAILED_USERS,
  ...payload,
});
