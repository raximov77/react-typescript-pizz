import React from "react";
import { ProductType } from "./HomeProducts";
import { Segmented } from "antd";

const HomeProductItem: React.FC<{ item: ProductType }> = ({ item }) => {
  return (
    <div className="flex items-center flex-col p-8">
      <img src={item.img}alt="Img" className="cursor-pointer" style={{ width: "270px", height: "270px", objectFit: "cover" }}/>
      <h2 className="text-[20px] font-extrabold mb-[22px]">{item.title}</h2>
      <div className="flex flex-col gap-4 p-3 bg-[#F3F3F3] shadow-md rounded-md">
        <Segmented
            options={['тонкое', 'традиционное']}
            onChange={(value) => {
              console.log(value);
            }}
            size="large"
            className="custom-segmented" 
          />
          <Segmented
            options={['26 см.', '30 см.', '40 см.']}
            onChange={(value) => {
              console.log(value);
            }}
            size="large"
            className="custom-segmented"
          />
      </div>
    <div className=" flex items-center gap-[36px] mt-[17px]">
      <strong className="text-[22px] font-bold">от {item.price} ₽</strong>
      <button className="flex items-center gap-2 px-[5px] py-2 border-2 border-[#EB5A1E] text-[#EB5A1E] rounded-full font-semibold hover:bg-[#EB5A1E] hover:text-white transition">
        <i className="fa-solid fa-plus text-lg"></i>
        <span className="text-[16px] font-bold">Добавить</span>
        <span className="flex items-center justify-center w-6 h-6 bg-[#EB5A1E] text-white text-sm font-bold rounded-full">2</span>
      </button>
    </div>
    </div>
  );
};

export default HomeProductItem;
