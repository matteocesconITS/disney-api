import CircularProgress from "@mui/joy/CircularProgress";
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles["loading-container"]}>
      <CircularProgress color="primary" variant="plain" size="lg" />
      <p>Loading...</p>
    </div>
  );
}
