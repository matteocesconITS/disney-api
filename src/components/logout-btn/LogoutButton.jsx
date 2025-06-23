import styles from "./LogoutButton.module.css";
import LogoutIcon from "../icon/LogoutIcon";

export default function LogoutButton({ onLogout }) {
  return (
    <button
      className={styles["logout-btn"]}
      onClick={() => {
        localStorage.setItem("isLogged", "false");
        onLogout();
      }}
    >
      <span className={styles["tooltip-wrapper"]}>
        <LogoutIcon />
        <span className={styles["tooltip-text"]}>Logout</span>
      </span>
    </button>
  );
}
