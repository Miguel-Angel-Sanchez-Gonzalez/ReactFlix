import MovieCard from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";

function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => {
        return <MovieCard movie={movie} key={movie.id} />;
      })}
    </ul>
  );
}

export default MoviesGrid;
