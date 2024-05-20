import React from "react";
import "./FeaturedProducts.scss";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import furi from "../../assets/posters/furi/Furi.png"
import furiMock from "../../assets/posters/furi/furiMockup2.png"
import rising from "../../assets/posters/rising/rising.jpg"
import risingmock from "../../assets/posters/rising/risingMockup2.png"
import ozmock from "../../assets/posters/oz/oz.png"
import oz from "../../assets/posters/oz/ozmock2.png"

const data = [
  {
    name: "Metal gear Rising",
    price: "us$ 30",
    img: rising,
    imgAlt: risingmock,
    isNew: true,
  },
  { name: "Oz", price: "us$ 30", img: ozmock, imgAlt: oz, isNew: false },
  { name: "Furi", price: "us$ 30", img: furi, imgAlt: furiMock, isNew: false },
];
function FeaturedProducts({ type }) {
  return (
    <div className="FeaturedProducts">
      <div className="top">
        <h1> {type} </h1>
      </div>
      <div className="bottom">
        {data.map((item) => {
          return <ProductCard item={item} key={item.name} className="ProductCard"/>;
        })}
      </div>
    </div>
  );
}

export default FeaturedProducts;
