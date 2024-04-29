import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import SearchBox from "./SearchBox";
 
const NavBar = () => {
    return (
        <div>
            <Navbar style={{
                backgroundColor: "#fff"
            }}>
                <img
              src='/favorite.ico'
              height='50'
              alt=''
              loading='lazy'
            />
                <Navbar.Brand href="#home" style={{fontFamily:"Baufra", color:"black", marginLeft:"10px"}}>Top Moving Experts</Navbar.Brand>
                <Form href="#search" style={{color:"black", marginLeft:"500px"}}>
                    <SearchBox />
                </Form>
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
                    <Nav>
                        <Nav.Link href="https://lfgo.at/" target="_blank" style={{color:"black"}}>
                            Long Distance Moving
                        </Nav.Link>
                        <Nav.Link href="https://lfgo.at/" target="_blank" style={{color:"black"}}>
                            Auto Shipping
                        </Nav.Link>
                        <Nav.Link href="https://lfgo.at/" target="_blank" style={{color:"black"}}>
                            Placeholder text
                        </Nav.Link>
                        <Nav.Link href="https://lfgo.at/" target="_blank" style={{color:"black"}}>
                            Placeholder text
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;