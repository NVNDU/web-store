import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageSlider from './ImageSlider';
import Products from './Products';
import NewArrivals from './NewArrivals';
import Banner from './Banner';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ImageSlider/>
      <NewArrivals/>
      <Products/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
