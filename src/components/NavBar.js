import { Nav, Container } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";
import { MyNavbar, MyNavLink, MyNav } from "./Styles";

const NavBar = () => {

    const navigate = useNavigate();

    const handleSelect = (eventKey) => {
        navigate(eventKey);
      };
    
return (
    <>
    <MyNavbar>
        <MyNav onSelect={handleSelect}>
            <MyNavLink eventKey="/">
                Home
            </MyNavLink>
            <MyNavLink eventKey="/about">
                About
            </MyNavLink>
            <MyNavLink eventKey="/skills">
                Skills
            </MyNavLink>
            <MyNavLink eventKey="/projects">
                Projects
            </MyNavLink>
            <MyNavLink eventKey="/contact">
                Contact
            </MyNavLink>
        </MyNav>
    </MyNavbar>
</>
)
}

export default NavBar;