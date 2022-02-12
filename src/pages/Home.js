import React from "react";
import { Container } from "react-bootstrap";
import { Header, ColorFour } from "../components/Styles";

const Home = () => {
    return (
        <Container>
                <div style={{display:"flex", justifyContent:"flex-start", flexWrap:"wrap", margin:"5rem", flexDirection: "column"}}>
                <Header style={{color:`${ColorFour}`, fontSize:"7rem", marginTop:"4rem", marginLeft:"10rem"}}>Hi, I'm Ruby.<br/>Web Developer<br/>& <br/>UI/UX Designer.</Header>
                <p style={{color:`${ColorFour}`, fontSize:"2rem", marginLeft:"10rem", marginBottom:"7rem", marginTop:"-4rem"}}>I focus on the little things.</p>
                </div>
        </Container>
    )
}

export default Home;