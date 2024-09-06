const API = "https://api.themoviedb.org/3";
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
