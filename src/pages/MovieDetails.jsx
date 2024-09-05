import movie from "./movie.json";
import styles from "./MovieDetails.module.css";

export function MovieDetail() {
  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
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
