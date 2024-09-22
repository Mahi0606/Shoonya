import React from 'react'

const ImageBannerContainer = () => {
  return (
    <div className='flex pt-[80px] w-full h-[400px] md:h-[550px] lg:h-[750px]'>
        <img
            className='w-full rounded-md'
            alt='image-banner'
            src='https://bombaysweetshop.com/cdn/shop/files/Homepage_Desktop_Banner-1_1.jpg'        
        ></img>
    </div>
  )
}

export default ImageBannerContainer;
