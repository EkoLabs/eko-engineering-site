import React from "react";
import "./Tech.scss";
import videoPlaceholder from "./video_placeholder.png";
import techVideo from './tech_video.mp4'
import ScrollableAnchor from "react-scrollable-anchor";

function Tech(){

    let preview = (
        <div className="preview">
            <video autoPlay loop muted playsInline webkit-playsinline="true" poster={videoPlaceholder}>
                <source src={techVideo} type='video/mp4' />
                <img src={videoPlaceholder} title='Your browser does not support the <video> tag' alt="eko.Enigneering"/>
            </video>
        </div>
    );

    return (
        <ScrollableAnchor id={'tech'}>
            <section className="tech" id="tech">
                <div className="content">
                    <div className="left">
                        {preview}
                    </div>
                    <div className="right">
                        <h4>What We're Working On</h4>
                        {preview}
                        <div className="item">
                            <h5><a href="https://helloeko.com">Interactive Video Playback</a></h5>
                            <div className="text">
                                Our core technology allows viewers to completely control the narrative by composing audio/video streams in real-time on multiple devices. Our intelligent video player & cloud-based media services predict & optimize available bandwidth to load potential paths ahead using advanced streaming algorithms.
                            </div>
                        </div>
                        <div className="item">
                            <h5><a href="https://studio.helloeko.com">Creation Tools</a></h5>
                            <div className="text">
                                eko Studio: A powerful WYSIWYG editor that enables teams of film makers, editors, designers & developers to collaborate on an interactive video project from conception to delivery.
                            </div>
                        </div>
                        <div className="item">
                            <h5><a href="https://developer.helloeko.com">JavaScript Framework</a></h5>
                            <div className="text">
                                A robust, modern framework for developing interactions that allows developers to completely customize eko projects by adding logic, UI, API integration or anything else they can dream of.
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
