import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './Assets/logo.png';
import { Badge } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import MailIcon from '@mui/icons-material/Mail';
import Form from 'react-bootstrap/Form';
import './NavBar.module.css'

function NavBar() {
   const {
      isEmpty,
      totalUniqueItems,
      items,
      updateItemQuantity,
      removeItem,
      cartTotal,
      emptyCart,
      totalItems
    } = useCart();
  return (
    <Navbar expand="lg" className="navbar">
      <Container className='navbar-container col-lg-12'>
        <img src={logo} style={{height : "40px", width : "40px", marginRight :"20px"}}/>
        <Navbar.Brand href="/">More and More</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown title="Products" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Tops</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Bottoms</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Sales</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/contact">Contact</Nav.Link>
        
        </Nav>
        <div className="d-flex">
        <Nav.Link href="/cart">
            <i class="bi bi-cart3 cart-container">
              {(totalItems > 0 )?<i> {totalItems}</i> : null}
            </i>
        </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;