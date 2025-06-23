import { Link, useNavigate } from "react-router";
import styles from "./Header.module.css";
import Arrow from "../icon/Arrow";
import LogoutButton from "../logout-btn/LogoutButton";
import { useEffect, useState } from "react";
import LoginButton from "../login-btn/LoginButton";

export default function Header() {
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("isLogged") === "true"
  );
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLogged(localStorage.getItem("isLogged") === "true");
    };

    window.addEventListener("storage", handleStorageChange);
  }, []);

  return (
    <>
      <div className={styles["link-container"]}>
        {isLogged ? (
          <Link to="/favorites" className={styles["link-body"]}>
            Favorites characters <Arrow />
          </Link>
        ) : (
          <Link to="/login" className={styles["link-body"]}>
            {" "}
            Login to see favourites{" "}
          </Link>
        )}

        {isLogged ? (
          <LogoutButton
            onLogout={() => {
              setIsLogged(false), navigate("/login");
            }}
          />
        ) : (
          <LoginButton onLogin={() => navigate("/login")} />
        )}
      </div>

      <div className={styles["header-container"]}>
        <h1>Disney Characters Library</h1>
      </div>
    </>
  );
}
