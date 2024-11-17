import React from "react"
import { ProductType } from "./HomeProducts"


const HomeProductItem:React.FC<{item:ProductType}> = ({item}) => {
  return (
    <div>
        <img src={item.img} alt="Img" />
        <h2>{item.title}</h2>
    </div>
  )
}

export default HomeProductItem