import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AppNavbar() {
  return (

    <Navbar bg="dark" variant="dark">
      <link rel="stylesheet" href="../../public/style.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>


      <Navbar.Brand as={Link} to="/">Modern Movie Portal</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/movies/new">Add Movie</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>

      </Nav>
    
    </Navbar>
  )
}

export default AppNavbar