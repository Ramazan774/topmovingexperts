import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container, Col } from 'react-bootstrap';
import image from "./logos/logo.png";
 
const NavBar = () => {
    return (
        <Navbar>  
            <Container>
                    <Col className="col-auto">
                        <Navbar.Brand>
                                <img src={image} height='40' alt='' loading='lazy' padding="10px"/> 
                        </Navbar.Brand>  
                    </Col>
                    <Col className="col-auto">
                        <Nav.Link href="#home" target="_blank" style={{color:"black", display:""}}>
                            Home
                        </Nav.Link>
                    </Col>           
            </Container>      
        </Navbar>
    )
}

export default NavBar;