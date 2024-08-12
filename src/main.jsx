import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import SearchDataProvider from "./providers/SearchDataProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./providers/AuthProvider";

// create a client

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SearchDataProvider>
          <RouterProvider router={router} /> <ToastContainer />
        </SearchDataProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
