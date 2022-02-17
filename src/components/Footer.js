import React, {useState} from "react";
import { MyFooter, ResumeA, ColorOne, SmallFooter } from "./Styles";
import linkedin from "../images/linkedin.ico"
import github from "../images/github.ico"
import linkedinwhite from "../images/linkedinwhite.png"
import githubwhite from "../images/githubwhite.png"
import useWindowSize from "../hooks/useWindowSize";

const Footer = () => {
    const {width} = useWindowSize();
    const [over, setOver] = useState(false);
    const [overtwo, setOverTwo] = useState(false);

    return (
<div>
{/* visible when window greater than 500px, aka desktop */}
{width > 500 && (
    <MyFooter style={{display:"flex", alignItems:"center"}} fixed="bottom">
    <p style={{flexGrow:"1",fontSize:"1.3rem", color:`${ColorOne}`, marginLeft:"4rem", marginRight:"4rem", fontWeight:"900"}}>© Ruby Reed 2022</p>
    <ResumeA style={{fontSize:"1.3rem", marginRight: "4rem", fontWeight:"900"}} href="resume.pdf" download>Download Resume</ResumeA>
    <div style={{display:"flex"}}>
        <a onMouseOver={() => setOver(true)} onMouseOut={() => setOver(false)} style={{marginRight: "4rem"}} href = "https://www.linkedin.com/in/ruby-s-reed/" target="_blank"><img style={{height:"2.5rem"}} src={over ? linkedinwhite : linkedin} /></a>
        <a onMouseOver={() => setOverTwo(true)} onMouseOut={() => setOverTwo(false)} style={{marginRight: "4rem"}} href = "https://github.com/rubyreed" target="_blank"><img style={{height:"2.5rem"}} src={overtwo ? githubwhite : github}/></a>
    </div>
    </MyFooter>)}
{/* visible when less than than 500px, aka mobile */}
{width < 500 && (
    <SmallFooter style={{display:"flex", alignItems:"center"}} fixed="bottom">
    <p style={{flexGrow:"1",fontSize:".5rem", color:`${ColorOne}`, marginLeft:".5rem", marginRight:".5rem", fontWeight:"900"}}>© Ruby Reed 2022</p>
    <ResumeA style={{fontSize:".5rem", marginRight: ".5rem", fontWeight:"900"}} href="resume.pdf" download>Download Resume</ResumeA>
    <div>
        <a onMouseOver={() => setOver(true)} onMouseOut={() => setOver(false)} style={{marginRight: ".5rem"}} href = "https://www.linkedin.com/in/ruby-s-reed/" target="_blank"><img style={{height:".8rem"}} src={over ? linkedinwhite : linkedin} /></a>
        <a onMouseOver={() => setOverTwo(true)} onMouseOut={() => setOverTwo(false)} style={{marginRight: ".5rem"}} href = "https://github.com/rubyreed" target="_blank"><img style={{height:".8rem"}} src={overtwo ? githubwhite : github}/></a>
    </div>
    </SmallFooter>)}
</div>
    )
}

export default Footer;


