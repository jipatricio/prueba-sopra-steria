// Actions detail user
export const REQUEST_DETAIL_USER = 'requestDetailUser';
export const requestDetailsUser = (id) => {
  return {
    type: REQUEST_DETAIL_USER,
    id,
  };
};

export const SUCCESS_DETAIL_USER = 'successDetailUser';
export const successDetailUser = (payload) => ({
  type: SUCCESS_DETAIL_USER,
  ...payload,
});
export const FAILED_DETAIL_USER = 'failedDetailUser';
export const failedDetailUser = (payload) => ({
  type: FAILED_DETAIL_USER,
  ...payload,
});
