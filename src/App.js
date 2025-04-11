import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Panties from './Pages/Bottoms';
import Sale from './Pages/Sale';
import Beauty from './Pages/Beauty';
import Tops from './Pages/Tops';
import Bottoms from './Pages/Bottoms';
import DetailsPage from './Pages/DetailsPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/tops' element={<Tops/>}/>
          <Route path='/bottoms' element={<Bottoms/>}/>
          <Route path='/sale' element={<Sale/>}/>
          <Route path='/detailsPage' element={<DetailsPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
