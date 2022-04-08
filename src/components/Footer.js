import React, {useState} from "react";
import { MyFooter, ResumeA } from "./Styles";
import linkedin from "../images/linkedin.ico"
import github from "../images/github.ico"
import linkedinwhite from "../images/linkedinwhite.png"
import githubwhite from "../images/githubwhite.png"
import web from "../images/web.png"

const Footer = () => {
    const [over, setOver] = useState(false);
    const [overtwo, setOverTwo] = useState(false);

    return (
<div style={{paddingBottom:"60px"}}>
    <MyFooter style={{display:"flex", alignItems:"center", width:"100%", position:"fixed", bottom:"0", boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"}} fixed="bottom">
    <p className="footercopy"><img style={{height:"1.5rem", marginRight:".5rem"}} src={web}/> Ruby Reed 2022</p>
    <ResumeA className="footerfont" href="resume.pdf" download>Download Resume</ResumeA>
    <div style={{display:"flex"}}>
        <a onMouseOver={() => setOver(true)} onMouseOut={() => setOver(false)} style={{marginRight: "4vw"}} href = "https://www.linkedin.com/in/ruby-s-reed/" target="_blank"><img style={{height:"2.5rem"}} src={over ? linkedinwhite : linkedin} /></a>
        <a onMouseOver={() => setOverTwo(true)} onMouseOut={() => setOverTwo(false)} style={{marginRight: "4vw"}} href = "https://github.com/rubyreed" target="_blank"><img style={{height:"2.5rem"}} src={overtwo ? githubwhite : github}/></a>
    </div>
    </MyFooter>
</div>
    )
}

export default Footer;


