import { Nav, Container, NavDropdown, Dropdown, Navbar } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";
import { MyNavbar, MyNavLink, MyNav, SmallNavLink, MyItem, ColorFour, ColorThree, SmallNav } from "./Styles";
import home from "../images/home.png"
import about from "../images/about.png"
import skills from "../images/skills.png"
import project from "../images/project.png"
import contact from "../images/contact.png"
import arrow from "../images/arrow.png"

const NavBar = () => {

    const navigate = useNavigate();

    const handleSelect = (eventKey) => {
        navigate(eventKey);
      };
    
return (
    <MyNavbar collapseOnSelect expand="sm" bg="light" variant="dark">
        <Container>
        <MyNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <MyNavbar.Collapse id="responsive-navbar-nav">
        <MyNav className = "me-auto" onSelect={handleSelect}>
            <MyNavLink eventKey="/">
                <img style={{height:"2rem", marginTop:"1.6rem"}} src={home}/>
                <p style={{fontSize:"1rem", marginTop:"-.1rem", textDecoration:"none"}}>Home</p>
            </MyNavLink>
            <MyNavLink eventKey="/about">
                <img style={{height:"2rem", marginTop:"1.6rem"}} src={about}/>
                <p style={{fontSize:"1rem", marginTop:"-.1rem"}}>About</p>
            </MyNavLink>
            <MyNavLink eventKey="/skills">
                <img style={{height:"2rem", marginTop:"1.4rem"}} src={skills}/>
                <p style={{fontSize:"1rem", marginTop:"-.01rem", marginLeft:".2rem"}}>Skills</p>
            </MyNavLink>
            <MyNavLink eventKey="/projects">
                <img style={{height:"2rem", marginTop:"1.6rem"}} src={project}/>
                <p style={{fontSize:"1rem", marginTop:"-.1rem"}}>My Work</p>
            </MyNavLink>
            <MyNavLink eventKey="/contact">
                <img style={{height:"2rem", marginTop:"1.6rem"}} src={contact}/>
                <p style={{fontSize:"1rem", marginTop:"-.1rem"}}>Contact Me</p>
            </MyNavLink>
        </MyNav>
        </MyNavbar.Collapse>
        </Container>
    </MyNavbar>
)
}

export default NavBar;


