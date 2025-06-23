import styles from "./HomeButton.module.css";
import { Link } from "react-router";

export default function HomeButton() {
  return (
    <div className={styles["link-back-container"]}>
      <Link to="/dashboard" className={styles["link-back-home"]}>
        Back to home
      </Link>
    </div>
  );
}
