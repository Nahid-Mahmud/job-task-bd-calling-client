import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import SignIn from "../components/SignIn/SignIn";
import SearchPage from "../components/Search/SearchPage";
import SearchResultPage from "../components/SearchResult/SearchResultPage";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ErrorPage from "../components/shared/ErrorPage";
import SignUp from "../components/signup/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/searchResult",
        element: <SearchResultPage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);
