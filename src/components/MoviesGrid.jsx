import movies from "./movies.json";
import MovieCard from "./MovieCard";
import styles from "./MoviesGrid.module.css";

function MoviesGrid() {
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => {
        return <MovieCard movie = {movie} key={movie.id}/>
      })}
    </ul>
  );
}

export default MoviesGrid;
