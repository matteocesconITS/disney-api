import Card from "../card/Card";
import styles from "./Home.module.css";

export default function Home({ characterList, toggleFavorite, favorites }) {
  return (
    <>
      <ul className={styles["list-container"]}>
        {characterList.map((character) => (
          <Card
            key={character._id}
            character={character}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.some((fav) => fav._id === character._id)}
          />
        ))}
      </ul>
    </>
  );
}
