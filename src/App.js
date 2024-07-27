import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageSlider from './ImageSlider';
import Products from './Products';
import NewArrivals from './NewArrivals';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ImageSlider/>
      <NewArrivals/>
      <Products/>
    </div>
  );
}

export default App;
