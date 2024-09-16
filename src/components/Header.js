import React from "react";
import { LOGO_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <div
        className="fixed top-0 w-full z-10 h-5 bg-pink-800"
      ></div>
      <div
        className="fixed top-5 w-full z-10 flex justify-between"
      >
        <img alt="logo" className="ml-10 w-40 cursor-pointer" src={LOGO_URL} />
        <ul className="flex m-5 mr-20 pt-2 space-x-20">
          <li className="cursor-pointer">
            <FontAwesomeIcon icon={faSearch} fontSize={25} />
          </li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer flex">
            <FontAwesomeIcon icon={faUser} fontSize={25} />
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
