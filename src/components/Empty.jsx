import styles from "./Empty.module.css";
import emptyImg from "../empty.png";

export function Empty() {
  return (
    <div className={styles.container}>
      <div>
        <img width={300} height={500} src={emptyImg} alt="empty" />
      </div>
    </div>
  );
}
