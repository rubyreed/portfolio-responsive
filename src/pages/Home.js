import React from "react";
import { Container } from "react-bootstrap";
import { Header, ColorFour } from "../components/Styles";

const Home = () => {
    return (
        <div>
        <Container style={{height:"100%"}}>
                <div className="homehead">
                <Header className="homefont" style={{color:`${ColorFour}`}}>Hi, I'm Ruby.<br/>Web Developer<br/>& <br/>UI/UX Designer.</Header>
                <p style={{color:`${ColorFour}`, fontSize:"2vw", marginLeft:"10vw", marginBottom:"7vw", marginTop:"-4vw"}}>I focus on the little things.</p>
                </div>
        </Container>
        </div>
    )
}

export default Home;