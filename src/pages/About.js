import React from "react";
import { LightButton, ResumeB } from "../components/Styles";
import ruby from "../images/ruby.jpg"
import linkedinwhite from "../images/linkedinwhite.png"
import githubwhite from "../images/githubwhite.png"
import { useNavigate } from "react-router-dom";
import contactwhite from "../images/contactwhite.png"

const About = () => {

    const navigate = useNavigate();

    const handleSelect = (eventKey) => {
        navigate(eventKey);
      };

    return (
        <div style={{display:"flex", justifyContent:"center", height: "100%", marginTop:"3rem"}}>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginRight: "4vw", maxWidth:"60vw", marginBottom:"5vw"}}>
                <img className="profileimg" style={{objectFit:"cover", marginTop:"2rem", marginBottom:"1vw", boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"}} src={ruby} alt="ruby"/>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                <a href = "https://github.com/rubyreed" target="_blank"><img style={{minHeight: "2.3rem", height:"3vw", margin:"1rem"}} src={githubwhite}/></a>
                <a href = "https://www.linkedin.com/in/ruby-s-reed/" target="_blank"><img style={{minHeight:"2.3rem", height:"3vw", margin:"1rem"}} src={linkedinwhite}/></a>
                <nav onSelect={handleSelect}>
                    <a eventKey="/contact">
                        <img style={{minHeight:"2.3rem", height:"3vw", margin:"1rem"}} src={contactwhite}/>
                    </a>
                </nav>
                </div>
                <h2 className="tagline">I'll keep it short and sweet.</h2>
                <p className="bio"><center>I landed on web development after years of trying to find my path in the world, and I'm happy to say it's my passion.
                I earned a degree from Colorado State University in Bioligical Science, spent some time traveling and
                contemplating my future, and eventually learned to code. I graduated from DevPoint Labs with a Full-Stack Web Development certificate
                from the University of Utah in 2022 and have been learning and building since then.
                </center></p>
                <form method="get" action="resume.pdf" target="_blank" download>
                <LightButton className="lightbutton" style={{marginTop:"5vw", padding:"1.5rem", whiteSpace:"nowrap"}}>View My Resume</LightButton>
                </form>
            </div>
        </div>
    )
}

export default About;
