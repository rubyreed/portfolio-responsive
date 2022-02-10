import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "../components/Styles";
import ruby from "../images/ruby.jpg"

const About = () => {
    return (
        <Container style={{display:"flex", justifyContent:"center"}}>
            <img style={{height:"25rem", width:"25rem", objectFit:"cover", borderRadius:"12.5rem", marginTop:"5rem", boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"}} src={ruby} alt="ruby"/>
        </Container>
    )
}

export default About;