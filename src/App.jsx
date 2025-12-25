import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { About, Projects, Services } from "./pages";
import "aos/dist/aos.css";
import AOS from "aos";
import i18n from "./i18n/i18n";

function App() {
  const savedLang = localStorage.getItem("lang");
  if (savedLang) {
    i18n.changeLanguage(savedLang);
  }

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    if (i18n.language === "ru") {
      document.body.style.fontFamily = `"Nunito", sans-serif`;
    } else {
      document.body.style.fontFamily = `"Manrope", sans-serif`;
    }
  }, [i18n.language]);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <About /> },
        { path: "/services", element: <Services /> },
        { path: "/projects", element: <Projects /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
