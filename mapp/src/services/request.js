export default (url, headers) =>  {
  return fetch(url, headers).
    then(res => res.json())
};
