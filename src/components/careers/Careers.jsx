import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor'
import "./Careers.scss";

import scanlines from "./scanlines.png";
import frontEndCorgi from "./frontend_corgi.png";
import backEndCorgi from "./backend_corgi.png";
import fullstackCorgi from "./fullstack_corgi.png";
import devopsCorgi from "./devops_corgi.png";
import qaCorgi from "./qa_corgi.png";
import koala from "./koala.png";

function Careers(){

    return (

        <section className="careers">
            <svg className="filters" version="1.1" width="100%" viewBox="-100 -100 500 500">
                <defs>
                    <filter id="scanlinesCutout">
                        <feImage result="photo" xlinkHref={scanlines} width="500" height="500"/>
                        <feComposite operator="in" in="photo" in2="SourceGraphic"/>
                    </filter>
                </defs>
            </svg>
            <ScrollableAnchor id={'careers'}>
                <div className="content">
                    <h4>Choose your own adventure</h4>
                    <ul className="positions">
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
                                <div className="description"><a href="/positions/junior-frontend-developer">Junior</a> / <a href="/positions/senior-frontend-developer">Senior</a></div>
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
                                <div className="description"><a href="/positions/junior-backend-developer">Junior</a> / <a href="/positions/senior-backend-developer">Senior</a></div>
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
                                <div className="description"><a href="/positions/junior-fullstack-developer">Junior</a> / <a href="/positions/senior-fullstack-developer">Senior</a></div>
                            </div>
                        </li>
                        <li className="position">
                            <div className="icon">
                                <svg version="1.1" width="100%" viewBox="-100 -100 500 500">
                                    <defs>
                                        <mask id="devopsCorgi">
                                            <polygon fill="white" points="300,150 222,280 115,280 -20,320 0,-50 300,-50"></polygon>
                                        </mask>
                                    </defs>
                                    <polygon fill="red" className="glow" points="300,150 225,280 75,280 0,150 75,20 225,20" transform="scale(1.3) translate(-37 -34)" filter="url(#purple-glow)"></polygon>
                                    <polygon className="hex" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
                                    <g mask="url(#devopsCorgi)">
                                        <image xlinkHref={devopsCorgi} width="203" height="228" transform="scale(1.7) translate(-10 0)" />
                                        <g filter="url(#scanlinesCutout)" transform="translate(0 0)" opacity="0.4">
                                            <image xlinkHref={devopsCorgi} width="203" height="228" transform="scale(1.7) translate(-10 0)" />
                                        </g>
                                    </g>

                                </svg>
                            </div>
                            <div className="item">
                                <div className="title">DevOps</div>
                                <div className="description"><a href="/positions/devops-engineer">Engineer</a></div>
                            </div>
                        </li>
                        {
                        // <li className="position">
                        //     <div className="icon">
                        //         <svg version="1.1" width="100%" viewBox="-100 -100 500 500">
                        //             <defs>
                        //                 <mask id="qaCorgi">
                        //                     <polygon fill="white"
                        //                              points="300,150 300,350 0,280 0,150 75,20 225,20"></polygon>
                        //                 </mask>
                        //             </defs>
                        //             <polygon fill="red" className="glow"
                        //                      points="300,150 225,280 75,280 0,150 75,20 225,20"
                        //                      transform="scale(1.3) translate(-37 -34)"
                        //                      filter="url(#purple-glow)"></polygon>
                        //             <polygon className="hex"
                        //                      points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
                        //             <g mask="url(#qaCorgi)">
                        //                 <image xlinkHref={qaCorgi} width="203" height="228"
                        //                        transform="scale(1.3) translate(22 32)"/>
                        //                 <g filter="url(#scanlinesCutout)" transform="translate(0 0)" opacity="0.4">
                        //                     <image xlinkHref={qaCorgi} width="203" height="228"
                        //                            transform="scale(1.3) translate(22 32)"/>
                        //                 </g>
                        //             </g>
                        //
                        //         </svg>
                        //     </div>
                        //     <div className="item">
                        //         <div className="title">QA</div>
                        //         <div className="description"><a href="/positions/manual-qa-engineer">Engineer</a>
                        //         </div>
                        //     </div>
                        // </li>
                        }
                        <li className="position">
                            <div className="icon">
                                <svg version="1.1" width="100%" viewBox="-100 -100 500 500">
                                    <defs>
                                        <mask id="koala">
                                            <polygon fill="white" points="300,150 300,280 0,280 0,150 75,20 225,20"></polygon>
                                        </mask>
                                    </defs>
                                    <polygon fill="red" className="glow" points="300,150 225,280 75,280 0,150 75,20 225,20" transform="scale(1.3) translate(-37 -34)" filter="url(#purple-glow)"></polygon>
                                    <polygon className="hex" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
                                    <g mask="url(#koala)">
                                        <image xlinkHref={koala} width="230" height="352" transform="scale(1.3) translate(0 -35)" />
                                        <g filter="url(#scanlinesCutout)" transform="translate(0 0)" opacity="0.4">
                                            <image xlinkHref={koala} width="230" height="352" transform="scale(1.3) translate(0 -35)" />
                                        </g>
                                    </g>

                                </svg>
                            </div>
                            <div className="item">
                                <div className="title">Something else?</div>
                                <div className="description"><a href="/positions/something-else">Send us your resume anyway!</a></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </ScrollableAnchor>
        </section>
    );
}

export default Careers;