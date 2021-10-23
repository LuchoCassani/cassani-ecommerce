import React, {useState} from 'react';
import CartWidjet from '../CartWidjet/CartWidjet';
import { IoIosSearch } from "react-icons/io";
import logo from "../../imagenes/logo.svg"
import { Nav, Navbar,  } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'



const Menu = () =>{
    return(
      <>
  <Navbar collapseOnSelect expand="md">
    <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <img src={logo} alt="logo" />
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Zapatillaas</Nav.Link>
            <Nav.Link href="#pricing">Indumentaria</Nav.Link>
            <Nav.Link href="#pricing">Accesorios</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <input type="text" placeholder="Buscar..."/> 
        <button> <IoIosSearch/> </button>
        <CartWidjet/>
        
    </Container>
  </Navbar>
</>  

    )
}

export default Menu;

