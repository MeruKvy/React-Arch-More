import React from "react";
import "./quote.css";
import quoteIcon from "../../assets/“.png";
import { Arrows } from "../../components";
const quote = () => {
  return (
    <div className="arch__quote-container">
      <div className="arch__quote-heading-wrapper">
        <h1 className="txt-smaller-heading ">Sound Too Good To Be True?</h1>
      </div>
      <div className="arch__quote-icon-wrapper">
        <img className="arch__quote-icon" alt="orange quote" src={quoteIcon} />
        <p className="txt-basics arch__quote-txt">
          “We just wanted to thank you for this fantastic website! We are so
          grateful for being able to advertise our Petite cabin and receive
          feedback from people from all over the U.S. and even further.”
        </p>
      </div>
      <div className="arch__quote-footer">
        <p className="txt-basics arch__quote-footer-author">
          Adam Morph — CEO Alfatech
        </p>
        <Arrows />
      </div>
    </div>
  );
};

export default quote;
