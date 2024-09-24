import React, { useState, useEffect } from "react";
import DecodeDescription from "../utils/DecodeDescription";
import { allProducts } from "../utils/mockData";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  // Get the minimum and maximum price from the products
  const productPrices = allProducts.map((product) =>
    parseFloat(product.price || product.variants?.[0]?.price || 0)
  );
  const minProductPrice = Math.min(...productPrices);
  const maxProductPrice = Math.max(...productPrices);

  // Update filtered products based on search term and price range
  useEffect(() => {
    const filtered = allProducts.filter((product) => {
      const productPrice = parseFloat(
        product.price || product.variants?.[0]?.price || 0
      );
      const matchesSearch =
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.body_html?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice =
        productPrice >= priceRange[0] && productPrice <= priceRange[1];
      return matchesSearch && matchesPrice;
    });
    setFilteredProducts(filtered);
  }, [searchTerm, priceRange]);

  // Handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle price range change
  const handlePriceChange = (e, type) => {
    const value = parseFloat(e.target.value);
    setPriceRange((prevRange) => {
      if (type === "min") {
        return [Math.min(value, priceRange[1]), priceRange[1]];
      } else {
        return [priceRange[0], Math.max(value, priceRange[0])];
      }
    });
  };

  return (
    <div className="container mx-auto py-12 px-6 md:px-16 lg:px-18 pt-28 bg-gradient-to-b from-pink-50 via-white to-pink-100">
      <h1 className="text-4xl font-extrabold text-center text-pink-600 mb-12">
        All Sweets
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search for sweets..."
          className="w-full md:w-2/3 lg:w-1/2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-pink-300 transition"
        />
      </div>

      {/* Price Range Filter */}
      <div className="flex justify-center items-center space-x-6 mb-10">
        <div className="flex flex-col items-center">
          <label className="font-semibold text-lg text-pink-600">
            Min Price: ₹{priceRange[0]}
          </label>
          <input
            type="range"
            min={minProductPrice}
            max={maxProductPrice}
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(e, "min")}
            className="w-48 mt-2"
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="font-semibold text-lg text-pink-600">
            Max Price: ₹{priceRange[1]}
          </label>
          <input
            type="range"
            min={minProductPrice}
            max={maxProductPrice}
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e, "max")}
            className="w-48 mt-2"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl bg-white">
              <img
                src={
                  product.images
                    ? product.images[0]?.src || product.imageUrl
                    : product.imageUrl
                }
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="font-bold text-xl text-gray-800 truncate">
                  {product.title}
                </h2>
                <p className="text-gray-600 text-sm mt-2 h-16 overflow-hidden">
                  {product.description ? (
                    <DecodeDescription description={product.description} />
                  ) : (
                    product.body_html && (
                      <DecodeDescription description={product.body_html} />
                    )
                  )}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold text-lg text-pink-600">
                    ₹{product.price || product.variants?.[0]?.price}
                  </span>
                  <Link to={`/buy-page/${product.id}`}>
                    <button className="bg-pink-600 text-white py-2 px-5 rounded-full transition hover:bg-pink-700">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
