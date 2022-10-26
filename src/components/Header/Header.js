import logo from '../../images/logo.png';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'


const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='fixed-top'>
      <Container>
        <Navbar.Brand className='brand' href="#home"> <img src={logo} alt="" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>            
            <Nav.Link href="#">Order</Nav.Link>
            <Nav.Link href="#">Order Review</Nav.Link>
            <Nav.Link href="#">Manage Inventory</Nav.Link>
            <Nav.Link href="#">Login</Nav.Link>
            <Nav.Link href="#">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Header;