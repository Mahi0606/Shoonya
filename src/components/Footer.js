import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-100/80 font-sans dark:bg-cyan-950">
      <div className="container px-4 py-8 mx-auto md:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="text-lg font-semibold text-gray-800 xl:text-xl dark:text-white">
              Subscribe to our newsletter to get updates.
            </h1>
            <div className="flex flex-col mt-6 space-y-3 md:flex-row md:space-y-0">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                placeholder="Email Address"
              />
              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white bg-gray-800 rounded-lg md:w-auto md:mx-4 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>
            <div className="mt-5 space-y-2">
              <p className="text-gray-600 hover:text-blue-500">Home</p>
              <p className="text-gray-600 hover:text-blue-500">Who We Are</p>
              <p className="text-gray-600 hover:text-blue-500">Our Philosophy</p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-800 dark:text-white">Industries</p>
            <div className="mt-5 space-y-2">
              <p className="text-gray-600 hover:text-blue-500">Retail & E-Commerce</p>
              <p className="text-gray-600 hover:text-blue-500">Information Technology</p>
              <p className="text-gray-600 hover:text-blue-500">Finance & Insurance</p>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" width="130" alt="" />
            <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" width="130" alt="" />
          </div>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" alt="fb" />
            <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" alt="tw" />
            <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" alt="inst" />
            <img src="https://www.svgrepo.com/show/94698/github.svg" width="30" alt="gt" />
          </div>
        </div>
        <p className="py-4 text-center text-gray-800 dark:text-gray-300">
          © 2024 Your Company Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
