
import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ContactForm from "../../components/contactform/ContactForm";
import "./LandingPageDev.scss";
import frontEndCorgi from "../../components/careers/frontend_corgi.png";
import backEndCorgi from "../../components/careers/backend_corgi.png";
import fullstackCorgi from "../../components/careers/fullstack_corgi.png";
import devopsCorgi from "../../components/careers/devops_corgi.png";
import scanlines from "../../components/careers/scanlines.png";

export default function LandingPageDev(props){
    return (
        <div className="landingPageDev">
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
                        <h3>If you’ve pushed code at scale and you know what that challenge really means, <em>we should talk.</em></h3>
                    </div>
                </div>
            </section>
            <section className="points">
                <div class="content">
                    <h5>Here's the deal</h5>
                    <ul>
                        <li>eko is the world's only choice-driven content creation and publishing platform</li>
                        <li>To us, developers are first-class citizens</li>
                        <li>You’ll lead projects from start to finish</li>
                        <li>Use cutting-edge and experimental features</li>
                        <li>Take JavaScript to the extreme</li>
                        <li>Shape the future of eCommerce and digital entertainment</li>
                        <li>Deliver features to millions of viewers</li>
                        <li>Oh, did we mention that you’ll be joining <a rel="noopener noreferrer" href="https://www.duns100.co.il/rating/%D7%94%D7%99%D7%99%D7%98%D7%A7/%D7%94%D7%A1%D7%98%D7%90%D7%A8%D7%98%D7%90%D7%A4%D7%99%D7%9D_%D7%A9%D7%94%D7%9B%D7%99_%D7%98%D7%95%D7%91_%D7%9C%D7%A2%D7%91%D7%95%D7%93_%D7%91%D7%94%D7%9D#eko" target="_blank">one of Israel’s top 20 startups to work for in 2020 by Dun & Bradstreet?</a></li>
                    </ul>
                    <div class="wrapup">If you’ve read this far, there’s a good chance we’d make a perfect match!</div>
                </div>
            </section>
            <section className="positions">
                <div className="content">
                    <svg className="filters" version="1.1" width="100%" viewBox="-100 -100 500 500">
                        <defs>
                            <filter id="scanlinesCutout">
                                <feImage result="photo" xlinkHref={scanlines} width="500" height="500"/>
                                <feComposite operator="in" in="photo" in2="SourceGraphic"/>
                            </filter>
                            <filter id="purple-glow" x="-5000%" y="-5000%" width="10000%" height="10000%">
                                <feFlood result="flood" floodColor="#b75ab9" floodOpacity="0.6"></feFlood>
                                <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
                                <feGaussianBlur in="mask" result="blurred" stdDeviation="25"></feGaussianBlur>
                                <feMerge>
                                    <feMergeNode in="blurred"></feMergeNode>
                                </feMerge>
                            </filter>
                        </defs>
                    </svg>
                    <h4>Also, you might be used to job titles like:</h4>
                    <ul className="positionList">
                        <li className="position">
                            <div className="icon">
                                <svg version="1.1" width="100%" viewBox="-100 -100 500 500">
                                    <defs>
                                        <mask id="frontendCorgi">
                                            <polygon fill="white" points="300,150 225,280 75,280 0,150 0,-50 300,-50"></polygon>
                                        </mask>
                                    </defs>
                                    <polygon fill="red" className="glow" points="300,150 225,280 75,280 0,150 75,20 225,20" transform="scale(1.3) translate(-37 -34)" filter="url(#purple-glow)"></polygon>
                                    <polygon className="hex" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
                                    <g mask="url(#frontendCorgi)">
                                        <image xlinkHref={frontEndCorgi} width="230" height="352" transform="scale(0.9) translate(18 -55)" />
                                        <g filter="url(#scanlinesCutout)" transform="translate(0 0)" opacity="0.4">
                                            <image xlinkHref={frontEndCorgi} width="230" height="352" transform="scale(0.9) translate(18 -55)" />
                                        </g>
                                    </g>

                                </svg>
                            </div>
                            <div className="item">
                                <div className="title">FRONTEND</div>
                            </div>
                        </li>
                        <li className="position">
                            <div className="icon">
                                <svg version="1.1" width="100%" viewBox="-100 -100 500 500">
                                    <defs>
                                        <mask id="backendCorgi">
                                            <polygon fill="white" points="300,150 300,280 0,280 0,150 75,20 225,20"></polygon>
                                        </mask>
                                    </defs>
                                    <polygon fill="red" className="glow" points="300,150 225,280 75,280 0,150 75,20 225,20" transform="scale(1.3) translate(-37 -34)" filter="url(#purple-glow)"></polygon>
                                    <polygon className="hex" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>

                                    <g mask="url(#backendCorgi)">
                                        <image xlinkHref={backEndCorgi} width="262" height="210" transform="scale(1.05) translate(11 45)" />
                                        <g filter="url(#scanlinesCutout)" transform="translate(0 0)" opacity="0.4">
                                            <image xlinkHref={backEndCorgi} width="262" height="210" transform="scale(1.05) translate(11 45)"/>
                                        </g>
                                    </g>

                                </svg>
                            </div>
                            <div className="item">
                                <div className="title">BACKEND</div>
                            </div>
                        </li>
                        <li className="position">
                            <div className="icon">
                                <svg version="1.1" width="100%" viewBox="-100 -100 500 500">
                                    <defs>
                                        <mask id="fullstackCorgi">
                                            <polygon fill="white" points="400,150 400,280 75,280 0,150 75,20 400,20"></polygon>
                                        </mask>
                                    </defs>
                                    <polygon fill="red" className="glow" points="300,150 225,280 75,280 0,150 75,20 225,20" transform="scale(1.3) translate(-37 -34)" filter="url(#purple-glow)"></polygon>
                                    <polygon className="hex" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>

                                    <g mask="url(#fullstackCorgi)">
                                        <image xlinkHref={fullstackCorgi} width="288" height="127" transform="scale(1.3) translate(-35 45)" />
                                        <g filter="url(#scanlinesCutout)" transform="translate(0 0)" opacity="0.4">
                                            <image xlinkHref={fullstackCorgi} width="288" height="127" transform="scale(1.3) translate(-35 45)"/>
                                        </g>
                                    </g>

                                </svg>
                            </div>
                            <div className="item">
                                <div className="title">FULLSTACK</div>
                            </div>
                        </li>
                        <li className="position">
                            <div className="icon">
                                <svg version="1.1" width="100%" viewBox="-100 -100 500 500">
                                    <defs>
                                        <mask id="devopsCorgi">
                                            <polygon fill="white" points="300,150 225,280 75,280 0,280 0,-50 300,-50"></polygon>
                                        </mask>
                                    </defs>
                                    <polygon fill="red" className="glow" points="300,150 225,280 75,280 0,150 75,20 225,20" transform="scale(1.3) translate(-37 -34)" filter="url(#purple-glow)"></polygon>
                                    <polygon className="hex" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
                                    <g mask="url(#devopsCorgi)">
                                        <image xlinkHref={devopsCorgi} width="390" height="369" transform="scale(0.8) translate(0 40)" />
                                        <g filter="url(#scanlinesCutout)" transform="translate(0 0)" opacity="0.4">
                                            <image xlinkHref={devopsCorgi} width="390" height="369" transform="scale(0.8) translate(0 40)" />
                                        </g>
                                    </g>

                                </svg>
                            </div>
                            <div className="item">
                                <div className="title">DevOps</div>
                            </div>
                        </li>
                    </ul>
                    <div class="caption1">But we don’t care about labels.</div>
                    <div class="caption2">We’re looking for good people, so if any or all speak to you, let’s talk.</div>
                </div>
            </section>
            <ContactForm formType={'position'} positionTitle="Senior Fullstack Developer"/>
            <Footer/>
        </div>
    );
}