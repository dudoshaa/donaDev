import React from "react";
import { useTranslation } from "react-i18next";
import { ServicesCard } from "../components";

function Services() {
  const { t } = useTranslation();
  return (
    <section>
      <div className="second__container">
        <h2 className=" hidden md:block md:text-2xl lg:text-2xl mb-6  font-semibold">
          {t("service")}
        </h2>
        <h2 className=" block font-bold text-xl mb-6 lg:hidden md:hidden  ">
          {t("service.mobile")}
        </h2>
        <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <ServicesCard title="Web Development" desc={t("service.web.desc")} />
          <ServicesCard title="UI/UX Design" desc={t("service.ui.desc")} />
          <ServicesCard
            title="React.js Development"
            desc={t("service.react.desc")}
          />
          <ServicesCard
            title="Responsive Design"
            desc={t("service.respo.desc")}
          />
          <ServicesCard
            title="Performance Optimization"
            desc={t("service.opt.desc")}
          />
          <ServicesCard
            title="Code Maintenance & Debugging"
            desc={t("service.bug.desc")}
          />
        </ul>
      </div>
    </section>
  );
}

export default Services;
