import React from 'react'
import ImageSlider from '../Resources/ImageSlider';
import Products from '../Resources/Products';
import NewArrivals from '../Resources/NewArrivals';
import Banner from '../Resources/Banner';
import Footer from '../Resources/Footer';
import NavBar from '../Resources/NavBar';

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