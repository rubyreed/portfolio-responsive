import React from "react";
import { Header } from "../components/Styles";
import vocal from "../images/vocal.png"
import kanatous from "../images/kanatous.png"
import dfp from "../images/DFP.png"
import rambleon from "../images/rambleon.png"

const Projects = () => {

    return (
<div>
    <div>
        <Header className="projhead">My Projects</Header>
        <div className="projdiv">
            <a href="https://www.dailyfireprotection-nw.com/" target="_blank">
                <img className="project" src={dfp}
                />
            </a>
            <a href="https://vocaljournal.herokuapp.com/landing" target="_blank">
                <img className="project" src={vocal}
                />
            </a>
            <a href="https://kanatouswebsite.wixsite.com/extremephysiology" target="_blank">
                <img className="project" src={kanatous}
                />
            </a>
            <a href="https://ruby-reed.wixsite.com/rambleon" target="_blank">
                <img className="project" src={rambleon}
                />
            </a>
         </div>
    </div>
</div>
    );
};

export default Projects;