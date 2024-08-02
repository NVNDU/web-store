import React from 'react'
import ImageSlider from './ImageSlider';
import Products from './Products';
import NewArrivals from './NewArrivals';
import Banner from './Banner';
import Footer from './Footer';
import NavBar from './NavBar';

function Home() {
  return (
    <>
      <NavBar/>
      <ImageSlider/>
      <NewArrivals/>
      <Products/>
      <Banner/>
      <Footer/>
    </>
  )
}

export default Home