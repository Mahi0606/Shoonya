import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faBagShopping,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import shoonya from "../assets/shoonya.png";
import { Link } from "react-router-dom";

const Header = ({ fixed1, isSignedIn, user, handleSignOut }) => {
  const [showDropdown, setShowDropdown] = useState(false); // Control dropdown visibility

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div
        className={`w-full z-10 h-5 bg-pink-800 flex text-white justify-center items-center ${
          fixed1 ? "fixed" : ""
        }`}>
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
          <li className="cursor-pointer">
            <FontAwesomeIcon icon={faSearch} fontSize={20} />
          </li>
          {!isSignedIn ? (
            <li className="cursor-pointer">
              <Link to="/sign-in">
                <FontAwesomeIcon icon={faUser} fontSize={20} />
              </Link>
            </li>
          ) : (
            <li className="relative cursor-pointer" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faUserCircle} fontSize={25} />
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
                  <div className="p-4">
                    <p className="font-bold">{user?.displayName}</p>
                    <p className="text-gray-600 text-sm">{user?.email}</p>
                  </div>
                  <div className="border-t border-gray-200"></div>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100"
                  >
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
