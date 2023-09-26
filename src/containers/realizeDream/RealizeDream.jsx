import React from "react";
import "./realizeDream.css";
import houseImg from "../../assets/houseLight.png";
import darkHouseImg from "../../assets/darkHouse.png";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const RealizeDream = () => {
  const { theme } = useContext(ThemeContext);

  let houseLight = "";
  let houseDark = "";

  if (theme === "light-theme") {
    houseDark = "hidden";
  } else {
    houseLight = "hidden";
  }

  return (
    <div className="arch__realizeDream ">
      <div className="header-spacer">
        <img
          alt="white house but not what you think"
          className={`${houseLight}`}
          src={houseImg}
        />
        <img
          alt="white house with dark background"
          className={`${houseDark}`}
          src={darkHouseImg}
        />
        <div className="arch__realizeDream-heading-wrappeer">
          <h1 className="arch__realizeDream-heading txt-smaller-heading">
            Realize your dream project with{" "}
            <span className="orange">Archmove</span>
          </h1>
          <div className="arch__realizeDream-btn-wrapper">
            <button className="btn-basics arch__realizeDream-btn">
              FREE CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealizeDream;
