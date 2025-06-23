import { useEffect } from "react";
import Login from "./components/login/Login";

function App() {
  useEffect(() => {
    const isLogged = localStorage.getItem("isLogged");
    if (isLogged === null) {
      localStorage.setItem("isLogged", "false");
    }
  }, []);

  return (
    <>
      <Login />
    </>
  );
}

export default App;
