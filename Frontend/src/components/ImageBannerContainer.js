import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ImageBannerContainer = () => {
  const banners = [
    [7962482966777,'https://bombaysweetshop.com/cdn/shop/files/Homepage_Desktop_Banner-1_1.jpg'],
    [2813472, 'https://bombaysweetshop.com/cdn/shop/files/Indie_Bar_-_Desktop_Banner.gif?v=1695965015&width=1500'],
    [8499812532473, 'https://dadus.co.in/cdn/shop/files/Desktop_-_Banner2_71c1d5f1-6e79-466b-98a4-0fe0b6eacb67.jpg?v=1691074823&width=2800']
  ];

  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className='relative flex pt-[80px] w-full h-[400px] md:h-[550px] lg:h-[750px] overflow-hidden'>
      <img
        className='w-full h-full object-cover lg:object-fill rounded-md transition-opacity duration-1000 ease-in-out'
        alt='image-banner'
        src={banners[currentBannerIndex][1]}        
      />
      <div className="absolute pb-20 pl-14 right-0 h-full w-[200px] lg:w-[300px] flex items-center  bg-gradient-to-l from-black opacity-0 hover:opacity-90">
        <Link to={`/buy-page/${banners[currentBannerIndex][0]}`}>
          <button className='text-white font-semibold py-4 px-5 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 bg-pink-700'>
            Shop Now
          </button>
        </Link>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full cursor-pointer ${currentBannerIndex === index ? 'bg-pink-800' : 'bg-gray-300'}`}
            onClick={() => setCurrentBannerIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageBannerContainer;
