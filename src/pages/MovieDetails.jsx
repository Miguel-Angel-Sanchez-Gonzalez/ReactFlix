import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import movie from "./movie.json";
import styles from "./MovieDetails.module.css";
import { useEffect } from "react";

export function MovieDetail() {
  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  const { movieId } = useParams();
  console.log(movieId);

  fetch("https://api.themoviedb.org/3/discover/movie", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.original_title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Description: </strong>
          {movie.overview}
        </p>
        <p>
          <strong>Genres: </strong>
          {movie.genres.map((genre) => genre.name).join(" - ")}
        </p>
      </div>
    </div>
  );
}
