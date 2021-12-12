// Actions Login
export const REQUEST_LOGIN = 'requestLogin';
export const requestLogin = (infoUser) => {
  return {
    type: REQUEST_LOGIN,
    infoUser,
  };
};

export const SUCCESS_LOGIN = 'successLogin';
export const successLogin = (payload) => ({
  type: SUCCESS_LOGIN,
  ...payload,
});
export const FAILED_LOGIN = 'failedLogin';
export const failedLogin = (payload) => ({
  type: FAILED_LOGIN,
  ...payload,
});
