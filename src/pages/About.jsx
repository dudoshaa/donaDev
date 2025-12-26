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
          
        </div>
      </section>
    </>
  );
}

export default About;
