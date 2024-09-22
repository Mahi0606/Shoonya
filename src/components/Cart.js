import React from "react";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  // Dummy data for the cart items
  const cartItems = [
    {
      id: 1,
      name: "Product 1",
      imageUrl: "https://via.placeholder.com/150",
      price: 25.0,
      quantity: 2,
    },
    {
      id: 2,
      name: "Product 2",
      imageUrl: "https://via.placeholder.com/150",
      price: 15.0,
      quantity: 1,
    },
    {
        id: 1,
        name: "Product 1",
        imageUrl: "https://via.placeholder.com/150",
        price: 25.0,
        quantity: 2,
      },
      {
        id: 2,
        name: "Product 2",
        imageUrl: "https://via.placeholder.com/150",
        price: 15.0,
        quantity: 1,
      },
  ];

  const handleRemove = (id) => {
    // Logic to remove item from cart
    console.log(`Remove item with id: ${id}`);
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div>
      <Header fixed1={true}/>
      <div className=" min-h-screen p-8 pt-32">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-pink-800 mb-6">Your Cart</h1>
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center border-b py-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-24 h-24 object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-gray-600">
                      Price: <FontAwesomeIcon icon={faIndianRupee} />{" "}
                      {item.price.toFixed(2)}
                    </p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:text-red-700">
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </div>
              ))}
              <div className="flex justify-between mt-6 font-semibold text-gray-800">
                <span>Total:</span>
                <span>
                  <FontAwesomeIcon icon={faIndianRupee} /> {calculateTotal()}
                </span>
              </div>
              <button className="mt-4 w-full py-2 bg-pink-800 text-white font-semibold rounded-md hover:bg-pink-700">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
