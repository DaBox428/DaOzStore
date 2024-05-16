import React from "react";
import mainImage from "./mainImage.jpg";
import "./Slider.scss";

function Slider() {
  return (
    <div className="slider">
      <div className="container">
        <img src={mainImage} alt="" className="img" />
      </div>
    </div>
  );
}

export default Slider;
