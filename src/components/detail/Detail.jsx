import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Loading from "../loading/Loading.jsx";
import axios from "axios";
import styles from "./Detail.module.css";
import HomeButton from "../home-btn/HomeButton.jsx";
import LinkIcon from "../icon/LinkIcon.jsx";
import FilmTab from "../detail-tabs/FilmTab.jsx";
import VideogamesTab from "../detail-tabs/VideogameTab.jsx";
import TvShowTab from "../detail-tabs/TvShowTab.jsx";
import Film from "../icon/Film.jsx";
import Game from "../icon/Game.jsx";
import Serie from "../icon/Serie.jsx";

export default function Detail({}) {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});
  const [activeTab, setActiveTab] = useState("films");

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.disneyapi.dev/character/${params.id}`
      );
      setCharacter(response.data.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles["detail-container"]}>
          <img src={character.imageUrl} alt={character.name} />

          <p>
            Name: <span>{character.name}</span>{" "}
          </p>

          <ul className="nav nav-tabs mb-3">
            {/* films */}
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "films" ? "active" : ""}`}
                onClick={() => setActiveTab("films")}
              >
                <Film />
                Films
              </button>
            </li>
            {/* videogames */}
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "videoGames" ? "active" : ""
                }`}
                onClick={() => setActiveTab("videoGames")}
              >
                <Game />
                VideoGames
              </button>
            </li>
            {/* tvshows */}
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "tvShows" ? "active" : ""
                }`}
                onClick={() => setActiveTab("tvShows")}
              >
                <Serie />
                TvShows
              </button>
            </li>
          </ul>

          {(() => {
            switch (activeTab) {
              case "films":
                return <FilmTab character={character} />;
              case "videoGames":
                return <VideogamesTab character={character} />;
              case "tvShows":
                return <TvShowTab character={character} />;
              default:
                return <FilmTab character={character} />;
            }
          })()}

          <div className={styles["end-container"]}>
            <HomeButton />

            <a href={character.sourceUrl} target="_blank">
              Find out more about this character <LinkIcon />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
