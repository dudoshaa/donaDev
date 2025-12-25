import React from "react";
import Paragraph from "../components/Paragraph";
import { useTranslation } from "react-i18next";
function About() {
  const { t, i18n } = useTranslation();
  return (
    <div className="second__container">
      <h1 className="font-bold lg:text-2xl mb-5">{t("nav.about")}</h1>
      <Paragraph text={t("about.me")} />
      <Paragraph text={t("about.study")} />
      <Paragraph text={t("about.new")} />
    </div>
  );
}

export default About;
