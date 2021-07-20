import React, {useState} from "react";
import { slide as Menu } from 'react-burger-menu';

import burgerIcon from "./burger.svg";
import crossIcon from "./cross.svg";

function MobileMenu(){
    const [isOpen, setOpen] = useState(false);

    function itemClicked(){
        setOpen(false);
    }

    return (
        <Menu bodyClassName={"menu-open"}
              isOpen = {isOpen}
              onStateChange={ state=>setOpen(state.isOpen)}
              right
              customBurgerIcon={<img src={burgerIcon} alt="Open Menu" />}
              customCrossIcon={<img src={crossIcon}
              alt="Close Menu"/>} >
            <a id="home" onClick={itemClicked} className="menu-item" href="/">Home</a>
            <a id="about" onClick={itemClicked} className="menu-item" href="#about">About</a>
            <a id="tech" onClick={itemClicked} className="menu-item" href="#tech">Tech</a>
            <a id="opensource" onClick={itemClicked} className="menu-item" href="/sonorous">Open Source</a>
            <a id="careers" onClick={itemClicked} className="menu-item" href="#careers">Careers</a>
            <a id="ecosystem" onClick={itemClicked} className="menu-item" href="#ecosystem">Ecosystem</a>
            <a id="contact" onClick={itemClicked} className="menu-item" href="#contact">Contact</a>
        </Menu>
    );
}

export default MobileMenu;