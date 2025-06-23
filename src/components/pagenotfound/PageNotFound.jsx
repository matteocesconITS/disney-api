import styles from "./PageNotFound.module.css";
import { Link } from "react-router";

export default function PageNotFound() {
  return (
    <div className={styles["pagenotfound-container"]}>
      <h1 className={styles["pagenotfound-text"]}>
        The page you are looking for does not exist, <br />
        We're sorry
      </h1>
      <Link to={"/"} className={styles["back-home-btn"]}>
        Back to home
      </Link>
    </div>
  );
}
