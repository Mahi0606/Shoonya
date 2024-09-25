import React, { useState } from "react";
import StarRating from "../utils/StarRating";
import DecodeDescription from "../utils/DecodeDescription";
import { allProducts } from "../utils/mockData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupeeSign,
  faMinusSquare,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { db } from "../utils/firebase";

const BuyPage = () => {
  const { id } = useParams();
  const item = allProducts.find((item) => item.id.toString() === id);
  const [quantity, setQuantity] = useState(1);
  const user = useSelector((state) => state.user.user);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = async () => {
    if (!user) {
      alert("Please log in to add items to the cart.");
      return;
    }

    try {
      const cartRef = doc(db, "carts", user.uid); // Reference to user's cart
      const cartSnap = await getDoc(cartRef);

      let cartItems = [];
      if (cartSnap.exists()) {
        cartItems = cartSnap.data().items;
      }

      // Check if item already exists in cart
      const existingItemIndex = cartItems.findIndex((i) => i.id === item.id);
      if (existingItemIndex !== -1) {
        cartItems[existingItemIndex].quantity += quantity;
      } else {
        cartItems.push({
          id: item.id,
          name: item.title,
          price: item.price || item.variants?.[0]?.price,
          quantity,
          imageUrl: item.images?.[0]?.src || item.imageUrl,
        });
      }

      // Save the updated cart in Firestore
      await setDoc(cartRef, { items: cartItems });
      console.log("Cart updated successfully!");
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  const rupeeSign = <FontAwesomeIcon icon={faIndianRupeeSign} />;

  return (
    <>
      <div className="p-4 sm:p-6 lg:p-8 pt-28 lg:pt-28 min-h-screen">
        <div className="paper-fold p-4 sm:p-5 flex flex-col lg:flex-row justify-between bg-blue-100 rounded-lg shadow-lg w-full">
          <div className="w-full lg:basis-2/5 mb-6 lg:mb-0 relative">
            <img
              className="rounded-2xl w-full h-auto"
              alt="item-img"
              src={
                item.images?.length > 0
                  ? item.images[0].src || item.imageUrl
                  : item.imageUrl || "default-image-url"
              }
            />
          </div>
          <div className="product-info w-full lg:basis-1/2 flex flex-col justify-between sm:py-10 lg:pr-40">
            <div className="flex-grow flex flex-col gap-4">
              <h1 className="font-medium text-cyan-700 text-2xl sm:text-3xl lg:text-4xl">
                {item.title}
              </h1>
              {item.rating_average || item.variants?.[0]?.position ? (
                <StarRating
                  rating={
                    Math.round(item.rating_average) ||
                    item.variants[0]?.position
                  }
                />
              ) : null}
              <h3 className="text-sm sm:text-lg italic">
                {item.description ? (
                  <DecodeDescription description={item.description} />
                ) : (
                  item.body_html && (
                    <DecodeDescription description={item.body_html} />
                  )
                )}
              </h3>
              <span className="text-[16px] sm:text-[20px] italic">
                {rupeeSign} {item.price || item.variants?.[0]?.price}
              </span>
            </div>
            <div className="pt-4 sm:pt-10 pb-4 lg:pb-10 flex items-center gap-14">
              <FontAwesomeIcon
                icon={faMinusSquare}
                fontSize={40}
                className="hover:text-gray-600 cursor-pointer"
                onClick={handleDecrease}
              />
              <span className="text-lg sm:text-xl">{quantity}</span>
              <FontAwesomeIcon
                icon={faPlusSquare}
                fontSize={40}
                className="hover:text-gray-600 cursor-pointer"
                onClick={handleIncrease}
              />
              <span className="text-[16px] sm:text-[20px]">
                {rupeeSign}{" "}
                {(item.price || item.variants?.[0]?.price) * quantity}
              </span>
            </div>
            <div>
              <button
                type="button"
                className="w-full sm:w-[154px] h-[47px] bg-transparent hover:bg-orange-900 text-orange-900 text-xl font-light hover:text-white border border-orange-900 hover:border-transparent rounded-full transition-transform transform hover:scale-105"
                onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyPage;
