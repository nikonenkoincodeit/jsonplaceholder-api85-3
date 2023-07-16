const BASE_URL = "https://jsonplaceholder.typicode.com/";

export function getList(point) {
  return fetch(`${BASE_URL}${point}`).then((data) => {
    if (!data.ok) {
      throw new Error(data.statusText || data.status);
    }
    return data.json();
  });
}
