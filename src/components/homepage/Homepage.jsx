import React, {Fragment} from 'react';
import Header from "../header/Header";
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
            <Header/>
            <Splash/>
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