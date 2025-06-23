import { useState } from "react";
import { Link, useNavigate } from "react-router";
import styles from "./Login.module.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const correctUsername = "user";
  const correctPassword = "1234";

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === correctUsername && password === correctPassword) {
      setErrorMessage("");
      localStorage.setItem("isLogged", "true");
      navigate("/dashboard");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className={styles["login-container"]}>
      <h1>Login</h1>
      <form onSubmit={handleLogin} className={styles["form-container"]}>
        <div>
          <label className={styles["input-label"]}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label className={styles["input-label"]}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <button className={styles["btn-login"]}>
            <Link to="/dashboard">Continue as guest</Link>
          </button>
          <button type="submit" className={styles["btn-login"]}>
            Login
          </button>
        </div>
      </form>

      <p style={{ color: "red" }}>{errorMessage}</p>
    </div>
  );
}
