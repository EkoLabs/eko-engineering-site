import React from "react";
import "./Tech.scss";
import videoPlaceholder from "./video_placeholder.png";
import techVideo from './tech_video.mp4'
import ScrollableAnchor from "react-scrollable-anchor";

function Tech(){


    return (
        <ScrollableAnchor id={'tech'}>
            <section className="tech" id="tech">
                <div className="reel">
                    <div className="wash" />
                    <video className="reel" autoPlay loop muted playsInline webkit-playsinline="true" poster={videoPlaceholder}>
                        <source src={techVideo} type='video/mp4'/>
                        <img src={videoPlaceholder} title='Your browser does not support the <video> tag'
                             alt="Eko Engineering Reel"/>
                    </video>
                </div>
                <div className="content">
                    <h4>What we're working on</h4>
                    <div className="items">
                        <div className="item">
                            <h5>Interactive Video Playback</h5>
                            <div className="text">
                                Our core technology allows viewers to completely control the narrative by composing audio/video streams in real-time on multiple devices. Our intelligent video player & cloud-based media services predict & optimize available bandwidth to load potential paths ahead using advanced streaming algorithms. 
                                <a target="_blank" rel="noopener noreferrer" href="https://helloeko.com"> Learn more</a>
                            </div>
                        </div>
                        <div className="item">
                            <h5>Creation Tools</h5>
                            <div className="text">
                                eko Studio: A powerful WYSIWYG editor that enables teams of film makers, editors, designers & developers to collaborate on an interactive video project from conception to delivery.
                                <a target="_blank" rel="noopener noreferrer" href="https://studio.helloeko.com"> Learn more</a>
                            </div>
                        </div>
                        <div className="item">
                            <h5>JavaScript Framework</h5>
                            <div className="text">
                                A robust, modern framework for developing interactions that allows developers to completely customize eko projects by adding logic, UI, API integration or anything else they can dream of.
                                <a  target="_blank" rel="noopener noreferrer" href="https://developer.helloeko.com"> Learn more</a>
                            </div>
                        </div>
                        <div className="item">
                            <h5>Media Delivery</h5>
                            <div className="text">
                                Our cloud infrastructure takes care of media encoding, transcoding & media delivery which turns standard input files into non-linear compatible nodes.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollableAnchor>
    );
}

export default Tech;
