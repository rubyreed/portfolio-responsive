import { Nav, Navbar, Container } from "react-bootstrap";
import React from "react";
import {useNavigate} from "react-router-dom";

const NavBar = () => {

    const navigate = useNavigate();

    const handleSelect = (eventKey) => {
        navigate(eventKey);
      };
    
return (
    <>
<Navbar>
    <Container>
        <Nav onSelect={handleSelect}>
            <Nav.Link eventKey="/">
                Home
            </Nav.Link>
            <Nav.Link eventKey="/about">
                About
            </Nav.Link>
            <Nav.Link eventKey="/skills">
                Skills
            </Nav.Link>
            <Nav.Link eventKey="/projects">
                Projects
            </Nav.Link>
            <Nav.Link eventKey="/contact">
                Contact
            </Nav.Link>
        </Nav>
    </Container>
</Navbar>
</>
)
}

export default NavBar;