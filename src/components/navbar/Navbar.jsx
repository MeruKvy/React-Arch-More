import React from "react";
import "./navbar.css";
import mainLogo from "../../assets/logo-arch.png";
import searchIcon from "../../assets/search.png";
import DarkMode from "../DarkMode/DarkMode";
import toggleLight from "../../assets/toggle-menu-light.png";
import toggleDark from "../../assets/toggle-menu-dark.png";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="arch__navbar navbar-spacer">
      <div className="flex-container">
        <img
          alt="arch main logo"
          className="march__navbar-main-logo"
          src={mainLogo}
        />
        <div className="flex-container">
          <a href=" " className="arch__navbar-link">
            How it Works
          </a>
          <a href=" " className="arch__navbar-link">
            Design Gallery
          </a>
          <a href=" " className="arch__navbar-link">
            Architects
          </a>
          <a href=" " className="arch__navbar-link">
            Articles
          </a>
        </div>
        <DarkMode />
      </div>
      <div className="flex-container">
        <div className="arch__navbar-search">
          <img alt="search icon" src={searchIcon} />
        </div>
        <a href=" " className="Navbar__sing-in">
          Sign in
        </a>
        <button className="arch__navbar-sign-up-btn btn-basics">Sing up</button>
        <img
          className="toggle-display"
          src={theme === "light-theme" ? toggleLight : toggleDark}
        />
      </div>
    </div>
  );
};

export default Navbar;
