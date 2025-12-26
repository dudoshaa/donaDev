import React from "react";
import { NavLink } from "react-router-dom";

function LiCard({ path, setOpen, desc, src, t }) {
  return (
    <li>
      <NavLink
        className="flex items-center gap-1"
        to={path}
        onClick={() => setOpen(false)}
      >
        <img src={src} alt="" width="20" />
        <span>{`{${t}(${desc})}`}</span>
      </NavLink>
    </li>
  );
}

export default LiCard;
