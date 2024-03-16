import "./NavbarStyle.css";
import React from "react";
import { Link } from "react-router-dom";
import Sanicon from "../route/Sanicon";
import PopUp from "./popup";
import PopUp1 from "./popup1";

function Navbar() {
  return (
    <div className="header">
      <Link to="/">
        <h1>DailyHire.</h1>
      </Link>
      <ul className="nav-menu">
        <li>
          <PopUp />
        </li>
        <li>
          <PopUp1 />
        </li>
        <li to="/">
          <Sanicon />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
