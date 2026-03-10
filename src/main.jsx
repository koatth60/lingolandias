import React, { Suspense, lazy, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./i18n.js"

// Landing page loads immediately — it's what every user sees first
import App from "./App.jsx";

// All other pages load only when the user navigates to them
const Courses      = lazy(() => import("./pages/Courses.jsx"));
const Team         = lazy(() => import("./pages/Team.jsx"));
const Contact      = lazy(() => import("./pages/Contact.jsx"));
const Test         = lazy(() => import("./pages/Test.jsx"));
const Collaboration = lazy(() => import("./pages/Collaboration.jsx"));
const EnglishTeachers = lazy(() => import("./nested-routes/EnglishTeachers.jsx"));
const CarouselCustomArrows = lazy(() =>
  import("./nested-routes/SpanishTeachers.jsx").then(m => ({ default: m.CarouselCustomArrows }))
);
const SpanishQuiz  = lazy(() => import("./nested-routes/SpanishQuiz.jsx"));
const EnglishQuiz  = lazy(() => import("./nested-routes/EnglishQuiz.jsx"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center" style={{ background: "radial-gradient(circle at 30% 40%, #0B1E33, #1A2F4F, #2C3E6E)" }}>
    <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return <Outlet />;
};

const router = createBrowserRouter([
  {
    element: <ScrollToTop />,
    children: [
      { path: "/",             element: <App /> },
      { path: "/courses",      element: <Courses /> },
      { path: "/team",         element: <Team /> },
      { path: "/contact",      element: <Contact /> },
      { path: "/enteachers",   element: <EnglishTeachers /> },
      { path: "/esteachers",   element: <CarouselCustomArrows /> },
      { path: "/test",         element: <Test /> },
      { path: "/spanish-quiz", element: <SpanishQuiz /> },
      { path: "/english-quiz", element: <EnglishQuiz /> },
      { path: "/collaboration", element: <Collaboration /> },
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<PageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
