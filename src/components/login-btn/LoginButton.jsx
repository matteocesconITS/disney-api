import LoginIcon from "../icon/LoginIcon";
import styles from "./LoginButton.module.css";

export default function LoginButton({ onLogin }) {
  return (
    <button
      className={styles["logout-btn"]}
      onClick={() => {
        onLogin();
      }}
    >
      <span className={styles["tooltip-wrapper"]}>
        <LoginIcon />
        <span className={styles["tooltip-text"]}>Login</span>
      </span>
    </button>
  );
}
