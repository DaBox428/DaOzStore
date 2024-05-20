import React from 'react'
import "./List.scss"
import ProductCard from '../ProductCard/ProductCard';

import furi from "../../assets/posters/furi/Furi.png"
import furiMock from "../../assets/posters/furi/furiMockup2.png"
import rising from "../../assets/posters/rising/rising.jpg"
import risingmock from "../../assets/posters/rising/risingMockup2.png"
import ozmock from "../../assets/posters/oz/oz.png"
import oz from "../../assets/posters/oz/ozmock2.png"
import "./List.scss"

export default function List() {



    const data = [
        {
          name: "Metal gear Rising",
          price: "us$ 30",
          img: rising,
          imgAlt: risingmock,
          isNew: true,
        },
        { name: "Oz", price: "us$ 30", img: ozmock, imgAlt: oz, isNew: false },
        { name: "Furi", price: "us$ 30", img: furi, imgAlt: furiMock, isNew: false },
        {
            name: "Metal gear Rising2",
            price: "us$ 30",
            img: rising,
            imgAlt: risingmock,
            isNew: true,
          },
          { name: "Oz2", price: "us$ 30", img: ozmock, imgAlt: oz, isNew: false },
          { name: "Furi2", price: "us$ 30", img: furi, imgAlt: furiMock, isNew: false },
      ];

  return (
    <div className='list'>
        {data?.map((item) => (
            <ProductCard item={item} key={item.name}></ProductCard>
        ))}
    </div>
  )
}
