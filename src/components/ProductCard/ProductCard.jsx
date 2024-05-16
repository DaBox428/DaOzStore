import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ item }) {
  return (
    <Link to={`/product/${item.id}`} className="link">
      <div className="ProductCard">
        <div className="image">
          <img src={item.img} alt="" className="mainImage" />
          <img src={item.altImg} alt="" className="altImage" />
        </div>
        <h2 className="itemName">{item.name}</h2>
        <div className="itemPrice">
          <h3>{item.price}</h3>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
