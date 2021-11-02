import React from 'react';
import {  NavLink} from 'react-router-dom';
import logo from "../../imagenes/logo.svg"
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'





const Menu = () =>{
  

    return(
      <>
        <Navbar expand="lg">
          <Container fluid >
            <Navbar.Brand className="m-4 active" href="/">
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
                  <NavLink activeClassName="active" className="m-2 nav-link" to="/">Home</NavLink>
                  <NavLink activeClassName="active" className="m-2 nav-link" to={`/category/Zapatillas`}>Zapatillas</NavLink>
                  <NavLink activeClassName="active" className="m-2 nav-link" to={`/category/Indumentaria`}>Indumentaria</NavLink>
                  <NavLink activeClassName="active" className="m-2 nav-link" to={`/category/Accesorios`}>Accesorios</NavLink>
                  <NavLink activeClassName="active" className="m-2 nav-link" to={`/category/Contacto`}>Contacto</NavLink>
                </Nav>
                </Navbar.Collapse>
                
                <Form className="container-fluid">
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

