import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { About, Projects, Services } from "./pages";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  useEffect(() => {
    if (i18n.language == "ru") {
      document.body.style.fontFamily = "Nunito,sans-serif";
    } else {
      document.body.style.fontFamily = "Manrope,sans-serif";
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
