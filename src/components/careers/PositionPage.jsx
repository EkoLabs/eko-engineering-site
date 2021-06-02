import React, {Fragment} from "react";
import MobileMenu from "../mobilemenu/MobileMenu";
import Header from "../header/Header";
import Splash from "../splash/Splash";
import About from "../about/About";
import Tech from "../tech/Tech";
import Projects from "../projects/Projects";
import Office from "../office/Office";
import News from "../news/News";
import Position from "./Position";
import Investors from "../investors/Investors";
import ContactForm from "../contactform/ContactForm";
import Footer from "../footer/Footer";

function PositionPage(props){

    return (
        <Fragment>
            <MobileMenu/>
            <Header/>
            <Splash titleText={props.title} hideCTA/>
            <Position title={props.title} />
            <ContactForm formType="position" positionTitle={props.title} />
            <About showTitle={true}/>
            <Tech/>
            <Projects/>
            <Office/>
            <News/>
            <Investors/>
            <Footer/>
        </Fragment>
    )
}

export default PositionPage;