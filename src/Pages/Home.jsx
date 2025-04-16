import React from 'react'
import ImageSlider from '../Modules/ImageSlider';
import Products from '../Modules/Products';
import NewArrivals from '../Modules/NewArrivals';
import Banner from '../Modules/Banner';
import Footer from '../Modules/Footer';
import NavBar from '../Modules/NavBar';
import About from './About';

function Home() {
  return (
    <>
      <NavBar/>
      <ImageSlider/>
      <NewArrivals/>
      <Products/>
      <Banner/>
      {/* <About/> */}
      <Footer/>
    </>
  )
}

export default Home