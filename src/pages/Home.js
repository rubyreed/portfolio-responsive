import React from "react";
import { Container } from "react-bootstrap";
import { Header, ColorFour } from "../components/Styles";

const Home = () => {
    return (
        <Container>
                <div style={{display:"flex", justifyContent:"flex-start", flexWrap:"wrap", margin:"5vw", flexDirection: "column"}}>
                <Header style={{color:`${ColorFour}`, fontSize:"7vw", marginTop:"4vw", marginLeft:"10vw"}}>Hi, I'm Ruby.<br/>Web Developer<br/>& <br/>UI/UX Designer.</Header>
                <p style={{color:`${ColorFour}`, fontSize:"2vw", marginLeft:"10vw", marginBottom:"7vw", marginTop:"-4vw"}}>I focus on the little things.</p>
                </div>
        </Container>
    )
}

export default Home;