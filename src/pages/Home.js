import React from "react";
import { Header, ColorFour } from "../components/Styles";

const Home = () => {
    return (
        <div style={{height:"100%"}}>
                <div className="homehead">
                <Header className="homefont" style={{color:`${ColorFour}`}}>Hi, I'm Ruby.<br/>Web Developer<br/>& <br/>UI/UX Designer.</Header>
                <p className="hometag" style={{color:`${ColorFour}`}}>I focus on the little things.</p>
                </div>
        </div>
    )
}

export default Home;