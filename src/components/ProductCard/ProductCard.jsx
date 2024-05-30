import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";

function ProductCard({ item }) {
  return (
    <Link to={`/product/${item.id}`} className="link">
      <div className="ProductCard">
        <div className="image">
          {item?.attributes.isNew && <span>New</span>}

          <img
            src={
              import.meta.env.VITE_API_STRAPI_URL +
              item.attributes.img.data?.attributes.url
            }
            alt=""
            className="mainImage"
          />
          {item.attributes.imgAlt.data && (
            <img
              src={
                import.meta.env.VITE_API_STRAPI_URL +
                item.attributes.imgAlt.data?.attributes.url
              }
              alt=""
              className="altImage"
            />
          )}
        </div>
        <h2 className="itemName">{item?.attributes.title}</h2>
        <div className="itemPrice">
          <h3>US$ {item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
