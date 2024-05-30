import React from "react";
import "./Cart.scss";

import rising from "../../assets/posters/rising/rising.jpg";
import risingmock from "../../assets/posters/rising/risingMockup2.png";
import furi from "../../assets/posters/furi/Furi.png";
import furiMock from "../../assets/posters/furi/furiMockup2.png";
function Cart() {
  const data = [
    {
      name: "Metal gear Rising",
      price: "us$ 30",
      img: rising,
      imgAlt: risingmock,
      isNew: true,
    },

    {
      name: "Furi",
      price: "us$ 30",
      img: furi,
      imgAlt: furiMock,
      isNew: false,
    },
  ];
  return (
    <div className="cart">
      <h1>Shopping cart</h1>
      {data?.map((item) => {
        return (
          <div className="item" key={item.name}>
            <img src={item.img} alt="" />
            <div className="details">
              <h1>{item.name}</h1>
            </div>
            <hr />
          </div>
        );
      })}
      <div className="total">
        <span>Subtotal</span>
        <span>´price</span>
      </div>
    </div>
  );
}

export default Cart;
