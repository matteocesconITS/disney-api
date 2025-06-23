import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import PageNotFound from "./components/pagenotfound/PageNotFound.jsx";
import Detail from "./components/detail/Detail.jsx";
import Favorites from "./components/favorites/Favorites.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/Login.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
