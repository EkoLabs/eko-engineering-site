
import React, {Fragment} from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ContactForm from "../../components/contactform/ContactForm";
import "./LandingPageQa.scss";

export default function LandingPageQa(props){
    return (
        <div className="landingPageQa">
            <Header/>
            <section className="splash">
                <div className="content">
                    <div className="left">
                        <div className="titleContainer">
                            <h1>eko</h1>
                            <h2>engineering</h2>
                        </div>
                    </div>
                    <div className="right">
                        <h3>If you want to reinvent the QA process in a one-of-a-kind environment, <em>we should talk.</em></h3>
                    </div>
                </div>
            </section>
            <section className="points">
                <div class="content">
                    <h5>Here's the deal</h5>
                    <ul>
                        <li>eko is the world's only choice-driven content creation and publishing platform</li>
                        <li>To us, QA engineers are first-class citizens</li>
                        <li>You’ll lead projects from start to finish</li>
                        <li>Be an integral part of a cross-functional team</li>
                        <li>Provide critical insights and input throughout the product dev process</li>
                        <li>Explore real-world CI/CD automation scripts and scenarios</li>
                        <li>Shape the future of eCommerce and digital entertainment</li>
                        <li>Deliver features to millions of viewers</li>
                        <li>Oh, did we mention that you’ll be joining <a href="https://www.duns100.co.il/rating/%D7%94%D7%99%D7%99%D7%98%D7%A7/%D7%94%D7%A1%D7%98%D7%90%D7%A8%D7%98%D7%90%D7%A4%D7%99%D7%9D_%D7%A9%D7%94%D7%9B%D7%99_%D7%98%D7%95%D7%91_%D7%9C%D7%A2%D7%91%D7%95%D7%93_%D7%91%D7%94%D7%9D#eko" target="_blank">one of Israel’s top 20 startups to work for in 2020 by Dun & Bradstreet?</a></li>
                    </ul>
                    <div class="wrapup">We’re looking for good people, so if any or all speak to you, let’s talk.</div>
                </div>
            </section>
            <ContactForm formType={'position'} positionTitle="LandingPageQA"/>
            <Footer/>
        </div>
    );
}
