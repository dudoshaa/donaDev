import React from "react";

function Paragraph({ text }) {
  return (
    <div className="mb-8">
      <p className="text-sm lg:text-lg md:textarea-md tracking-[3px]" data-aos="fade-down">
        {text}
      </p>
    </div>
  );
}

export default Paragraph;
