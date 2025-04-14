import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Sale from './Pages/Sale';
import Tops from './Pages/Tops';
import Bottoms from './Pages/Bottoms';
import DetailsPage from './Pages/DetailsPage';
import Cart from './Pages/Cart';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/tops' element={<Tops/>}/>
            <Route path='/bottoms' element={<Bottoms/>}/>
            <Route path='/sale' element={<Sale/>}/>
            <Route path='/detailsPage' element={<DetailsPage/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
