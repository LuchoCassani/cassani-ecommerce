import React, {useState} from 'react';
import logo from "../../imagenes/logo.svg"
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'



const Menu = () =>{
    return(
      <>
        <Navbar expand="lg">
          <Container fluid >
          <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="React Bootstrap logo"
          />
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse className="justify-content-around" id="navbarScroll">
              <Nav
                className=" nav.links d-flex justify-content-center"
                style={{ maxHeight: '100%' }}
                navbarScroll>
                <Nav.Link className="m-4" href="#action1">Home</Nav.Link>
                <Nav.Link className="m-4"  href="#action2">Zapatillas</Nav.Link>
                <Nav.Link className="m-4" href="#action2">Indumentaria</Nav.Link>
                <Nav.Link className="m-4" href="#action2">Accesorios</Nav.Link>
                <Nav.Link className="m-4" href="#action2">Contacto</Nav.Link>
              </Nav>
              </Navbar.Collapse>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button className="me-4" variant="outline-success">Search</Button>
              </Form>
            
          </Container>
        </Navbar>
  
      </>  

    )
}

export default Menu;

