import React ,{Child}from 'react';
import {  BrowserRouter, Route, NavLink, useParams, Switch } from 'react-router-dom';
import logo from "../../imagenes/logo.svg"
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'





const Menu = () =>{

  




    return(
      <>
        <Navbar expand="lg">
          <Container fluid >
          <Navbar.Brand className="m-4 active" href="#home">
          <img
            src={logo}
            alt="React Bootstrap logo"
          />
          </Navbar.Brand>
          <BrowserRouter>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse className="justify-content-around" id="navbarScroll">
              <Nav
                className=" nav.links d-flex justify-content-center"
                style={{ maxHeight: '100%' }}
                navbarScroll>
                <NavLink className="m-4" to="#">Home</NavLink>
                <NavLink className="m-4" to="./Zapatillas.jsx">Zapatillas</NavLink>
                <NavLink className="m-4" to="./Indumentaria.jsx">Indumentaria</NavLink>
                <NavLink className="m-4" to="./Accesorios.jsx">Accesorios</NavLink>
                <NavLink className="m-4" to="./Contacto.jsx">Contacto</NavLink>
              </Nav>
              </Navbar.Collapse>
              </BrowserRouter>
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

