import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='navbar-container'>
        <Navbar.Brand href="/">More and More</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Bras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Panties</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Linegerie</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action/3.4">Sleep</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Sport & Lounge</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Swim</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Beauty</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Accessories</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#link">About</Nav.Link> */}
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;