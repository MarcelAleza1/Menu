import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function CustomNavbar() {
  return (
    <>
      <Navbar collapseOnSelect fixed='top' bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>


          <Nav className="justify-content-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">login</Nav.Link>
            <Nav.Link href="/sign-up">Sign Up</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">login</Nav.Link>
            <Nav.Link href="/sign-up">Sign Up</Nav.Link>
          </Nav>

        </Container>
      </Navbar>
    </>
  )
}

export default CustomNavbar