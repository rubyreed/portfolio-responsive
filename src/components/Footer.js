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
<div style={{paddingBottom:"60px"}}>
    <MyFooter style={{display:"flex", alignItems:"center", width:"100%", position:"fixed", bottom:"0"}} fixed="bottom">
    <p className="footercopy">© Ruby Reed 2022</p>
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


