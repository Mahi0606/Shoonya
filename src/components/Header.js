import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCartShopping, faSearch, faUser,} from "@fortawesome/free-solid-svg-icons";
import shoonya from "../assets/shoonya.png";

const Header = () => {
  return (
    <>
      <div className="top-0 w-full z-10 h-5 bg-pink-800"></div>
      <div className="fixed top-5 w-full z-10 flex justify-between h-16 items-center bg-gradient-to-b from-black backdrop-blur-md">
        <a href="/"><img alt="logo" className="ml-10 w-40" src={shoonya} /></a>
        <ul className="flex m-5 mr-20 pt-2 space-x-20">
          <li className="cursor-pointer">
            <FontAwesomeIcon icon={faSearch} fontSize={25} />
          </li>
          <li className="cursor-pointer">About</li>
          <li>
            <a href="/sign-in" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faUser} fontSize={25} />
            </a>
          </li>
          <li className="cursor-pointer">
            <FontAwesomeIcon icon={faCartShopping} fontSize={25} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
