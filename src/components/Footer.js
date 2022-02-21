import React, {useState} from "react";
import { MyFooter, ResumeA, ColorOne, SmallFooter } from "./Styles";
import linkedin from "../images/linkedin.ico"
import github from "../images/github.ico"
import linkedinwhite from "../images/linkedinwhite.png"
import githubwhite from "../images/githubwhite.png"

const Footer = () => {
    const [over, setOver] = useState(false);
    const [overtwo, setOverTwo] = useState(false);

    return (
<div>
    <MyFooter style={{display:"flex", alignItems:"center"}} fixed="bottom">
    <p style={{flexGrow:"1",fontSize:"1.3rem", color:`${ColorOne}`, marginLeft:"4vw", marginRight:"4vw", fontWeight:"900"}}>© Ruby Reed 2022</p>
    <ResumeA style={{fontSize:"1.3rem", marginRight: "4vw", fontWeight:"900"}} href="resume.pdf" download>Download Resume</ResumeA>
    <div style={{display:"flex"}}>
        <a onMouseOver={() => setOver(true)} onMouseOut={() => setOver(false)} style={{marginRight: "4rem"}} href = "https://www.linkedin.com/in/ruby-s-reed/" target="_blank"><img style={{height:"2.5rem"}} src={over ? linkedinwhite : linkedin} /></a>
        <a onMouseOver={() => setOverTwo(true)} onMouseOut={() => setOverTwo(false)} style={{marginRight: "4rem"}} href = "https://github.com/rubyreed" target="_blank"><img style={{height:"2.5rem"}} src={overtwo ? githubwhite : github}/></a>
    </div>
    </MyFooter>
</div>
    )
}

export default Footer;


