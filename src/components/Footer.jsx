import React from "react";
import { useTranslation } from "react-i18next";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="">
      <hr className="text-[#4b4b4d]" />
      <div className="container py-6 lg:py-12 flex items-center gap-3 justify-center">
        <p className=" text-xl lg:text-2xl ">{t("contact.me")}</p>
        <ul className="flex items-center gap-4">
          <li>
            <Link to="https://t.me/dona_dev">
              <FaTelegramPlane className="text-2xl lg:text-4xl transition-all hover:text-[#4790dd]" />
            </Link>
          </li>
          <li>
            <Link to="mailto:burxonovadurdona027@gmail.com">
              <MdOutlineAlternateEmail className="text-2xl lg:text-4xl transition-all hover:text-[#894c4c]" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
