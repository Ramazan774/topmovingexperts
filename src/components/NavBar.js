import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import image from "./logos/logo.ico";
 
const NavBar = () => {
    return (
        
            <Navbar style={{backgroundColor: "#fff", zIndex: 1000 }}>  
                <Container>
                    <Navbar.Brand className="d-flex justify-content-center align-items-center">
                        <div className="d-flex align-items-center">
                            <img src={image} height='50' alt='' loading='lazy' className="mr-2"/>   
                       </div>
                   </Navbar.Brand>
                </Container>      
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav>
                        <Nav.Link href="#home" target="_blank" style={{color:"black"}} className="col-md-5">
                            Home
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        
    )
}

export default NavBar;