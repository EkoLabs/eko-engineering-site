import React, {Fragment, useEffect} from 'react';
import { withRouter }from 'react-router';
import Header from "../header/Header";
import Splash from "../splash/Splash";
import Tech from "../tech/Tech";
import Projects from "../projects/Projects";
import Gallery from "../gallery/Gallery";
import Investors from "../investors/Investors";
import Jobs from "../jobs/Jobs";
import ContactForm from "../contactform/ContactForm";
import Footer from "../footer/Footer";

function Homepage(){
    return (
        <Fragment>
            <Header/>
            <Splash/>
            <Tech/>
            <Projects/>
            <Gallery/>
            <Investors/>
            <Jobs/>
            <ContactForm/>
            <Footer/>
        </Fragment>
    )
}

export default Homepage;