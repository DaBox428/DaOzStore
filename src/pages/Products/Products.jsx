import React, { useState } from "react";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";

import "./Products.scss"

export default function Products() {


  const id = +useParams().id
  console.log(id)

  function handleChange() {

  }

  const [maxPrice, setMaxPrice] = useState(100);
  const [Sort, setSort] = useState(null);
  return <div className="Products">
    <div className="left">
      <div className="filter">
        <div className="inputItem">
          <input type="checkbox" id="1" value={1} />
          <label htmlFor="1">Posters</label>
        </div>
        <div className="inputItem">
          <input type="checkbox" id="2" value={2} />
          <label htmlFor="2">Shadow Boxes</label>
        </div>
        <div className="inputItem">
          <input type="checkbox" id="3" value={3} />
          <label htmlFor="3">3d Prints</label>
        </div>
      </div>
      <div className="byPrice">
        <span>0</span>
        <input type="range" min={0} max={100} onChange={(i) => handleChange(i.target.value)}/>
        <span>{maxPrice}</span>
      </div>
      
      <div className="sort">
        <div className="inputItem">
          <label htmlFor="asc">Price asc</label>
          <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("asc")}/>
        </div>
        <div className="inputItem">
          <label htmlFor="desc">Price desc</label>
          <input type="radio" id="desc" value="desc" name="price" onChange={e=>setSort("desc")}/>
        </div>
      </div>
    </div>
    <div className="right">
      <img src="#" alt="" className="categoryImage"/>
      <List catId={id} maxPrice={maxPrice} sorted={Sort}></List>
    </div>
  </div>;
}
