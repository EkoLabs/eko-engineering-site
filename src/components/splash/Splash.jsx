import React from "react";
import "./Splash.scss";

function Splash(props) {
    return (
        <section className="splash">
            <div className="content">
                <div className="left">
                    <div className="titleContainer">
                        <h1>Eko</h1>
                        <h2>Engineering</h2>
                    </div>
                </div>
                <div className="right">
                    <h2>We're all about <em>choice</em></h2>
                    <h3>Join our team and help us blur the lines between TV and video games</h3>
                    {
                        !props.hideCTA &&
                        (<a className="zoomInButton" href="/#careers">
                            <div className="frameContent">Zoom In</div>
                        </a>)
                    }
                </div>
            </div>
        </section>
    );
}

export default Splash;
