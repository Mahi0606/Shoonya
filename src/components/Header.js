import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBagShopping,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import shoonya from "../assets/shoonya.png";
import { Link } from "react-router-dom";
import { allProducts } from "../utils/mockData";

const Header = ({ isSignedIn, user, handleSignOut }) => {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);


  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filtered = allProducts.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
    setShowSearchDropdown(value.length > 0);
  };

  return (
    <>
      <div
        className={
          "w-full z-10 h-5 bg-pink-800 flex text-white justify-center items-center"
        }>
        Welcome to Shoonya Natural Foods !!
      </div>
      <div
        className={
          "fixed top-5 w-full z-10 flex justify-between items-center bg-white h-14 pr-4 md:pr-6 shadow-md"
        }>
        <Link to="/">
          <img alt="logo" className="w-28 md:w-32 lg:w-40" src={shoonya} />
        </Link>

        <ul className="flex space-x-8 md:space-x-8 lg:space-x-14 mr-2 lg:mr-8 items-center">
          <li className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="border border-gray-300 rounded-md px-4 py-2 w-48 lg:w-56 focus:outline-none focus:ring focus:ring-pink-500 transition duration-200"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {showSearchDropdown && (
              <div className="absolute left-0 top-10 w-80 bg-white border border-gray-300 rounded-lg shadow-xl max-h-60 overflow-y-auto p-4 z-50 transition-transform transform scale-y-100 opacity-100">
                {allProducts.length > 0 ? (
                  allProducts.map((product) => (
                    <Link
                      to={`/buy-page/${product.id}`}
                      key={product.id}
                      className="flex items-center p-3 hover:bg-pink-100 transition duration-200"
                      onClick={() => {
                        setSearchTerm(""); // Clear the search input
                        setShowSearchDropdown(false); // Hide the dropdown
                      }}>
                      <img
                        src={product.images ? product.images[0]?.src || product.imageUrl : product.imageUrl}
                        alt={product.title}
                        className="w-12 h-12 mr-3 rounded"
                      />
                      <span className="text-md">{product.title}</span>
                    </Link>
                  ))
                ) : (
                  <div className="p-3 text-gray-500">No results found</div>
                )}
              </div>
            )}
          </li>
          {!isSignedIn ? (
            <li className="cursor-pointer">
              <Link to="/sign-in">
                <FontAwesomeIcon icon={faUser} fontSize={20} />
              </Link>
            </li>
          ) : (
            <li
              className="relative cursor-pointer"
              onClick={toggleUserDropdown}>
              <FontAwesomeIcon icon={faUserCircle} fontSize={25} />
              {showUserDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg transition-transform transform scale-y-100 opacity-100">
                  <div className="p-4">
                    <p className="font-bold text-lg">{user?.displayName}</p>
                    <p className="text-gray-600 text-sm">{user?.email}</p>
                  </div>
                  <div className="border-t border-gray-200"></div>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100 transition duration-200">
                    Sign Out
                  </button>
                </div>
              )}
            </li>
          )}
          <li className="cursor-pointer">
            <Link to="/cart">
              <FontAwesomeIcon icon={faBagShopping} fontSize={20} />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
