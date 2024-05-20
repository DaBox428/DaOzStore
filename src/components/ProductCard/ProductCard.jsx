import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss"

function ProductCard({ item }) {
  return (
    <Link to={`/product/${item.id}`} className="link">
      <div className="ProductCard">
        <div className="image">
          {item.isNew && <span>New</span>  }
          <img src={item.imgAlt} alt="" className="mainImage" />
          <img src={item.img} alt="" className="altImage" />
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
