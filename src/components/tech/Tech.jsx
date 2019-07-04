import React from "react";
import "./Tech.scss";

import videoPlaceholder from "./video_placeholder.png";

function Tech(){
    return (
        <section className="tech">
            <div className="content">
                <div className="left">
                    <div className="preview">
                        <img src={videoPlaceholder} />
                    </div>
                </div>
                <div className="right">
                    <h4>What We're Working On</h4>
                    <div className="item">
                        <h5><a href="https://helloeko.com">Interactive Video Playback</a></h5>
                        <div className="text">
                            Our core technology allows viewers to completely control the narrative by composing audio/video streams in real-time on multiple devices. Our intelligent video player & cloud-based media services predict & optimize available bandwidth to load potential paths ahead using advanced streaming algorithms.
                        </div>
                    </div>
                    <div className="item">
                        <h5><a href="https://studio.helloeko.com">Creation Tools</a></h5>
                        <div className="text">
                            Eko Studio: A powerful WYSIWYG editor that enables teams of film makers, editors, designers & developers to collaborate on an interactive video project from conception to delivery.
                        </div>
                    </div>
                    <div className="item">
                        <h5><a href="https://developer.helloeko.com">JavaScript Framework</a></h5>
                        <div className="text">
                            A robust, modern framework for developing interactions that allows developers to completely customize Eko projects by adding logic, UI, API integration or anything else they can dream of.
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
    );
}

export default Tech;
