import { useQuery } from "@tanstack/react-query"
import { useAxios } from "../hooks/useAxios"
import React, { SetStateAction, useEffect, useState } from "react"


interface CategoryType {
    id:string | number,
    name:string,
    isActive:boolean
}

interface CategoryStateType {
    setCategoryId:React.Dispatch<SetStateAction<string | number>>
}

const HomeCategory = ({setCategoryId}:CategoryStateType) => {
    const {data = []} = useQuery({
        queryKey:["categories"],
        queryFn:() => useAxios().get("/categories").then(res => res.data)
    })
    const [categories, setCategories] = useState<CategoryType[]>(data)

    const handleCategoryBtnClick = (item: CategoryType): void => {
        setCategoryId(item.id)
        setCategories((prevCategories) =>
          prevCategories.map((obj) =>
            obj.id === item.id
              ? { ...obj, isActive: !obj.isActive } // Toggle isActive for the clicked item
              : { ...obj, isActive: false } // Set isActive to false for all other items
          )
        );
      };
      
/* console.log(data); */

    useEffect(() => setCategories(data), [data])
  return (
    <div className="flex items-center justify-between">
        <div className="flex items-center space-x-[10px]">
            {categories.map((item:CategoryType) => (
                <button onClick={() => handleCategoryBtnClick(item)} className={`py-[13px] ${item.isActive ? "bg-[#282828] text-white" : "bg-[#F9F9F9]"} rounded-[30px] px-[20px]`} key={item.id}>{item.name}</button>
            ))}
        </div>
        <p>Сортировка по:популярности</p>
    </div>
  )
}

export default HomeCategory