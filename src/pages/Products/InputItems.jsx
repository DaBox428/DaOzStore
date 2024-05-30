import React from "react";

function InputItems({ item, handlechange, checked }) {
  return (
    <div className="inputItem" key={item.id}>
      <input
        type="checkbox"
        id={item.id}
        value={item.id}
        onChange={(e) => handlechange(e)}
        defaultChecked={checked}
      />
      <label htmlFor={item.id}>{item.attributes.title}</label>
    </div>
  );
}

export default InputItems;
