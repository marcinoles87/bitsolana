import React from 'react'
// import '../App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navig() {
  return (
  
          <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Tockenize</Nav.Link>
            <Nav.Link href="#pricing">How to Buy</Nav.Link>
            <Nav.Link href="#pricing">Telegram</Nav.Link>
            <Nav.Link href="#pricing">Chart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

  
  )
}

export default Navig