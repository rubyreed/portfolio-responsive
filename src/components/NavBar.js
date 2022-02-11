import { Nav, Container } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";
import { MyNavbar, MyNavLink, MyNav } from "./Styles";
import home from "../images/home.png"
import about from "../images/about.png"
import skills from "../images/skills.png"
import project from "../images/project.png"
import contact from "../images/contact.png"

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
                <img style={{height:"2rem"}} src={home}/>
            </MyNavLink>
            <MyNavLink eventKey="/about">
                <img style={{height:"2rem"}} src={about}/>
            </MyNavLink>
            <MyNavLink eventKey="/skills">
                <img style={{height:"2rem"}} src={skills}/>
            </MyNavLink>
            <MyNavLink eventKey="/projects">
            <img style={{height:"2.2rem"}} src={project}/>
            </MyNavLink>
            <MyNavLink eventKey="/contact">
            <img style={{height:"2.5rem"}} src={contact}/>
            </MyNavLink>
        </MyNav>
    </MyNavbar>
</>
)
}

export default NavBar;