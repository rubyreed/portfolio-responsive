import { Navbar, Container, Nav } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";
import { MyNavbar, MyNavLink, MyNav, ColorOne} from "./Styles";
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
    <MyNavbar collapseOnSelect fixed="top" expand="md" bg="light" variant="light">
        <Container >
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <MyNav className="me-auto" onSelect={handleSelect}>
                    <Nav.Link style={{color:`${ColorOne}`}} eventKey="/"><img className="navimg" src={home}/></Nav.Link>
                    <Nav.Link style={{color:`${ColorOne}`}} eventKey="/about"><img className="navimg" src={about}/></Nav.Link>
                    <Nav.Link style={{color:`${ColorOne}`}} eventKey="/skills"><img className="navimg" src={skills}/></Nav.Link>
                    <Nav.Link style={{color:`${ColorOne}`}} eventKey="/projects"><img className="navimg" src={project}/></Nav.Link>
                    <Nav.Link style={{color:`${ColorOne}`}} eventKey="/contact"><img className="navimg" src={contact}/></Nav.Link>
                </MyNav>
            </Navbar.Collapse>
        </Container>
    </MyNavbar>
    </>
)
}

export default NavBar;


        // <Navbar collapseOnSelect fixed="top" expand="lg" bg="light" variant="dark">
        // <Container style={{height:"5rem"}}>
        //     <Nav onSelect={handleSelect}>
        //         <Nav.Link eventKey="/">
        //             <img style={{height:"5vw", padding:"1vw"}} src={home}/>
        //             {/* <p style={{fontSize:"1vw", marginTop:"-.1vw", textDecoration:"none"}}>Home</p> */}
        //         </Nav.Link>
        //         <Nav.Link eventKey="/about">
        //             <img style={{height:"5vw", padding:"1vw"}} src={about}/>
        //             {/* <p style={{fontSize:"1vw", marginTop:"-.1vw"}}>About</p> */}
        //         </Nav.Link>
        //         <Nav.Link eventKey="/skills">
        //             <img style={{height:"5vw", padding:"1vw"}} src={skills}/>
        //             {/* <p style={{fontSize:"1vw", marginTop:"-.01vw", marginLeft:".2rem"}}>Skills</p> */}
        //         </Nav.Link>
        //         <Nav.Link eventKey="/projects">
        //             <img style={{height:"5vw", padding:"1vw"}} src={project}/>
        //             {/* <p style={{fontSize:"1vw", marginTop:"-.1vw"}}>My Work</p> */}
        //         </Nav.Link>
        //         <Nav.Link eventKey="/contact">
        //             <img style={{height:"5vw", padding:"1vw"}} src={contact}/>
        //             {/* <p style={{fontSize:"1vw", marginTop:"-.1vw"}}>Contact Me</p> */}
        //         </Nav.Link>
        //     </Nav>
        // </Container>
        // </Navbar> 
