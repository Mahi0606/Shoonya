import React from "react";
import ItemCard from "./ItemCard";
import { filteredData } from "../utils/mockData";

const Body = () => {






  return (
    <div className="px-10">
      <div className="w-full h-10"></div>
      <div className="px-10">
        <div className="w-full h-10"></div>
        <div className="items-container flex flex-flow-cols gap-5 overflow-x-auto scrollbar-hidden">
          {filteredData.map((item) => (
            <ItemCard
              key={item.id}
              imageUrl={item.imageUrl}
              productName={item.title}
              rating={item.rating_average}
              description={item.discription}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
