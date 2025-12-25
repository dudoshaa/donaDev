import React from "react";

function Paragraph({ text }) {
  return (
    <div  className="mb-3">
      <p className="text-lg" data-aos="fade-down">{text}</p>
    </div>
  );
}

export default Paragraph;
