import Star from "../icon/Star";
import StarFill from "../icon/StarFill";
import styles from "./Card.module.css";
import LinkDetail from "../link-detail/LinkDetail";

export default function Card({ character, toggleFavorite, isFavorite }) {
  return (
    <>
      <div className={styles["card-container"]}>
        <div className={styles["icon-favourite"]}>
          <button onClick={() => toggleFavorite(character)}>
            {isFavorite ? <StarFill /> : <Star />}
          </button>
        </div>
        <p>{character.name}</p>
        <img src={character.imageUrl} alt={character.name} />
        <div className={styles["link-container"]}>
          <LinkDetail character={character} />
        </div>
      </div>
    </>
  );
}
