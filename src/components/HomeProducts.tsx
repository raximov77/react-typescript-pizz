import { useQuery } from "@tanstack/react-query"
import { useAxios } from "../hooks/useAxios"
import { useEffect, useState } from "react"
import HomeProductItem from "./HomeProductItem"

interface HomeProductsType {
  categoryId:string | number
}

export interface ProductType {
  id:string,
  img:string,
  title:string,
  typeId:number,
  sizeId:number,
  price:string,
  savedCount:number
}

const HomeProducts = ({categoryId}:HomeProductsType) => {

  const {data = []} = useQuery({
    queryKey:['products', categoryId],
    queryFn:() => useAxios().get(`/products?categoryId=${categoryId == 1 ? "" : categoryId}`).then(res => res.data)
  })

  const [products, setproducts] = useState<ProductType[]>(data)

  useEffect(() => setproducts(data), [data])
  return (
    <div className="flex gap-5">
      {products.map((item:ProductType) => <HomeProductItem key={item.id} item={item}/>)}
    </div>
  )
}

export default HomeProducts