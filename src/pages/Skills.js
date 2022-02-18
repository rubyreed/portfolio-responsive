import React from "react";
import { Container } from "react-bootstrap";
import { BigDiv, Header, MyBigDiv, MySmallDiv, SmallDiv } from "../components/Styles"
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
import useWindowSize from "../hooks/useWindowSize";


const Skills = () => {
    const {width} = useWindowSize();
    return (
        <div>
    {/* visible when window greater than 500px, aka desktop */}
    {width > 500 && (
        <Container style={{margin:"5rem"}}>
            <Header style={{fontSize:"5rem"}}>Skills</Header>
                <p style={{color:"white", fontSize:"1.5rem", marginTop:"-1.5rem"}}>My skills primarily center on the Frontend and UI/UX, but also include Backend frameworks.</p>
            <Header style={{marginTop:"7rem", fontSize:"3rem"}}>Frontend</Header>
            <MyBigDiv>
                <MySmallDiv>
                    <p style={{color:"white"}}>HTML</p>
                    <img src={html} style={{height:"7rem"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p style={{color:"white"}}>CSS</p>
                    <img src={css} style={{height:"7rem"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p style={{color:"white"}}>JavaScript</p>
                    <img src={js} style={{height:"7rem"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p style={{color:"white"}}>React</p>
                    <img src={react} style={{height:"7rem"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p style={{color:"white"}}>React Router</p>
                    <img src={react_router} style={{height:"7rem"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p style={{color:"white"}}>Styled-Components</p>
                    <img src={styled_components} style={{height:"7rem"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p style={{color:"white"}}>React-Bootstrap</p>
                    <img src={bootstrap} style={{height:"7rem"}}/>
                </MySmallDiv>
            </MyBigDiv>
            <Header style={{marginTop:"7rem", fontSize:"3rem"}}>Design</Header>
            <MyBigDiv>
                <MySmallDiv>
                    <p style={{color:"white"}}>Photoshop</p>
                    <img src={photoshop} style={{height:"7rem"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p style={{color:"white"}}>Figma</p>
                    <img src={figma} style={{height:"7rem"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p style={{color:"white"}}>Procreate</p>
                    <img src={procreate} style={{height:"7rem"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p style={{color:"white"}}>Wix</p>
                    <img src={wix} style={{height:"7rem"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p style={{color:"white"}}>Wordpress</p>
                    <img src={wordpress} style={{height:"7rem"}}/>
                </MySmallDiv>
            </MyBigDiv>
            <Header style={{marginTop:"7rem", fontSize:"3rem"}}>Backend</Header>
            <MyBigDiv>
                <MySmallDiv>
                    <p style={{color:"white"}}>Ruby</p>
                    <img src={ruby} style={{height:"7rem"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p style={{color:"white"}}>Rails</p>
                    <img src={rails} style={{height:"7rem"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p style={{color:"white"}}>PostgreSQL</p>
                    <img src={postgresql} style={{height:"7rem"}}/>
                </MySmallDiv>
            </MyBigDiv>
            <Header style={{marginTop:"7rem", fontSize:"3rem"}}>Other</Header>
            <MyBigDiv>
                <MySmallDiv>
                    <p style={{color:"white"}}>GitHub</p>
                    <img src={github} style={{height:"7rem"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p style={{color:"white"}}>Mac OS</p>
                    <img src={apple} style={{height:"7rem"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p style={{color:"white"}}>VSCode</p>
                    <img src={vscode} style={{height:"7rem"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p style={{color:"white"}}>Photography</p>
                    <img src={camera} style={{height:"7rem"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p style={{color:"white"}}>Logo Design</p>
                    <img src={design} style={{height:"7rem"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p style={{color:"white"}}>Spanish Language</p>
                    <img src={language} style={{height:"7rem"}}/>
                </MySmallDiv>
            </MyBigDiv>
        </Container>
    )}

    {/* visible when window less than 500px, aka mobile */}
    {width < 500 && (
        <Container style={{width:"100%"}}>
            <div style={{margin:"1rem", maxWidth:"50rem"}}>
            <Header style={{fontSize:"3rem"}}>Skills</Header>
                <p style={{color:"white", fontSize:"1rem", marginTop:"-1rem"}}>My skills primarily center on the Frontend and UI/UX, but also include Backend frameworks.</p>
            <Header style={{marginTop:"3rem", fontSize:"1.5rem"}}>Frontend</Header>
            <BigDiv>
                <SmallDiv>
                    <p style={{color:"white", fontSize:".75rem"}}>HTML</p>
                    <img src={html} style={{height:"2rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white", fontSize:".75rem"}}>CSS</p>
                    <img src={css} style={{height:"2rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white", fontSize:".75rem"}}>JavaScript</p>
                    <img src={js} style={{height:"2rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white", fontSize:".75rem"}}>React</p>
                    <img src={react} style={{height:"2rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white", fontSize:".75rem"}}>React Router</p>
                    <img src={react_router} style={{height:"2rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white", fontSize:".75rem"}}>Styled-Components</p>
                    <img src={styled_components} style={{height:"2rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white", fontSize:".75rem"}}>React-Bootstrap</p>
                    <img src={bootstrap} style={{height:"2rem"}}/>
                </SmallDiv>
            </BigDiv>
            <Header style={{marginTop:"3rem", fontSize:"1.5rem"}}>Design</Header>
            <BigDiv>
                <SmallDiv>
                    <p style={{color:"white", fontSize:".75rem"}}>Photoshop</p>
                    <img src={photoshop} style={{height:"2rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white", fontSize:".75rem"}}>Figma</p>
                    <img src={figma} style={{height:"2rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white", fontSize:".75rem"}}>Procreate</p>
                    <img src={procreate} style={{height:"2rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white", fontSize:".75rem"}}>Wix</p>
                    <img src={wix} style={{height:"2rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white", fontSize:".75rem"}}>Wordpress</p>
                    <img src={wordpress} style={{height:"2rem"}}/>
                </SmallDiv>
            </BigDiv>
            <Header style={{marginTop:"3rem", fontSize:"1.5rem"}}>Backend</Header>
            <BigDiv>
                <SmallDiv>
                    <p style={{color:"white", fontSize:".75rem"}}>Ruby</p>
                    <img src={ruby} style={{height:"2rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white", fontSize:".75rem"}}>Rails</p>
                    <img src={rails} style={{height:"2rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white", fontSize:".75rem"}}>PostgreSQL</p>
                    <img src={postgresql} style={{height:"2rem"}}/>
                </SmallDiv>
            </BigDiv>
            <Header style={{marginTop:"3rem", fontSize:"1.5rem"}}>Other</Header>
            <BigDiv>
                <SmallDiv>
                    <p style={{color:"white", fontSize:".75rem"}}>GitHub</p>
                    <img src={github} style={{height:"2rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white", fontSize:".75rem"}}>Mac OS</p>
                    <img src={apple} style={{height:"2rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white", fontSize:".75rem"}}>VSCode</p>
                    <img src={vscode} style={{height:"2rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white", fontSize:".75rem"}}>Photography</p>
                    <img src={camera} style={{height:"2rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white", fontSize:".75rem"}}>Logo Design</p>
                    <img src={design} style={{height:"2rem"}}/>
                </SmallDiv>
                <SmallDiv>
                    <p style={{color:"white", fontSize:".75rem"}}>Spanish Language</p>
                    <img src={language} style={{height:"2rem"}}/>
                </SmallDiv>
            </BigDiv>
            </div>
        </Container>
    )}
        </div>
    )
}

export default Skills;