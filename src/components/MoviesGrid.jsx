import MovieCard from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "./Spinner";

function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    get("/discover/movie").then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => {
        return <MovieCard movie={movie} key={movie.id} />;
      })}
    </ul>
  );
}

export default MoviesGrid;
