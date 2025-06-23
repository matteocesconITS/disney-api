import styles from "./FavoriteCard.module.css";
import { Link } from "react-router";
import Arrow from "../icon/Arrow";
import Delete from "../icon/Delete";

export default function FavoriteCard({ character, removeFavorite }) {
  return (
    <li className={styles["fav-character"]}>
      <img src={character.imageUrl} alt={character.name} />
      <div className={styles["text-container"]}>
        <div className={styles["text-sub-container"]}>
          {character.name}
          <Link
            to={`/detail/${character._id}`}
            className={styles["link-back-detail"]}
          >
            Detail
            <Arrow />
          </Link>
        </div>
        <button
          onClick={() => removeFavorite(character._id)}
          className={styles["delete-btn"]}
        >
          <Delete />
        </button>
      </div>
    </li>
  );
}
