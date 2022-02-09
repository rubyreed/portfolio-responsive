import { Menu } from "antd";
import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
return (
<Menu style={{border:"1px solid black"}}>
    <Menu.Item key="home">
        <Link to="/">Home</Link>
    </Menu.Item>
    <Menu.Item key="about">
        <Link to="/about">About</Link>
    </Menu.Item>
    <Menu.Item key="skills">
        <Link to="/skills">Skills</Link>
    </Menu.Item>
    <Menu.Item key="projects">
        <Link to="/projects">Projects</Link>
    </Menu.Item>
    <Menu.Item key="contact">
        <Link to="/contact">Contact</Link>
    </Menu.Item>
</Menu>
)
}

export default NavBar;