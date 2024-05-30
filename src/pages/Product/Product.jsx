import React, { useState } from "react";

import "./Product.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
export default function Product() {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const { data, loading, err } = useFetch(`/products/${id}?populate=*`);
  console.log(data);
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={
              import.meta.env.VITE_API_STRAPI_URL +
              data?.attributes?.imgAlt?.data?.attributes.url
            }
            alt=""
            onClick={() => setSelectedImg("imgAlt")}
          />
          <img
            src={
              import.meta.env.VITE_API_STRAPI_URL +
              data?.attributes?.img?.data?.attributes.url
            }
            alt=""
            onClick={() => setSelectedImg("img")}
          />
        </div>
        <div className="mainImg">
          <img
            src={
              import.meta.env.VITE_API_STRAPI_URL +
              data?.attributes?.[selectedImg].data?.attributes.url
            }
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">Price</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          laborum! Porro inventore, quos repellendus nulla beatae voluptatibus
          voluptates animi maxime ipsa, eaque nisi maiores hic cumque corrupti,
          sit aliquid pariatur.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>

        <div className="add">
          <button>Add To Cart</button>
        </div>
        <button className="item">Add to whishlist</button>
        <div className="details">
          <span>Created in : </span>
          <br />
          <span>Inspired by : </span>
        </div>
      </div>
    </div>
  );
}
