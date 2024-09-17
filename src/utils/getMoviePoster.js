import placeholder from "../placeholder.png";

export function getMoviePoster(poster_path, width) {
  return poster_path ? `https://image.tmdb.org/t/p/w${width}${poster_path}` : placeholder;
}
