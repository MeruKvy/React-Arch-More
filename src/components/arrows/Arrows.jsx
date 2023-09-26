import React from "react";
import './arrows.css'
import pointerLeft from "../../assets/dashicons_arrow-left-alt.png";
import pointerRight from "../../assets/dashicons_arrow-right-alt.png";

const Arrows = () => {
  return (
    <div>
      <img
        alt="pointer icon"
        className="arch__arrow-margin"
        src={pointerLeft}
      />
      <img
        alt="pointer icon"
        className="arch__arrow"
        src={pointerRight}
      />
    </div>
  );
};

export default Arrows;
