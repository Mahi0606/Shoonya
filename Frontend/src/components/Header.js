import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faChevronDown,
  faSearch,
  faUser,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import shoonya from "../assets/shoonya1.png";
import { Link } from "react-router-dom";
import { allProducts } from "../utils/mockData";

const Header = ({ user, handleSignOut }) => {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const userDropdownRef = useRef(null);
  const searchDropdownRef = useRef(null);
  const menuRef = useRef(null);

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length === 0) {
      setShowSearchDropdown(false);
      return;
    }

    setLoading(true);
    const filtered = allProducts.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredProducts(filtered);
    setShowSearchDropdown(true);
    setLoading(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setShowUserDropdown(false);
      }
      if (
        searchDropdownRef.current &&
        !searchDropdownRef.current.contains(event.target)
      ) {
        setShowSearchDropdown(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full z-30 bg-white px-4 md:px-20 lg:px-32 py-2 shadow-sm border-b-2 border-gray-300 transition-all duration-300 ease-in-out">
        <div className="flex justify-between items-center">
          <div className=" flex gap-x-4">
            <button onClick={toggleMenu} className="text-gray-700 md:hidden">
              <FontAwesomeIcon
                icon={isMenuOpen ? faTimes : faBars}
                fontSize={20}
              />
            </button>
            <Link to="/">
              <img alt="logo" className="w-36" src={shoonya} />
            </Link>
          </div>

          <div className="relative w-1/2 hidden md:block">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <input
                type="text"
                placeholder="Search..."
                className="border-none rounded-l-lg px-4 py-2 w-full focus:outline-none"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button className="bg-gray-800 text-white p-3 rounded-r-lg transition duration-300 ease-in-out hover:bg-gray-700">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>

            {/* Search Dropdown */}
            {showSearchDropdown && (
              <div
                className="absolute left-0 top-full w-full bg-white border border-gray-300 rounded-lg shadow-xl z-40 transition-all duration-300 ease-in-out"
                ref={searchDropdownRef}
              >
                {loading ? (
                  <div className="p-3 text-gray-500 text-center">
                    Loading...
                  </div>
                ) : filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <Link
                      to={`/buy-page/${product.id}`}
                      key={product.id}
                      className="flex items-center p-3 hover:bg-gray-100 transition duration-200"
                      onClick={() => {
                        setSearchTerm("");
                        setShowSearchDropdown(false);
                      }}
                    >
                      <img
                        src={
                          product.images
                            ? product.images[0].src || product.imageUrl
                            : product.imageUrl
                        }
                        alt={product.title}
                        className="w-12 h-12 mr-3 rounded"
                      />
                      <span className="text-sm">{product.title}</span>
                    </Link>
                  ))
                ) : (
                  <div className="p-3 text-gray-500 text-center">
                    No results found
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Account and Cart */}
          <ul className="flex space-x-8 items-center">
            {!user ? (
              <li>
                <Link to="/sign-in" className="text-lg text-gray-700">
                  Login / Signup
                </Link>
              </li>
            ) : (
              <li
                className="relative"
                onClick={toggleUserDropdown}
                ref={userDropdownRef}
              >
                <span className="font-medium text-gray-700 cursor-pointer md:flex space-x-2 hidden">
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={[
                      showUserDropdown ? "rotate-180" : "",
                      "transition-all duration-500 ease-in-out",
                    ].join(" ")}
                  />
                  <FontAwesomeIcon icon={faUser} />
                  <span>My Profile</span>
                </span>
                {showUserDropdown && (
                  <div className="absolute z-10 right-0 top-full mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg transition-transform duration-300 ease-in-out">
                    <div className="p-4">
                      <p className="font-bold text-lg">{user?.displayName}</p>
                      <p className="text-gray-600 text-sm">{user?.email}</p>
                    </div>
                    <div className="border-t border-gray-200"></div>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100 transition duration-200"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </li>
            )}
            <li>
              <Link to="/cart" className="text-gray-700">
                <FontAwesomeIcon icon={faBagShopping} fontSize={20} />
              </Link>
            </li>
          </ul>
        </div>

        {/* Navigation Links */}
        <ul
          ref={menuRef}
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex justify-start items-center md:gap-8 lg:gap-16 text-gray-700 text-sm mt-6`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bestsellers">Bestsellers</Link>
          </li>
          <li>
            <Link to="/new-launches">New Launches</Link>
          </li>
          <li>
            <Link to="/snacks">Healthy Yummy Snacking</Link>
          </li>
          <li>
            <Link to="/exotic">Exotic Range</Link>
          </li>
          <li>
            <Link to="/combos">Combos</Link>
          </li>
          <li>
            <Link to="/bulk-orders">Bulk Orders</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
