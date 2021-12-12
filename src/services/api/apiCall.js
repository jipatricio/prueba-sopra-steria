export const apiCall = (method, url) => {
  return fetch(url, { method }).then((res) => {
    return res.json();
  });
};
export const apiCallPut = (method, url, body) => {
  return fetch(url, { method, body }).then((res) => {
    return res.json;
  });
};
