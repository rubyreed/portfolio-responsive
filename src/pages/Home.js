import React from "react";
import { Container } from "react-bootstrap";
import { Header, ColorFour } from "../components/Styles";
import useWindowSize from "../hooks/useWindowSize";

const Home = () => {
const {width} = useWindowSize();
    return (
        <div>
        {/* visible when window less than 500px, aka desktop */}
        {width > 500 && (
        <Container>
                <div style={{display:"flex", justifyContent:"flex-start", flexWrap:"wrap", margin:"5rem", flexDirection: "column"}}>
                <Header style={{color:`${ColorFour}`, fontSize:"7rem", marginTop:"4rem", marginLeft:"10rem"}}>Hi, I'm Ruby.<br/>Web Developer<br/>& <br/>UI/UX Designer.</Header>
                <p style={{color:`${ColorFour}`, fontSize:"2rem", marginLeft:"10rem", marginBottom:"7rem", marginTop:"-4rem"}}>I focus on the little things.</p>
                </div>
        </Container> )}
        {/* visible when less than than 500px, aka mobile */}
        {width < 500 && (
        <Container>
                <div style={{display:"flex", justifyContent:"flex-start", flexWrap:"wrap", flexDirection: "column", width:"100%"}}>
                <Header style={{color:"ButtonFace", fontSize:"2rem", marginLeft:"3rem", marginTop:"3rem"}}>Hi, I'm Ruby.<br/>Web Developer<br/>& <br/>UI/UX Designer.</Header>
                <p style={{color:"white", fontSize:"1rem", marginLeft:"3rem", marginTop:".2rem", marginBottom:"2rem"}}>I focus on the little things.</p>
                </div>
          </Container>  
        )}
        </div>
    )
}

export default Home;