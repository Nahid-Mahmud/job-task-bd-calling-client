import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import SignIn from "../components/SignIn/SignIn";
import SearchPage from "../components/Search/SearchPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <h1>Contact</h1>,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);
