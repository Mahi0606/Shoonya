import React from "react";
import { motion } from "framer-motion";
import ItemCard from "./ItemCard";
import { filteredData } from "../utils/mockData";
import { Link } from "react-router-dom";

// Animation variants for sliding in from the left
const sectionVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const Body = () => {
  return (
    <div className="px-6 md:px-10 my-10">

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}>
        <div className="w-full h-16 md:h-20 flex justify-center items-center">
          <h2 className="text-2xl md:text-4xl font-bold relative">
            Popular Products
            <span className="block h-1 w-16 md:w-24 bg-orange-500 mt-2 mx-auto"></span>
          </h2>
        </div>
      </motion.div>


      <div className="mt-6 px-4 md:px-10">
        <div className="items-container flex flex-wrap gap-5 md:flex-nowrap md:overflow-x-auto scrollbar-hidden">
          {filteredData.map((item, index) => (
            <ItemCard
              key={item.id}
              id={item.id}
              imageUrl={item.imageUrl}
              productName={item.title}
              rating={item.rating_average}
              description={item.description}
              price={item.price}
              index={index} // Pass the index for staggered animation
            />
          ))}
        </div>
        <div className="mt-12 text-center">
        <Link
          to="/allProducts"
          className="inline-block px-8 py-3 text-lg font-semibold text-orange-500 border border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300">
          View All Products
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Body;
