import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageSlider from './ImageSlider';
import Products from './Products';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ImageSlider/>
      <Products/>
    </div>
  );
}

export default App;
