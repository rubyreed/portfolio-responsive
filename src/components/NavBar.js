import { Navbar, Container, Nav } from "react-bootstrap";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { MyNavbar, MyNavLink, MyNav, ColorOne} from "./Styles";
import home from "../images/home.png"
import homepurp from "../images/homepurp.png"
import about from "../images/about.png"
import aboutpurp from "../images/aboutpurp.png"
import skills from "../images/skills.png"
import skillspurp from "../images/skillspurp.png"
import project from "../images/project.png"
import projectpurp from "../images/projectpurp.png"
import contact from "../images/contact.png"
import contactpurp from "../images/contactpurp.png"

const NavBar = () => {
    const [over, setOver] = useState(false);
    const [overtwo, setOverTwo] = useState(false);
    const [overthree, setOverThree] = useState(false);
    const [overfour, setOverFour] = useState(false);
    const [overfive, setOverFive] = useState(false);

    const navigate = useNavigate();

    const handleSelect = (eventKey) => {
        navigate(eventKey);
      };
    
return (
    <>
    <MyNavbar collapseOnSelect fixed="top" expand="sm" bg="light" variant="light">
            <Navbar.Toggle style={{marginLeft:".6rem"}} aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav style={{width:"100%", display:"flex", justifyContent:"space-evenly"}} onSelect={handleSelect}>
                    <Nav.Link onMouseOver={() => setOver(true)} onMouseOut={() => setOver(false)} style={{color:`${ColorOne}`}} eventKey="/"><img className="navimg" src={over ? homepurp : home}/></Nav.Link>
                    <Nav.Link onMouseOver={() => setOverTwo(true)} onMouseOut={() => setOverTwo(false)} style={{color:`${ColorOne}`}} eventKey="/about"><img className="navimg" src={overtwo ? aboutpurp : about}/></Nav.Link>
                    <Nav.Link onMouseOver={() => setOverThree(true)} onMouseOut={() => setOverThree(false)} style={{color:`${ColorOne}`}} eventKey="/skills"><img className="navimg" src={overthree ? skillspurp : skills}/></Nav.Link>
                    <Nav.Link onMouseOver={() => setOverFour(true)} onMouseOut={() => setOverFour(false)} style={{color:`${ColorOne}`}} eventKey="/projects"><img className="navimg" src={overfour ? projectpurp : project}/></Nav.Link>
                    <Nav.Link onMouseOver={() => setOverFive(true)} onMouseOut={() => setOverFive(false)} style={{color:`${ColorOne}`}} eventKey="/contact"><img className="navimg" src={overfive ? contactpurp : contact}/></Nav.Link>
                </Nav>
            </Navbar.Collapse>
    </MyNavbar>
    </>
)
}

export default NavBar;

