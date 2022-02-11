import React from "react";
import { Container } from "react-bootstrap";
import { BigDiv, Header, SmallDiv } from "../components/Styles"
import html from "../images/html.png"
import css from "../images/css.png"
import js from "../images/js.png"
import react from "../images/react.png"
import react_router from "../images/react_router.png"
import styled_components from "../images/styled_components.png"
import bootstrap from "../images/bootstrap.png"
import photoshop from "../images/photoshop.png"
import figma from "../images/figma.png"
import procreate from "../images/procreate.png"
import wix from "../images/wix.png"
import wordpress from "../images/wordpress.png"
import ruby from "../images/ruby.png"
import rails from "../images/rails.png"
import postgresql from "../images/postgresql.png"
import github from "../images/github.png"
import apple from "../images/apple.png"
import vscode from "../images/vscode.png"
import camera from "../images/camera.png"
import design from "../images/design.png"
import language from "../images/language.png"


const Skills = () => {
    return (
        <Container style={{margin:"4rem"}}>
            <Header style={{fontSize:"4rem"}}>Skills</Header>
                <p style={{color:"white"}}>My skills include frontend and design as well as backend.</p>
            <Header style={{marginTop:"7rem", fontSize:"3rem"}}>Frontend</Header>
            <BigDiv>
                <SmallDiv>
                    <p style={{color:"white"}}>HTML</p>
                    <img src={html} style={{height:"7rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white"}}>CSS</p>
                    <img src={css} style={{height:"7rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white"}}>JavaScript</p>
                    <img src={js} style={{height:"7rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white"}}>React</p>
                    <img src={react} style={{height:"7rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white"}}>React Router</p>
                    <img src={react_router} style={{height:"7rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white"}}>Styled-Components</p>
                    <img src={styled_components} style={{height:"7rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white"}}>React-Bootstrap</p>
                    <img src={bootstrap} style={{height:"7rem"}}/>
                </SmallDiv>
            </BigDiv>
            <Header style={{marginTop:"7rem", fontSize:"3rem"}}>Design</Header>
            <BigDiv>
                <SmallDiv>
                    <p style={{color:"white"}}>Photoshop</p>
                    <img src={photoshop} style={{height:"7rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white"}}>Figma</p>
                    <img src={figma} style={{height:"7rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white"}}>Procreate</p>
                    <img src={procreate} style={{height:"7rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white"}}>Wix</p>
                    <img src={wix} style={{height:"7rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white"}}>Wordpress</p>
                    <img src={wordpress} style={{height:"7rem"}}/>
                </SmallDiv>
            </BigDiv>
            <Header style={{marginTop:"7rem", fontSize:"3rem"}}>Backend</Header>
            <BigDiv>
                <SmallDiv>
                    <p style={{color:"white"}}>Ruby</p>
                    <img src={ruby} style={{height:"7rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white"}}>Rails</p>
                    <img src={rails} style={{height:"7rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white"}}>PostgreSQL</p>
                    <img src={postgresql} style={{height:"7rem"}}/>
                </SmallDiv>
            </BigDiv>
            <Header style={{marginTop:"7rem", fontSize:"3rem"}}>Other</Header>
            <BigDiv>
                <SmallDiv>
                    <p style={{color:"white"}}>GitHub</p>
                    <img src={github} style={{height:"7rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white"}}>Mac OS</p>
                    <img src={apple} style={{height:"7rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white"}}>VSCode</p>
                    <img src={vscode} style={{height:"7rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white"}}>Photography</p>
                    <img src={camera} style={{height:"7rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white"}}>Logo Design</p>
                    <img src={design} style={{height:"7rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white"}}>Spanish Language</p>
                    <img src={language} style={{height:"7rem"}}/>
                </SmallDiv>
            </BigDiv>
        </Container>
    )
}

export default Skills;