import React from 'react';
import {  NavLink} from 'react-router-dom';
import logo from "../../imagenes/logo.svg"
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'





const Menu = () =>{
  

    return(
      <>

<nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">40x20 Handball-Store</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Carrito</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
            </ul>
            <div className="buttons">
              <a href="" className="btn btn-outline-dark">
              <i className="fa fa-sign-in me-1" ></i>Login</a>
              <a href="" className="btn btn-outline-dark ms-2">
              <i className="fa fa-user-plus me-1" ></i>Registrarse</a>
              <a href="" className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart me-1" ></i>Carrito (0)</a>
              
            </div>
          </div>
        </div>
      </nav>





        {/* <Navbar expand="lg">
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
        </Navbar> */}

        
  
      </>  

    )
}

export default Menu;

