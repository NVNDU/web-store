import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
