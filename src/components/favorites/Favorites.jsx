import styles from "./Favorites.module.css";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import FavoriteCard from "../favorite-card/FavoriteCard";
import EmptyList from "../empty-list-message/EmptyList";
import HomeButton from "../home-btn/HomeButton";

export default function Favorites() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function removeFavorite(id) {
    setFavorites((prev) => prev.filter((fav) => fav._id !== id));
  }

  return (
    <div>
      {favorites.length > 0 ? (
        <ul className={styles["fav-character-list"]}>
          {favorites.map((character) => (
            <FavoriteCard
              key={character._id}
              character={character}
              removeFavorite={removeFavorite}
            />
          ))}
        </ul>
      ) : (
        <EmptyList />
      )}
      <HomeButton />
    </div>
  );
}
