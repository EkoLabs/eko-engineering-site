import React, {Fragment} from 'react';
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
import MobileMenu from "../mobilemenu/MobileMenu";
import Blurb from "../blurb/Blurb";

function Homepage(){
    return (
        <Fragment>
            <MobileMenu/>
            <Header/>
            <Splash/>
            <Blurb/>
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