import React from "react";
import "./FeaturedProducts.scss";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";

const data = [
  {
    name: "Metal gear Rising",
    price: "us$ 30",
    img: "#",
    imgAlt: "#",
    isNew: true,
  },
  { name: "Oz", price: "us$ 30", img: "#", imgAlt: "#", isNew: false },
  { name: "Furi", price: "us$ 30", img: "#", imgAlt: "#", isNew: false },
];
function FeaturedProducts({ type }) {
  return (
    <div className="FeaturedProducts">
      <div className="top">
        <h1> {type} </h1>
      </div>
      <div className="bottom">
        {data.map((item) => {
          return <ProductCard item={item} key={item.name} />;
        })}
      </div>
    </div>
  );
}

export default FeaturedProducts;
