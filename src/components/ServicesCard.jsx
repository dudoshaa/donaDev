import React from "react";

function ServicesCard({ title, desc }) {
  return (
    <li className="py-10 px-8 bg-[#252527] rounded-3xl">
      <p className="font-extrabold  text-xl md:text-2xl lg:text-3xl mb-4">
        {title}
      </p>
      <span className="text-sm md:textarea-md lg:text-lg">{desc}</span>
    </li>
  );
}

export default ServicesCard;
