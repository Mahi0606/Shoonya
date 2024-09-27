// PaymentModal.js
import React from "react";

const PaymentModal = ({ isOpen, onClose, total, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-11/12 md:w-1/3">
        <h2 className="text-xl font-bold text-center mb-4">Confirm Payment</h2>
        <p className="text-gray-700 text-center mb-4">
          Your total is: <span className="font-bold">₹{total}</span>
        </p>
        <p className="text-gray-600 text-center mb-6">
          Please confirm your payment to proceed.
        </p>
        <div className="flex justify-around">
          <button
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
