import styles from "./MovieCard.module.css";

function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <img className={styles.movieImage} src={imageUrl} alt={movie.original_title} />
      <div>{movie.title}</div>
    </li>
  );
}

export default MovieCard;
