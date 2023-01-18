import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Gallrey from "../Page/Gallery/Gallrey";
import Home from "../Page/Home/Home";
import Post from "../Page/Post/Post";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/gallery", element: <Gallrey /> },
      { path: "/post", element: <Post /> },
    ],
  },
]);
