import React, { useEffect, useRef, useState } from "react";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import "./Products.scss";
import InputItems from "./InputItems";

export default function Products() {
  const id = +useParams().id;

  const [maxPrice, setMaxPrice] = useState(100);
  const [Sort, setSort] = useState("asc");

  const [selectedCategory, setSelectedCategory] = useState([]);

  const [isChecked, setIsChecked] = useState(false);

  const { data, loading, err } = useFetch(`/categories`);

  const ref = useRef(null);

  useEffect(() => {
    setSelectedCategory([id.toString()]);
  }, [id]);

  const handleChange = (e) => {
    handleChecked();
    if (e.target.value) {
      const value = e.target?.value;
      const isChecked = e.target.checked;

      setSelectedCategory(
        isChecked
          ? [...selectedCategory, value]
          : selectedCategory.filter((item) => item !== value)
      );
    } else {
    }
    console.log(selectedCategory);
  };

  const handleChecked = (item) => {
    setIsChecked(item == id);

    console.log("inside handle checked", item == id);
  };

  console.log(selectedCategory);

  return (
    <div className="Products">
      <div className="left">
        {/*  <div className="filter">
          {data.map((item) => {
            return (
              <InputItems
                item={item}
                handlechange={(e) => handleChange(e)}
                checked={isChecked}
              />
            );
          })}
        </div> */}
        <div className="byPrice">
          <span>0</span>
          <input
            type="range"
            min={0}
            max={100}
            onChange={(i) => setMaxPrice(i.target.value)}
          />
          <span>{maxPrice}</span>
        </div>

        <div className="sort">
          <div className="inputItem">
            <label htmlFor="asc">Price asc</label>
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              defaultChecked
              onChange={(e) => setSort("asc")}
            />
          </div>
          <div className="inputItem">
            <label htmlFor="desc">Price desc</label>
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
          </div>
        </div>
      </div>
      <div className="right">
        <img src="#" alt="" className="categoryImage" />
        <List catId={selectedCategory} maxPrice={maxPrice} sorted={Sort}></List>
      </div>
    </div>
  );
}
