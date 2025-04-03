import React from "react";

const LoadingPage = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-pink-50">
      <div className="relative flex flex-col items-center">
        {/* Rotating loader */}
        <div className="relative w-40 h-40 animate-spin rounded-full border-8 border-t-pink-400 border-pink-200">
          {/* Floating sweets */}
          <div className="absolute top-[-30px] left-[60px] w-10 h-10 bg-[url('https://cdn-icons-png.flaticon.com/512/1019/1019703.png')] bg-cover rounded-full animate-bounce"></div>
          <div className="absolute top-[60px] left-[150px] w-10 h-10 bg-[url('https://cdn-icons-png.flaticon.com/512/1019/1019732.png')] bg-cover rounded-full animate-bounce delay-150"></div>
          <div className="absolute top-[100px] left-[30px] w-10 h-10 bg-[url('https://cdn-icons-png.flaticon.com/512/1046/1046757.png')] bg-cover rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-[-10px] left-[110px] w-10 h-10 bg-[url('https://cdn-icons-png.flaticon.com/512/2110/2110076.png')] bg-cover rounded-full animate-bounce delay-450"></div>
        </div>
        {/* Loading Text */}
        <h1 className="mt-4 text-xl font-bold text-pink-600 animate-pulse">
          Loading Sweetness...
        </h1>
      </div>
    </div>
  );
};

export default LoadingPage;
