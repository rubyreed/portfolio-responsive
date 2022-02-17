import { Nav, Container, NavDropdown, Dropdown, Navbar } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";
import { MyNavbar, MyNavLink, MyNav, SmallNavLink, MyItem, ColorFour, ColorThree } from "./Styles";
import home from "../images/home.png"
import about from "../images/about.png"
import skills from "../images/skills.png"
import project from "../images/project.png"
import contact from "../images/contact.png"
import useWindowSize from "../hooks/useWindowSize";
import arrow from "../images/arrow.png"

const NavBar = () => {

    const navigate = useNavigate();

    const handleSelect = (eventKey) => {
        navigate(eventKey);
      };
    const {width} = useWindowSize();
    
return (
    <div>
    {/* visible when window less than 500px, aka desktop */}
    {width > 500 && (
    <MyNavbar>
        <Container>
        <MyNav onSelect={handleSelect}>
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
                <p style={{fontSize:"1rem", marginTop:"-.1rem"}}>Projects</p>
            </MyNavLink>
            <MyNavLink eventKey="/contact">
                <img style={{height:"2rem", marginTop:"1.6rem"}} src={contact}/>
                <p style={{fontSize:"1rem", marginTop:"-.1rem"}}>Contact Me</p>
            </MyNavLink>
        </MyNav>
        </Container>
    </MyNavbar>)}

{/* visible when less than than 500px, aka mobile */}
{width < 500 && (
<MyNavbar>
 <Container>
        <Dropdown>
            <div style={{display:"flex", justifyContent:"flex-start"}}>
        <Dropdown.Toggle style={{borderRadius:".3rem", border:`2px solid ${ColorFour}`,borderStyle:"none", margin:".4rem", fontSize:"1rem", padding:".2rem", backgroundColor:`${ColorThree}`}} variant="success" id="dropdown-basic">
        Navigate<img style={{height:"1rem", marginLeft:".4rem", marginBottom:"-.2rem"}} src={arrow}/>
        </Dropdown.Toggle>
        </div>
        <Dropdown.Menu style={{display:"flex", justifyContent:"center", flexWrap:"wrap",flexDirection:"column", alignItems:"center"}} >
        <Nav onSelect={handleSelect}>
            <MyItem eventKey="/">
                <img style={{height:"1.5rem", marginRight:".4rem"}} src={home}/>
                <p style={{fontSize:"1rem", marginTop:".1rem"}}>Home</p>
            </MyItem>
            <MyItem eventKey="/about">
                <img style={{height:"1.5rem", marginRight:".4rem"}} src={about}/>
                <p style={{fontSize:"1rem", marginTop:".1rem"}}>About</p>
            </MyItem>
            <MyItem eventKey="/skills">
                <img style={{height:"1.5rem", marginRight:".4rem"}} src={skills}/>
                <p style={{fontSize:"1rem", marginTop:".1rem"}}>Skills</p>
            </MyItem>
            <MyItem eventKey="/projects">
                <img style={{height:"1.5rem", marginRight:".4rem"}} src={project}/>
                <p style={{fontSize:"1rem", marginTop:".1rem"}}>Projects</p>
            </MyItem>
            <MyItem eventKey="/contact">
                <img style={{height:"1.5rem", marginRight:".4rem"}} src={contact}/>
                <p style={{fontSize:"1rem", marginTop:".1rem"}}>Contact Me</p>
            </MyItem>
            </Nav>
        </Dropdown.Menu>
        </Dropdown>
    </Container> 
</MyNavbar>
)}
</div>
)
}

export default NavBar;

