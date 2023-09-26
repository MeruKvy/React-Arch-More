import React from "react";
import "./footer.css";
import { logoData } from "./index.js";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import footerLogo from "../../assets/mainLogoFooter.png";
import phoneImg from "../../assets/phoneArchLogo.png";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const logos = logoData(theme);

  return (
    <div className="arch__footer">
      <div className="arch__footer-partners-container">
        <h1 className="txt-smaller-heading arch__footer-heading">
          Our Partners
        </h1>
        <div className="arch__footers-partners">
          {logos.map((item, index) => (
            <img
              alt="logo of the partner"
              src={item.src}
              key={item.src + index}
              className="arch__partner-logo"
            />
          ))}
        </div>
      </div>
      <div className="arch__footer-container content-spacer">
        <div className="arch__footer-link-container">
          <img
            alt="arch logo"
            className="arch__logo-phone-screen"
            src={phoneImg}
          />
          <p className="txt-basics arch__footer-links">About Us</p>
          <p className="txt-basics arch__footer-links">How it Works</p>
          <p className="txt-basics arch__footer-links">FAQ</p>
          <p className="txt-basics arch__footer-links">Contact Us</p>
          <p className="txt-basics arch__footer-links">Privacy Policy</p>
        </div>
        <div>
          <img
            className="arch__logo-computer-screen"
            alt="orange logo of arch"
            src={footerLogo}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
