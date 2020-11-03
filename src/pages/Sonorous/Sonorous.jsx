import React, {Fragment, useState, useEffect} from "react";
import Footer from "../../components/footer/Footer";
import "./Sonorous.scss";

import logoImage from './sonorous_logo.svg';
import iconApi from './browser_plugs.svg';
import iconnMemoryManagement from './db_cogs.svg';
import iconCrossBrowser from './devices.svg';
import Header from "../../components/header/Header";

const desktopBreakpoint = 1150;


let features = [
    {
        icon:iconApi,
        text: 'Easy to use API'
    },
    {
        icon: iconnMemoryManagement,
        text: 'Memory Management'
    },
    {
        icon: iconCrossBrowser,
        text: 'Cross-Browser Support'
    }
]
.map((item, i) => (
    <li className={`item-container`} key={i}>
        <div className="icon">
            <img src={item.icon} alt={item.text} />
            <div className="caption">{item.text}</div>
            <svg version="1.1" width="100%" viewBox="-100 -100 500 500">
                <polygon fill="red" className="glow" points="300,150 225,280 75,280 0,150 75,20 225,20" transform="scale(1.3) translate(-37 -34)" filter="url(#purple-glow)"></polygon>
                <polygon className="hex" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
            </svg>
        </div>
    </li>
));

function Sonorous(props){
    const [isDesktop, setDesktop] = useState(window.innerWidth > desktopBreakpoint);
    const updateMedia = () => {
        setDesktop(window.innerWidth > desktopBreakpoint);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    }, []);

    let codepenId = isDesktop ? 'PoPQwaz' : 'xxwRMBw';

    return (
        <Fragment>
            <a href="https://github.com/EkoLabs/sonorous" className="github-corner" aria-label="View source on GitHub">
                <svg width="80" height="80" viewBox="0 0 250 250"
                     aria-hidden="true">
                    <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                    <path
                        d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                        fill="currentColor" style={{transformOrigin: '130px 106px'}} className="octo-arm"></path>
                    <path
                        d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                        fill="currentColor" className="octo-body"></path>
                </svg>
            </a>
            <Header/>
            <section className="sonorous">
                <div className="content">
                    <header>
                        <img src={logoImage} alt="Sonorous.js Logo" title="Sonorous"/>
                        <div className="text">
                            <h1>Sonorous<span> . js</span></h1>
                            <h2>Sonorous.js is a JavaScript audio library built for the modern browser. It enables easy audio integration into web apps and games using WebAudio APIs, with fine-grained control for those who need it, while handling any cross-browser issues for you.</h2>
                        </div>
                    </header>
                    <iframe scrolling="no" title="Sonorous Example" className="codepen"
                            src={`https://codepen.io/OpherV/embed/${codepenId}?height=265&theme-id=dark&default-tab=result`}
                            frameBorder="no" allowTransparency="true" allowFullScreen="true" loading="lazy">
                        See the Pen <a href='https://codepen.io/OpherV/pen/xxwRMBw'>Sonorous Example</a>
                    </iframe>
                    <svg className="defs">
                        <filter id="purple-glow" x="-5000%" y="-5000%" width="10000%" height="10000%">
                            <feFlood result="flood" floodColor="#b75ab9" floodOpacity="0.6"></feFlood>
                            <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
                            <feGaussianBlur in="mask" result="blurred" stdDeviation="25"></feGaussianBlur>
                            <feMerge>
                                <feMergeNode in="blurred"></feMergeNode>
                            </feMerge>
                        </filter>
                    </svg>

                </div>
            </section>
            <section className="features">
                <ul className="content">{features}</ul>
            </section>
            <section className="menu">
                <ul className="content">
                    <li><a href="https://github.com/EkoLabs/sonorous#examples">Examples</a></li>
                    <li><a href="https://github.com/EkoLabs/sonorous#sonorous">Docs</a></li>
                    <li><a href="https://github.com/EkoLabs/sonorous/issues">Support</a></li>
                    <li><a href="https://github.com/EkoLabs/sonorous#contributing">Contribute</a></li>
                </ul>
            </section>
            <section className="shoutout">by the <a href="/" className="logo">eko <span>Engineering</span></a> team </section>
            <section className="moreOpenSource">More <a href="https://github.com/ekolabs">Open Source</a> projects coming soon!</section>
            <Footer/>
        </Fragment>
    )
}

export default Sonorous;