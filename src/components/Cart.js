import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee, faMinusSquare, faPlusSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import { Link } from "react-router-dom";

const Cart = () => {
  const user = useSelector((state) => state.user.user);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      if (user) {
        const cartRef = doc(db, "carts", user.uid);
        const cartSnap = await getDoc(cartRef);
        if (cartSnap.exists()) {
          setCartItems(cartSnap.data().items);
        }
      }
    };
    fetchCartItems();
  }, [user]);

  const handleRemove = async (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);

    // Update Firestore with the updated cart
    const cartRef = doc(db, "carts", user.uid);
    await updateDoc(cartRef, { items: updatedItems });
  };

  const handleIncrease = async (item) => {
    const updatedItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        cartItem.quantity += 1; // Increase quantity
      }
      return cartItem;
    });
    setCartItems(updatedItems);

    // Update Firestore with the updated cart
    const cartRef = doc(db, "carts", user.uid);
    await updateDoc(cartRef, { items: updatedItems });
  };

  const handleDecrease = async (item) => {
    const updatedItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id && cartItem.quantity > 1) {
        cartItem.quantity -= 1; // Decrease quantity
      }
      return cartItem;
    });
    setCartItems(updatedItems);

    // Update Firestore with the updated cart
    const cartRef = doc(db, "carts", user.uid);
    await updateDoc(cartRef, { items: updatedItems });
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div>
      <div className="min-h-screen p-8 pt-32">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-pink-800 mb-6">Your Cart</h1>
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center border-b py-4">
                  <Link to={`/buy-page/${item.id}`}>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-24 h-24 object-cover mr-4"
                    />
                  </Link>
                  <div className="flex-1">
                    <Link to={`/buy-page/${item.id}`}>
                      <h2 className="text-xl font-semibold text-gray-800">
                        {item.name}
                      </h2>
                    </Link>
                    <p className="text-gray-600">
                      Price: <FontAwesomeIcon icon={faIndianRupee} />{" "}
                      {item.price}
                    </p>
                    <div className="flex items-center">
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                      <FontAwesomeIcon
                        icon={faMinusSquare}
                        fontSize={18}
                        className="ml-2 cursor-pointer"
                        onClick={() => handleDecrease(item)}
                      />
                      <FontAwesomeIcon
                        icon={faPlusSquare}
                        fontSize={18}
                        className="ml-2 cursor-pointer"
                        onClick={() => handleIncrease(item)}
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
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
