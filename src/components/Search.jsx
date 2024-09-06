import styles from "./Search.module.css";
import { GoSearch } from "react-icons/go";

export function Search() {
  return (
    <form className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <input className={styles.searchInput} placeholder="Search Movie" type="text"></input>
        <button className={styles.searchButton} type="submit">
          <GoSearch size={20} />
        </button>
      </div>
    </form>
  );
}
 