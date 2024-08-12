import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import SearchDataProvider from "./providers/SearchDataProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchDataProvider>
      <RouterProvider router={router} />{" "}
    </SearchDataProvider>
  </React.StrictMode>
);
