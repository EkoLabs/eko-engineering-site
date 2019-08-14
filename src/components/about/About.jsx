import React from 'react';
import "./About.scss";
import createIcon from './icon_bulb.svg';
import designIcon from './icon_monitor_paint.svg';
import buildIcon from './icon_tools.svg';
import developersIcon from './icon_developers.svg';
import ScrollableAnchor from "react-scrollable-anchor";

function About(props) {

    let itemData = [
        {
            icon: createIcon,
            title: 'We Create',
            description: 'We come from diverse engineering backgrounds: from web and design to hardware and embedded systems. We’re also passionate about art, entertainment, technology and everything in between. It’s our unique mix of talents and passions which puts us at the forefront of interactive video.'
        },
        {
            icon: designIcon,
            title: 'We Design Experiences',
            description: 'We’re excited about making experiences that are not only clear but engaging and fun. Get ready for a world full of motion and animations over a wide range of clients such as webapps, mobile, Xbox, Steam, VR and smart TVs apps.'
        },
        {
            icon: buildIcon,
            title: 'We Build Cool Stuff',
            description: 'Our core technology enables generating and manipulating media streams in real time. On top of that, our scalable cloud-based system serves our creators and millions of viewers. We’re constantly solving complex problems by combining proven solutions with bold ideas. '
        },
        {
            icon: developersIcon,
            title: 'We ARE Developers',
            description: 'As a developer at eko, you’ll be creating the tech and infrastructure for a new era of digital storytelling. Choose your own hardware and software as you lead projects, take an active part in the creative process, enjoy a flat organizational structure and push interactive video to the edge, or over it!'
        },
    ];

    let items = itemData.map((item, i) => (
        <div className="item-container" key={i}>
            <div className="icon">
                <img src={item.icon} alt={item.title} />
                <svg version="1.1" width="100%" viewBox="-100 -100 500 500">
                    <polygon fill="red" className="glow" points="300,150 225,280 75,280 0,150 75,20 225,20" transform="scale(1.3) translate(-37 -34)" filter="url(#purple-glow)"></polygon>
                    <polygon className="hex" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
                </svg>
            </div>
            <div className="item" key={i}>
                <div className="title">{item.title}</div>
                <div className="description">{item.description}</div>
            </div>
        </div>
    ));
                                 
    return (
        <ScrollableAnchor id={'about'}>
            <section>
                { props.showTitle && <h4>About us</h4> }
                <div className="about-inner">
                    <svg className="defs">
                        <filter id="purple-glow" x="-5000%" y="-5000%" width="10000%" height="10000%">
                            <feFlood result="flood" flood-color="#b75ab9" flood-opacity="0.6"></feFlood>
                            <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
                            <feGaussianBlur in="mask" result="blurred" stdDeviation="25"></feGaussianBlur>
                            <feMerge>
                                <feMergeNode in="blurred"></feMergeNode>
                            </feMerge>
                        </filter>
                    </svg>
                    <div className="content about">
                        {items}
                    </div>
                </div>
            </section>
        </ScrollableAnchor>
    );
};

export default About;
