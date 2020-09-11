import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import AuthOptions from "../auth/AuthOptions";

function Header() {
  return (
    <div className="header">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/75/Bookmyshow-logoid.png"
        alt=""
        className="logo"
      />
      {/* <Link to="/">Book my Show</Link> */}
      <AuthOptions />
    </div>
  );
}

export default Header;
