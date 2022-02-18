import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "../components/Styles";
import vocal from "../images/vocal.png"
import kanatous from "../images/kanatous.png"
import mchaul from "../images/mchaul.png"
import rambleon from "../images/rambleon.png"
import useWindowSize from "../hooks/useWindowSize";

const Projects = () => {

    const {width} = useWindowSize();

    return (
        <div>
        {/* visible when window greater than 500px, aka desktop */}
        {width > 500 && (
    <Container>
        <Header style={{fontSize:"5rem", marginLeft:"5rem", marginTop:"5rem", marginBottom:"6rem"}}>Projects</Header>
        <div style={{display:"flex", justifyContent:"flex-start", flexWrap:"wrap", margin:"5rem"}}>
            <a href="https://vocaljournal.herokuapp.com/landing" target="_blank">
                <img className="project" src={vocal}
                />
            </a>
            <a href="https://kanatouswebsite.wixsite.com/extremephysiology" target="_blank">
                <img className="project" src={kanatous}
                />
            </a>
            <a href="https://mchaulenterprises.wixsite.com/mchaulenterprises" target="_blank">
                <img className="project" src={mchaul}
                />
            </a>
            <a href="https://ruby-reed.wixsite.com/rambleon" target="_blank">
                <img className="project" src={rambleon}
                />
            </a>
         </div>
    </Container>
    )}
    {/* visible when less than than 500px, aka mobile */}
    {width < 500 && (
    <Container style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
    <Header style={{fontSize:"3rem", margin:"auto", paddingTop:"3rem", marginBottom:"-3rem"}}>Projects</Header>
    <br/>
    <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap", margin:"3rem"}}>
        <a href="https://vocaljournal.herokuapp.com/landing" target="_blank">
            <img className="projectsmall" src={vocal}
            />
        </a>
        <a href="https://kanatouswebsite.wixsite.com/extremephysiology" target="_blank">
            <img className="projectsmall" src={kanatous}
        />
        </a>
        <a href="https://mchaulenterprises.wixsite.com/mchaulenterprises" target="_blank">
            <img className="projectsmall" src={mchaul}
            />
        </a>
        <a href="https://ruby-reed.wixsite.com/rambleon" target="_blank">
            <img className="projectsmall" src={rambleon}
            />
        </a>
    </div>
    </Container>
)}
</div>
    );
};

export default Projects;