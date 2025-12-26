import React from "react";

import { useTranslation } from "react-i18next";
import { Paragraph } from "../components";
function About() {
  const { t } = useTranslation();
  return (
    <>
      <section className="mb-8">
        <div className="second__container">
          <h2 className="title">{t("nav.about")}</h2>
          <Paragraph text={t("about.me")} />
          <Paragraph text={t("about.study")} />
          <Paragraph text={t("about.new")} />
        </div>
      </section>
      <section>
        <div className="second__container">
          <h2 className="title">{t("skill")}</h2>
          <ul className="grid grid-cols-3  lg:grid-cols-4 grid-rows-3  place-items-center gap-2">
            <li className="lg:col-span-2 hover:scale-105 transition-all">
              <img
                src="/assets/javascript-logo.svg"
                alt="JS LOGO"
                width="100"
              />
            </li>
            <li className="lg:col-span-2 hover:scale-105 transition-all">
              <img src="/assets/css-logo.svg" alt="CSS LOGO" width="100" />
            </li>
            <li className="hover:scale-105 transition-all">
              <img src="/assets/html-logo.svg" alt="HTML LOGO" width="100" />
            </li>
            <li className="hover:scale-105 transition-all">
              <img src="/assets/react-logo.svg" alt="REACT LOGO" width="100" />
            </li>
            <li className="hover:scale-105 transition-all">
              <img
                src="/assets/typescript-logo.svg"
                alt="TS LOGO"
                width="100"
              />
            </li>
            <li className="hover:scale-105 transition-all">
              <img
                src="/assets/github-logo.svg"
                alt="GITHUB LOGO"
                width="100"
              />
            </li>
            <li className="lg:col-span-2 hover:scale-105 transition-all">
              <img src="/assets/redux-logo.svg" alt="REDUX LOGO" width="100" />
            </li>
            <li className="lg:justify-self-start lg:-ml-10 hover:scale-105 transition-all">
              <img src="/assets/figma-logo.svg" alt="FIGMA LOGO" width="100" />
            </li>
            <li className="lg:justify-self-start lg:-ml-10 hover:scale-105 transition-all">
              <img
                src="/assets/tailwind-logo.svg"
                alt="TAILWIND LOGO"
                width="100"
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default About;
