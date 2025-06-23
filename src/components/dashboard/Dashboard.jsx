import axios from "axios";
import { useEffect, useState } from "react";
import "./Dashboard.module.css";
import Loading from "../loading/Loading";
import Home from "../home/Home";
import Header from "../header/Header";
import SearchBar from "../search/SearchBar";

function Dashboard() {
  const [characterList, SetCharacterList] = useState([]);
  const [research, setResearch] = useState("");
  //GET FAVORITE ON FIRST RENDER
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  //API CALL
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.disneyapi.dev/character?pageSize=300`
      );

      SetCharacterList(response.data.data);
    };
    fetchData();
  }, []);

  //UPDATE LOCAL STORAGE WHEN FAV CHANGES
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  //FILTER RESEARCH
  const filteredCharacters = characterList.filter((character) =>
    character.name.toLowerCase().includes(research.toLowerCase())
  );

  //ADD AND REMOVE FAVORITES
  const toggleFavorite = (character) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav._id === character._id);
      if (isFavorite) {
        return prevFavorites.filter((fav) => fav._id !== character._id);
      } else {
        return [...prevFavorites, character];
      }
    });
  };

  return (
    <>
      {characterList.length > 0 ? (
        <>
          <Header />
          <SearchBar research={research} setResearch={setResearch} />
          {filteredCharacters.length > 0 ? (
            <Home
              characterList={filteredCharacters}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
            />
          ) : (
            <h1 className="no-results">No results</h1>
          )}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Dashboard;
