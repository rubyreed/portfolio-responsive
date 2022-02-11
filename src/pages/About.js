import React from "react";
import { Container } from "react-bootstrap";
import { MyButton } from "../components/Styles";
import ruby from "../images/ruby.jpg"

const About = () => {
    return (
        <Container style={{display:"flex", justifyContent:"center"}}>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginRight: "4rem", maxWidth:"50rem"}}>
            <img style={{height:"25rem", width:"25rem", objectFit:"cover", borderRadius:"12.5rem", marginTop:"5rem", boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"}} src={ruby} alt="ruby"/>
            <h2 style={{color:"white", fontSize:"2rem"}}>I'll keep it short and sweet.</h2>
            <p style={{color:"white", fontSize:"1.5rem"}}><center>I landed on web development after years of trying to find my path in the world, and I'm happy to say it's my passion.
                I earned a degree from Colorado State University in Bioligical Science, spent some time traveling and
                contemplating my future, and eventually learned to code. I graduated from DevPoint Labs with a Full-Stack Web Development certificate
                from the University of Utah in 2022 and have been learning and building since then.
            </center></p>
            <MyButton style={{width:"15rem"}}>
                <a style={{textDecoration:"none", color:"black"}} href="resume.pdf" download>Download Resume</a>
            </MyButton>
            </div>
        </Container>
    )
}

export default About;