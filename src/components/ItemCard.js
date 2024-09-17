import React from "react";
import StarRating from "./propertyComponents/StarRating";
import DecodeDescription from "./propertyComponents/DecodeDescription";

const ItemCard = (props) => {
  const { imageUrl, productName, rating, description, price } = props;

  return (
    <div className="item-card flex flex-col min-w-[440px] pt-[5px] pl-[12px] pb-[30px] justify-between w-full sm:w-60 md:w-72 lg:w-80">
      <div>
        <img
          className="h-[536px] w-full object-cover rounded-3xl"
          alt="item-image"
          src={imageUrl}
        ></img>
        <div className="flex flex-col justify-between list-none">
          <li className="item-name font-medium text-lg my-3">{productName}</li>
          <li className="item-price my-1">Starting Rs. {price}</li>
          <li>
            {rating != null ? <StarRating rating={Math.round(rating)} /> : null}
          </li>
          <li className="font-light text-lg">
            <DecodeDescription description={description} />
          </li>
        </div>
      </div>
      <button
        type="button"
        className="w-[154px] h-[47px] bg-transparent hover:bg-orange-900 text-orange-900 text-xl font-light hover:text-white border border-orange-900 hover:border-transparent rounded-full">
        Shop Now
      </button>
    </div>
  );
};

export default ItemCard;
