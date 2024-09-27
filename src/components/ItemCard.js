import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import StarRating from "../utils/StarRating";
import DecodeDescription from "../utils/DecodeDescription";

// Animation variants for sliding in from the left
const cardVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const ItemCard = (props) => {
  const { id, imageUrl, productName, rating, description, price, index } =
    props;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={cardVariants}
      transition={{ delay: index * 0.1 }}
      className="item-card flex flex-col min-w-[280px] sm:min-w-[340px] md:min-w-[360px] lg:min-w-[380px] xl:min-w-[400px] p-4 justify-between"
      >

        
      <Link to={`/buy-page/${id}`}>
        <div>
          <img
            className="h-[300px] sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[536px] w-full object-cover rounded-3xl"
            alt="item-image"
            src={imageUrl}
          />
          <div className="flex flex-col mt-4 space-y-2 list-none">
            <li className="item-name font-medium text-md sm:text-lg md:text-xl">
              {productName}
            </li>
            <li className="item-price text-sm sm:text-md md:text-lg">
              Starting Rs. {price}
            </li>
            <li>
              {rating != null ? (
                <StarRating rating={Math.round(rating)} />
              ) : null}
            </li>
            <li className="font-light text-sm sm:text-md md:text-lg">
              <DecodeDescription description={description} />
            </li>
          </div>
        </div>
      </Link>

      <Link to={`/buy-page/${id}`} className="mt-4">
        <button
          type="button"
          className="w-full sm:w-[154px] h-[40px] sm:h-[47px] bg-transparent hover:bg-orange-900 text-orange-900 text-sm sm:text-lg font-light hover:text-white border border-orange-900 hover:border-transparent rounded-full">
          Shop Now
        </button>
      </Link>
    </motion.div>
  );
};

export default ItemCard;
