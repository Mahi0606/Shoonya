import React from 'react'
import Header from "./Header";
import ImageBannerContainer from "./ImageBannerContainer";
import Body from './Body';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
        <Header />
        <ImageBannerContainer />
        <Body />
        <Footer />
    </div>
  )
}

export default Home