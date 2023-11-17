import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Onboarding from "./pages/Onboarding";
import PageError from "./pages/PageError";
import DateList from "./components/DateList/DateList";
import PageNoDate from "./pages/PageNoDate";
import { ApiWeatherProvider } from "./components/contexts/ApiWeatherContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Onboarding />,
    title: "",
  },
  {
    path: "/accueil",
    element: <App />,
    title: "(ville actuelle)",
  },
  {
    path: "/*",
    element: <PageError />,
    title: "",
  },
  {
    path: "/date",
    element: <DateList />,
    title: "(ville actuelle)",
  },

  {
    path: "/nodate",
    element: <PageNoDate />,
    title: "",
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ApiWeatherProvider>
      <RouterProvider router={router} />
    </ApiWeatherProvider>
  </React.StrictMode>
);
