import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./i18n.js"

import App from "./App.jsx";
import Courses from "./pages/Courses.jsx";
import Team from "./pages/Team.jsx";
import Contact from "./pages/Contact.jsx";
import EnglishTeachers from "./nested-routes/EnglishTeachers.jsx";
import { CarouselCustomArrows } from "./nested-routes/SpanishTeachers.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/enteachers",
    element: <EnglishTeachers />,
  },
  {
    path: "/esteachers",
    element: <CarouselCustomArrows />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
