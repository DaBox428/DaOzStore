import Slider from "../../components/Slider/Slider.jsx";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts.jsx";
import React from "react";
import "./Home.scss";

export default function Home() {
  return (
    <div>
      <Slider />
      <FeaturedProducts type={"Featured Products"} />
    </div>
  );
}
