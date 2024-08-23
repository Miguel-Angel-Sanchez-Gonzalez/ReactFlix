import movies from "./movies.json";
import MovieCard from "./assets/MovieCard";

function MoviesGrid() {
  return (
    <ul>
      {movies.map((movie) => {
        // return <li key={movie.id}>{movie.title}</li>;
        return <MovieCard movie = {movie} key={movie.id}/>
      })}
    </ul>
  );
}

export default MoviesGrid;
