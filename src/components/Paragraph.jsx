import React from "react";

function Paragraph({ text }) {
  return (
    <div className="mb-4">
      <p className="text-lg tracking-[3px]" data-aos="fade-down">
        {text}
      </p>
    </div>
  );
}

export default Paragraph;
