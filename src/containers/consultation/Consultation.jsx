import React from "react";
import "./conclusion.css";
import consImg from "../../assets/consultation-img.png";
import { Feature } from "../../components";
import { useContext } from "react";
import { ThemeContext } from "../../App";

import {
  shieldLogo,
  darkShieldLogo,
  dollarSign,
  darkDollarSign,
  houseIcon,
  darkHouseIcon,
} from "./index.js";

const Conclusion = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="arch__consultation content-spacer">
      <div className="content-spacer arch__consultation-info">
        <img alt="consultation in the office" src={consImg} />
        <div className="arch__consultation-benefits">
          <h1 className="txt-smaller-heading arch__conclusion-heading">
            Build your needs with Archmove
          </h1>
          <Feature
            src={theme === "light-theme" ? shieldLogo : darkShieldLogo}
            heading="100% guaranteed project completion"
            text="Build safe, comfortable and transparent with a project management application with a joint account."
            className="arch__consultation-first-feature"
          />
          <Feature
            src={theme === "light-theme" ? dollarSign : darkDollarSign}
            heading="No additional fees"
            text="There are no hidden costs. The value of the offer you get is the value you paid."
          />
          <Feature
            src={theme === "light-theme" ? houseIcon : darkHouseIcon}
            heading="Get escort from the Team"
            text="Monitor reports from the Arsitag team who check directly in the field."
          />
        </div>
      </div>
      <div className="arch__cons-btn-wrapper">
        <button className="arch__cons-btn btn-basics">Free Consultation</button>
      </div>
    </div>
  );
};

export default Conclusion;
