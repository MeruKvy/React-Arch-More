import React from "react";
import "./rooms.css";
import roomImgSources from "./index.js";
import { Arrows } from "../../components";

const Rooms = () => {
  return (
    <div className="arch__rooms">
      <div className="arch__rooms-heading-container content-spacer ">
        <h1 className="txt-smaller-heading arch__rooms-heading">
          Build professional valuable room
        </h1>
        <Arrows />
      </div>
      <div className="arch__rooms-imgs ">
        {roomImgSources.map((item, index) => (
          <img
            className={`arch__rooms-img ${item.screen}`}
            alt="room interier"
            src={item.src}
            key={index.key}
          />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
