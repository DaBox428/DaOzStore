import React from "react";
import "./List.scss";
import ProductCard from "../ProductCard/ProductCard";
import useFetch from "../../hooks/useFetch";

import "./List.scss";

export default function List({ catId, maxPrice, sorted }) {
  const { data, loading, err } = useFetch(
    `/products?populate=*${catId.map(
      (item) => `&[filters][categories][id]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sorted}`
  );

  return (
    <div className="list">
      {data?.map((item) => (
        <ProductCard item={item} key={item.name}></ProductCard>
      ))}
    </div>
  );
}
