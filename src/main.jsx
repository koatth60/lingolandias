import React, { Suspense, lazy, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./i18n.js"
import "./nevera/i18n.js";

// Landing page loads immediately — it's what every user sees first
import Home from "./nevera/pages/Home.jsx";

// Nevera redesign pages (2026). Legacy pages below keep their old look until they are redesigned.
const Classes   = lazy(() => import("./nevera/pages/Classes.jsx"));
const About     = lazy(() => import("./nevera/pages/About.jsx"));
const LevelTest = lazy(() => import("./nevera/pages/LevelTest.jsx"));
const NEVERA_PATHS = ["/", "/courses", "/about", "/test"];

// All other pages load only when the user navigates to them
const Team         = lazy(() => import("./pages/Team.jsx"));
const Contact      = lazy(() => import("./pages/Contact.jsx"));
const Collaboration = lazy(() => import("./pages/Collaboration.jsx"));
const Workshops     = lazy(() => import("./pages/Workshops.jsx"));
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
  const { pathname, hash } = useLocation();
  const nevera = NEVERA_PATHS.includes(pathname);

  // New page: top, or the #section it links to (e.g. /courses#spanish)
  useEffect(() => {
    if (!hash) { window.scrollTo(0, 0); return; }
    // lazy pages mount after Suspense resolves, so wait for the target to exist
    let tries = 0;
    const t = setInterval(() => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
      if (el || ++tries > 40) clearInterval(t);
    }, 50);
    return () => clearInterval(t);
  }, [pathname, hash]);

  useEffect(() => {
    if (nevera) return;
    const container = document.createElement('div');
    container.className = 'particles';
    for (let i = 0; i < 40; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDelay = `${Math.random() * 10}s`;
      p.style.animationDuration = `${15 + Math.random() * 15}s`;
      p.style.width = `${2 + Math.random() * 4}px`;
      p.style.height = p.style.width;
      p.style.background = `rgba(255,255,255,${0.3 + Math.random() * 0.7})`;
      p.style.boxShadow = `0 0 15px rgba(44,62,110,${0.3 + Math.random() * 0.5})`;
      container.appendChild(p);
    }
    document.body.appendChild(container);
    return () => { if (document.body.contains(container)) document.body.removeChild(container); };
  }, [nevera]);

  if (nevera) return <Outlet />;

  return (
    <>
      <div className="energy-waves">
        <svg width="100%" height="100%">
          <defs>
            <linearGradient id="cosmic-wave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#1A2F4F" stopOpacity="0.2" />
              <stop offset="50%"  stopColor="#2C3E6E" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#1A2F4F" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {[...Array(6)].map((_, i) => (
            <path key={i}
              d={`M0 ${300 + i * 80} C 250 ${200 + i * 60}, 750 ${400 + i * 60}, 1000 ${300 + i * 80}`}
              stroke="url(#cosmic-wave)" strokeWidth="1.2" fill="none"
              strokeDasharray="12 12" opacity="0.2">
              <animate attributeName="d" dur={`${18 + i * 2}s`}
                values={`M0 ${300+i*80} C 250 ${200+i*60}, 750 ${400+i*60}, 1000 ${300+i*80};
                         M0 ${320+i*80} C 250 ${220+i*60}, 750 ${420+i*60}, 1000 ${320+i*80};
                         M0 ${300+i*80} C 250 ${200+i*60}, 750 ${400+i*60}, 1000 ${300+i*80}`}
                repeatCount="indefinite" />
            </path>
          ))}
        </svg>
      </div>
      <div className="aurora" />
      <div className="cosmic-grid" />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <ScrollToTop />,
    children: [
      { path: "/",             element: <Home /> },
      { path: "/courses",      element: <Classes /> },
      { path: "/about",        element: <About /> },
      { path: "/team",         element: <Team /> },
      { path: "/contact",      element: <Contact /> },
      { path: "/enteachers",   element: <EnglishTeachers /> },
      { path: "/esteachers",   element: <CarouselCustomArrows /> },
      { path: "/test",         element: <LevelTest /> },
      { path: "/spanish-quiz", element: <SpanishQuiz /> },
      { path: "/english-quiz", element: <EnglishQuiz /> },
      { path: "/collaboration", element: <Collaboration /> },
      { path: "/workshops",    element: <Workshops /> },
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
