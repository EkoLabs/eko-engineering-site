import React from "react";
import { slide as Menu } from 'react-burger-menu';

import burgerIcon from "./burger.svg";
import crossIcon from "./cross.svg";

function MobileMenu(){
    return (
        <Menu bodyClassName={"menu-open"} right customBurgerIcon={<img src={burgerIcon} alt="Open Menu" />} customCrossIcon={<img src={crossIcon} alt="Close Menu"/>} >
            <a id="home" className="menu-item" href="#">Home</a>
            <a id="about" className="menu-item" href="#about">About</a>
            <a id="tech" className="menu-item" href="#tech">Tech</a>
            <a id="ecosystem" className="menu-item" href="#ecosystem">Ecosystem</a>
            <a id="careers" className="menu-item" href="#careers">Careers</a>
            <a id="contact" className="menu-item" href="#contact">Contact</a>
        </Menu>
    );
}

export default MobileMenu;