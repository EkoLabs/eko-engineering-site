import React, {Fragment} from 'react';
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import Splash from "../../components/splash/Splash";
import Tech from "../../components/tech/Tech";
import Projects from "../../components/projects/Projects";
import News from "../../components/news/News";
import Investors from "../../components/investors/Investors";
import Careers from "../../components/careers/Careers";
import ContactForm from "../../components/contactform/ContactForm";
import Footer from "../../components/footer/Footer";
import Office from "../../components/office/Office";
import MobileMenu from "../../components/mobilemenu/MobileMenu";
import Blurb from "../../components/blurb/Blurb";

function Homepage(){
    return (
        <Fragment>
            <MobileMenu/>
            <Header/>
            <Splash/>
            <Blurb/>
            <About/>
            <Tech/>
            <Careers/>
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