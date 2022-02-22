import React from "react";
import { Header, MyBigDiv, MySmallDiv } from "../components/Styles"
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
        <div style={{margin:"5vw"}}>
            <Header className="skillmain">Skills</Header>
                <p className="skillbio">My skills primarily center on the Frontend and UI/UX, but also include Backend frameworks.</p>
            <Header className="skillhead">Frontend</Header>
            <MyBigDiv>
                <MySmallDiv>
                    <p className="skilltitle">HTML</p>
                    <img src={html} style={{height:"7vw"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p className="skilltitle">CSS</p>
                    <img src={css} style={{height:"7vw"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p className="skilltitle">JavaScript</p>
                    <img src={js} style={{height:"7vw"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p className="skilltitle">React</p>
                    <img src={react} style={{height:"7vw"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p className="skilltitle">React Router</p>
                    <img src={react_router} style={{height:"7vw"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p className="skilltitle">Styled-Components</p>
                    <img src={styled_components} style={{height:"7vw"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p className="skilltitle">React-Bootstrap</p>
                    <img src={bootstrap} style={{height:"7vw"}}/>
                </MySmallDiv>
            </MyBigDiv>
            <Header className="skillhead">Design</Header>
            <MyBigDiv>
                <MySmallDiv>
                    <p className="skilltitle">Photoshop</p>
                    <img src={photoshop} style={{height:"7vw"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p className="skilltitle">Figma</p>
                    <img src={figma} style={{height:"7vw"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p className="skilltitle">Procreate</p>
                    <img src={procreate} style={{height:"7vw"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p className="skilltitle">Wix</p>
                    <img src={wix} style={{height:"7vw"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p className="skilltitle">Wordpress</p>
                    <img src={wordpress} style={{height:"7vw"}}/>
                </MySmallDiv>
            </MyBigDiv>
            <Header className="skillhead">Backend</Header>
            <MyBigDiv>
                <MySmallDiv>
                    <p className="skilltitle">Ruby</p>
                    <img src={ruby} style={{height:"7vw"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p className="skilltitle">Rails</p>
                    <img src={rails} style={{height:"7vw"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p className="skilltitle">PostgreSQL</p>
                    <img src={postgresql} style={{height:"7vw"}}/>
                </MySmallDiv>
            </MyBigDiv>
            <Header className="skillhead">Other</Header>
            <MyBigDiv>
                <MySmallDiv>
                    <p className="skilltitle">GitHub</p>
                    <img src={github} style={{height:"7vw"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p className="skilltitle">Mac OS</p>
                    <img src={apple} style={{height:"7vw"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p className="skilltitle">VSCode</p>
                    <img src={vscode} style={{height:"7vw"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p className="skilltitle">Photography</p>
                    <img src={camera} style={{height:"7vw"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p className="skilltitle">Logo Design</p>
                    <img src={design} style={{height:"7vw"}}/>
                </MySmallDiv>
                <MySmallDiv>
                    <p className="skilltitle">Spanish Language</p>
                    <img src={language} style={{height:"7vw"}}/>
                </MySmallDiv>
            </MyBigDiv>
        </div>
    )
}

export default Skills;