import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter your email address");
    }
    else {
      alert("Subscribed with email: " + email);
      setEmail("");
    }
  };

  return (
    <footer className="bg-blue-100/80 font-sans dark:bg-cyan-950">
      <div className="container px-4 py-8 mx-auto md:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="text-lg font-semibold text-gray-800 xl:text-xl dark:text-white">
              Subscribe to our newsletter for updates.
            </h1>
            <div className="flex flex-col mt-6 space-y-3 md:flex-row md:space-y-0">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                placeholder="Email Address"
                required
              />
              <button
                className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white bg-gray-800 rounded-lg md:w-auto md:mx-4 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                onClick={handleSubscribe}>
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Quick Links
            </p>
            <div className="mt-5 space-y-2">
              <p className="text-gray-600 hover:text-blue-500 cursor-pointer">
                Home
              </p>
              <p className="text-gray-600 hover:text-blue-500 cursor-pointer">
                Who We Are
              </p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Industries
            </p>
            <div className="mt-5 space-y-2">
              <p className="text-gray-600 hover:text-blue-500 cursor-pointer">
                Retail & E-Commerce
              </p>
              <p className="text-gray-600 hover:text-blue-500 cursor-pointer">
                Information Technology
              </p>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4 mb-4 sm:mb-0">
            <a href={"https://play.google.com/"} target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
                width="130"
                alt="Download on Google Play"
              />
            </a>
            <a href={"https://www.apple.com/in/app-store/"} target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                width="130"
                alt="Download on the App Store"
              />
            </a>
          </div>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61566411153922" target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                width="30"
                alt="Facebook"
              />
            </a>
            <a href={"https://www.instagram.com/mahipariha/"} target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                width="30"
                alt="Instagram"
              />
            </a>
            <a href={"https://github.com/Mahi0606"} target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.svgrepo.com/show/94698/github.svg"
                width="30"
                alt="GitHub"
              />
            </a>
          </div>
        </div>
        <p className="py-4 text-center text-gray-800 dark:text-gray-300">
          © 2024 Your Company Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
