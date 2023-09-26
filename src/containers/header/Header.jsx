import React from "react";
import "./header.css";

import headerImg from "../../assets/headerImg.png";

const Header = () => {
  return (
    <div className="arch__header">
      <div className="arch__header-heading">
        <h1 className="header-title txt-heading">
          Build Your Dream <span className="orange">House</span>
        </h1>
      </div>
      <div className="header-spacer">
        <div>
          <p className="txt-basics arch__header-p">
            100% guaranteed build safe, comfortable and transparent with a
            project management for the best result
          </p>
          <button className="btn-basics arch__header-button">
            Free Consultation
          </button>
        </div>
        <img alt="kitchen" src={headerImg} />
      </div>
    </div>
  );
};

export default Header;
