// Success.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-6xl mb-4" />
        <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
        <p className="text-gray-700 mb-4">Thank you for your purchase. Your order is on its way!</p>
        <Link to="/" className="text-pink-600 hover:text-pink-700 font-semibold">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default Success;
