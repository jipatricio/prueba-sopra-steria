export const apiCall = (method, url) => {
  return fetch(url, { method }).then((res) => {
    return res.json();
  });
};
