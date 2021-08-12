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
        url: "https://github.com/EkoLabs/iframily",
        thumbnail:"https://user-images.githubusercontent.com/3951311/81201022-71e32280-8fcd-11ea-9b9d-6adcf7fa6394.png",
        name: 'iFramily',
        description: "Simplifies working and establishing communication between frames. It provides a simpler API than postMessage, which includes Promise-based responses, message queuing, and holding on to messages until both frames are ready to talk."
    },
    {
        url: "https://github.com/EkoLabs/react-native-background-downloader",
        thumbnail: "https://camo.githubusercontent.com/217ce718b1223d4366aae38e1430b51ef1c586c0fbd29b87e4bbfbdb2056335f/68747470733a2f2f643177327a686e716379346c38662e636c6f756466726f6e742e6e65742f636f6e74656e742f66616c636f6e2f70726f64756374696f6e2f70726f6a656374732f563545454f585f666173742f524e42442d3139303730323038333335382e706e67",
        name: 'react-native-background-downloader',
        description: "A library for React-Native to help you download large files on iOS and Android both in the foreground and most importantly in the background."
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
        url: "https://github.com/EkoLabs/eko-js-sdk",
        thumbnail:githubIcon,
        name: 'eko-react-sdk',
        description: "A react-based library for managing complex animations"
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

            <h5>More from EkoLabs<small> (the fancy name for our <a href="https://github.com/EkoLabs">Github</a> page)</small></h5>
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