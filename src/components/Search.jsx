import { useEffect, useState } from "react";
import styles from "./Search.module.css";
import { GoSearch } from "react-icons/go";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useQuery } from "../hooks/useQuery";

export function Search() {
  const query = useQuery();
  const search = query.get("search");

  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  useEffect(() => {
    setSearchText(search || "");
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/?search=" + searchText);
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          placeholder="Search Movie"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button className={styles.searchButton} type="submit">
          <GoSearch size={20} />
        </button>
      </div>
    </form>
  );
}
