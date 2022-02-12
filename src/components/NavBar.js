import { Nav, Container } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";
import { MyNavbar, MyNavLink, MyNav, SmallNavLink, SmallNav } from "./Styles";
import home from "../images/home.png"
import about from "../images/about.png"
import skills from "../images/skills.png"
import project from "../images/project.png"
import contact from "../images/contact.png"
import useWindowSize from "../hooks/useWindowSize";

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
                <p style={{fontSize:"1rem", marginTop:"-.1rem"}}>Home</p>
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
        <SmallNav onSelect={handleSelect}>
            <SmallNavLink eventKey="/">
                <img style={{height:"1.5rem"}} src={home}/>
                {/* <p style={{fontSize:"1rem", marginTop:"-.1rem"}}>Home</p> */}
            </SmallNavLink>
            <SmallNavLink eventKey="/about">
                <img style={{height:"1.5rem"}} src={about}/>
                {/* <p style={{fontSize:"1rem", marginTop:"-.1rem"}}>About</p> */}
            </SmallNavLink>
            <SmallNavLink eventKey="/skills">
                <img style={{height:"1.5rem"}} src={skills}/>
                {/* <p style={{fontSize:"1rem", marginTop:"-.01rem", marginLeft:".2rem"}}>Skills</p> */}
            </SmallNavLink>
            <SmallNavLink eventKey="/projects">
                <img style={{height:"1.5rem"}} src={project}/>
                {/* <p style={{fontSize:"1rem", marginTop:"-.1rem"}}>Projects</p> */}
            </SmallNavLink>
            <SmallNavLink eventKey="/contact">
                <img style={{height:"1.5rem"}} src={contact}/>
                {/* <p style={{fontSize:"1rem", marginTop:"-.1rem"}}>Contact Me</p> */}
            </SmallNavLink>
        </SmallNav>
    </Container>
</MyNavbar>
)}
</div>
)
}

export default NavBar;
