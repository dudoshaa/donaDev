import React from "react";
import { NavLink } from "react-router-dom";
import { GiWorld } from "react-icons/gi";
import { useTranslation } from "react-i18next";

function NavBar() {
  const { t, i18n } = useTranslation();
  return (
    <header className="py-4">
      <div className="container flex items-center justify-between  ">
        <div className="">
          <img src="/assets/logo-portfolio.svg" alt="" />
        </div>
        <ul className="flex items-center  gap-20 uppercase font-semibold">
          <li>
            <NavLink className="border-b-2 pb-2 border-transparent" to="/">
              {t("nav.about")}
            </NavLink>
          </li>
          <li>
            <NavLink className="border-b-2 pb-2 border-transparent" to="/services">
              {t("nav.services")}
            </NavLink>
          </li>
          <li>
            <NavLink className="border-b-2 pb-2 border-transparent" to="/projects">
              {t("nav.projects")}
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-2  p-2 rounded-4xl bg-[#4B4B4D]">
          <GiWorld className="text-white text-lg" />
          <select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="uppercase font-bold bg-[#4B4B4D] text-white border-none outline-none cursor-pointer w-20"
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
