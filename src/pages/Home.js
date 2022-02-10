import React from "react";
import { Header, ColorFour } from "../components/Styles";
import butterfly from "../images/butterfly.jpg";

const Home = () => {
    return (
        <div style={{height:"70rem", backgroundImage: `url(${butterfly})`,backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center", display:"flex", justifyContent:"flex-start", flexWrap:"wrap"}}>
            <Header style={{color:`${ColorFour}`, fontSize:"7rem", marginTop:"4rem", marginLeft:"10rem"}}>Hi, I'm Ruby.<br/>Web Developer<br/>& <br/>UI/UX Designer.</Header>
        </div>
    )
}

export default Home;