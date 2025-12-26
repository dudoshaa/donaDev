import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiWorld } from "react-icons/gi";
import { useTranslation } from "react-i18next";

function NavBar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <header className="py-4 mb-6 lg:mb-12">
      <div className="container flex items-center justify-between  ">
        <div className="block lg:hidden relative">
          <button onClick={() => setOpen(!open)}>
            <img
              className=""
              src="/assets/hamburger.svg"
              alt="hamburger-icon"
              width="50"
            />
          </button>

          {open && (
            <div
              className="fixed inset-0  bg-opacity-50 z-40"
              onClick={() => setOpen(false)}
            ></div>
          )}

          <div
            className={`fixed top-0 left-0 h-full w-45 bg-[#4b4b4d]  shadow-lg z-50 transform transition-transform duration-300 ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button onClick={() => setOpen(false)} className="p-4 text-xl">
              <img src="/assets/close.svg" alt="menu close" width="30" />
            </button>
            <ul className="flex flex-col p-4 gap-4">
              <li>
                <NavLink
                  className="flex items-center gap-1"
                  to="/"
                  onClick={() => setOpen(false)}
                >
                  <img src="/assets/about.svg" alt="" width="20" />
                  <span> {t("nav.about")}</span>
                </NavLink>
              </li>{" "}
              <li>
                <NavLink
                  className="flex items-center gap-1"
                  to="/services"
                  onClick={() => setOpen(false)}
                >
                  <img src="/assets/service.svg" alt="" width="20" />
                  <span> {t("nav.services")}</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-1"
                  to="/projects"
                  onClick={() => setOpen(false)}
                >
                  <img src="/assets/project.svg" alt="" width="20" />
                  <span> {t("nav.projects")}</span>
                </NavLink>
              </li>
            </ul>
            <p className="fixed bottom-0 left-1 text-[10px]">v1.0.0</p>
          </div>
        </div>

        <Link to="/">
          <img
            className=""
            src="/assets/logo-portfolio.svg"
            alt="logo"
            width="160"
          />
        </Link>
        <ul className="hidden lg:flex items-center  gap-20 uppercase font-semibold">
          <li>
            <NavLink className="border-b-2 pb-2 border-transparent" to="/">
              {t("nav.about")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className="border-b-2 pb-2 border-transparent"
              to="/services"
            >
              {t("nav.services")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className="border-b-2 pb-2 border-transparent"
              to="/projects"
            >
              {t("nav.projects")}
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center  p-2 rounded-4xl bg-[#4B4B4D]">
          <GiWorld className="text-white text-lg" />
          <select
            value={i18n.language}
            onChange={(e) => {
              const lang = e.target.value;
              i18n.changeLanguage(lang);
              localStorage.setItem("lang", lang);
            }}
            className="uppercase font-bold bg-[#4B4B4D] text-white border-none outline-none cursor-pointer "
          >
            <option className="bg-[#4B4B4D] text-white" value="uz">
              UZ
            </option>
            <option className="bg-[#4B4B4D] text-white" value="en">
              EN
            </option>
            <option className="bg-[#4B4B4D] text-white" value="ru">
              RU
            </option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
