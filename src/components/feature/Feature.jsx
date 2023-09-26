import React from "react";
import "./feature.css";


const Feature = ({ src, heading, text, className }) => {

  return (
    <div className={`arch__feature-container ${className}` }>
      <img
        className={`arch__feature-logo`}
        alt="logo of the feature"
        src={src}
      />
      <div>
        <h1 className="arch__feature-heading txt-basics">{heading}</h1>
        <p className="txt-basics arch__feature-text">{text}</p>
      </div>
    </div>
  );
};

export default Feature;
