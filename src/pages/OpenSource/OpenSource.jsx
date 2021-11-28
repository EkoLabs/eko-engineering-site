import React, {Fragment} from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import githubIcon from "./github_icon.png";

import "./OpenSource.scss";

let featuredProjects = [
    {
        url: "/sonorous",
        thumbnail:"https://user-images.githubusercontent.com/3951311/81201022-71e32280-8fcd-11ea-9b9d-6adcf7fa6394.png",
        name: 'Sonorous.js',
        description: "a JavaScript audio library that streamlines working with web audio, enabling easy audio integration into web apps and games"
    },
    {
        url: "/iframily",
        thumbnail:"https://camo.githubusercontent.com/9720e251a8dae2a3eda2f89d4bb9db497eb50c0349dc9efed0e53f3b45ad6157/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f656b6f2e636f6d2f732f696672616d696c792f636f646570656e2d7465747269732e706e67",
        name: 'iFramily',
        description: "Simplifies working and establishing communication between frames. It provides a simpler API than postMessage, which includes Promise-based responses, message queuing, and holding on to messages until both frames are ready to talk."
    },
]
    .map((item, i) => (
        <li className={`item-container`} key={i}>
            <div className="thumbnail">
                <div className="frameContent">
                    <div className="image" style={{backgroundImage: `url(${item.thumbnail})`}}></div>
                </div>
                <div className="glow"></div>
            </div>
            <div className="content">
                <h4><a href={item.url}>{item.name}</a></h4>
                <div className="description">{item.description}</div>
            </div>
        </li>
    ));

let projects = [
    {
        url: "https://github.com/EkoLabs/eko-js-sdk",
        thumbnail: githubIcon,
        name: 'eko-js-sdk',
        description: "A lightweight SDK that allows for easy integration of eko videos into webpages"
    },
    {
        url: "https://github.com/EkoLabs/eko-react-sdk",
        thumbnail:githubIcon,
        name: 'eko-react-sdk',
        description: "A React component wrapper for eko-js-sdk which enables easy integration of eko videos into React apps"
    },
    {
        url: "https://github.com/EkoLabs/ios-native-sdk",
        thumbnail: githubIcon,
        name: 'ios-native-sdk',
        description: "A lightweight SDK that allows for easy integration of eko videos into an ios app"
    },
]
    .map((item, i) => (
        <li className={`item-container`} key={i}>
            <div className="icon">
                <svg version="1.1" width="100%" viewBox="-100 -100 500 500">
                    <polygon fill="red" className="glow" points="300,150 225,280 75,280 0,150 75,20 225,20" transform="scale(1.3) translate(-37 -34)" filter="url(#purple-glow)"></polygon>
                    <polygon className="hex" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
                    <g mask="url(#hexMask)">
                        <rect fill="black" width={300} height={300}></rect>
                        <image xlinkHref={item.thumbnail} width="300" height="300" transform="scale(0.72) translate(60 55)" />
                    </g>

                </svg>
            </div>
            <div className="content">
                <h4><a href={item.url}>{item.name}</a></h4>
                <div className="description">{item.description}</div>
            </div>
        </li>
    ));

function OpenSource(props){

    return (
        <Fragment>
            <Header/>
            <h3>eko 💖 Open Source</h3>
            <ul className="featuredOsProjects">
                {featuredProjects}
            </ul>

            <h5 className="ornament">More from EkoLabs<small> (the fancy name for our <a href="https://github.com/EkoLabs">Github</a> page)</small></h5>
            <svg version="1.1" width="100%" viewBox="-100 -100 500 500" className="svgDef">
                <defs>
                    <mask id="hexMask">
                        <polygon fill="white" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
                    </mask>
                    <filter id="purple-glow" x="-5000%" y="-5000%" width="10000%" height="10000%">
                        <feFlood result="flood" floodColor="#b75ab9" floodOpacity="0.5"></feFlood>
                        <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
                        <feGaussianBlur in="mask" result="blurred" stdDeviation="55"></feGaussianBlur>
                        <feMerge>
                            <feMergeNode in="blurred"></feMergeNode>
                        </feMerge>
                    </filter>
                </defs>
            </svg>
            <ul className="osProjects">
                {projects}
            </ul>
            <Footer/>
        </Fragment>
    )
}

export default OpenSource;