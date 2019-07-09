import React, {Fragment, useEffect} from 'react';
import { withRouter } from 'react-router';
import crossIcon from '../header/mobile-menu/cross.svg';
import burgerIcon from '../header/mobile-menu/burger.svg';
import { slide as Menu } from 'react-burger-menu';
import Header from "../header/Header";
import About from "../about/About";
import Splash from "../splash/Splash";
import Tech from "../tech/Tech";
import Projects from "../projects/Projects";
import News from "../news/News";
import Investors from "../investors/Investors";
import Jobs from "../jobs/Jobs";
import ContactForm from "../contactform/ContactForm";
import Footer from "../footer/Footer";
import Office from "../office/Office";

function Homepage(){
    return (
        <Fragment>
            <Menu bodyClassName={"menu-open"} right customBurgerIcon={<img src={burgerIcon} />} customCrossIcon={<img src={crossIcon} />} >
                <a id="home" className="menu-item" href="#">Home</a>
                <a id="about" className="menu-item" href="#">About</a>
                <a id="tech" className="menu-item" href="#">Tech</a>
                <a id="ecosystem" className="menu-item" href="#">Ecosystem</a>
                <a id="careers" className="menu-item" href="#">Careers</a>
                <a id="contact" className="menu-item" href="#">Contact</a>
            </Menu>
            <Header/>
            <Splash/>
            <About/>
            <Tech/>
            <Jobs/>
            <Projects/>
            <Office/>
            <News/>
            <Investors/>
            <ContactForm/>
            <Footer/>
        </Fragment>
    )
}

export default Homepage;