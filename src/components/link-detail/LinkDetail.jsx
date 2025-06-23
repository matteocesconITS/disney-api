import Arrow from "../icon/Arrow";
import { Link } from "react-router";
import styles from "./LinkDetail.module.css";

export default function LinkDetail({ character }) {
  return (
    <Link to={`/detail/${character._id}`} className={styles["link-button"]}>
      Details
      <Arrow />
    </Link>
  );
}
