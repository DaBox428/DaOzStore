import React from "react";

import "./Slider.scss";
import logo from "./ozlogo.png";

function Slider() {
  return (
    <div className="slider">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default Slider;
