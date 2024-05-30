import React, { useEffect, useState } from "react";
import "./FeaturedProducts.scss";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import useFetch from "../../hooks/useFetch.js";

function FeaturedProducts({ type }) {
  const { data, loading, err } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className={`FeaturedProducts${type}`}>
      <div className="top">
        <h1> {type} </h1>
      </div>
      <div className="bottom">
        <div className="slider">
          {data.map((item) => {
            return (
              <>
                <ProductCard
                  key={Math.random}
                  item={item}
                  className="ProductCard"
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
