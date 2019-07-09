import React from 'react';
import "./About.scss";
import createIcon from './icon_bulb.svg';
import designIcon from './icon_monitor_paint.svg';
import buildIcon from './icon_tools.svg';
import developersIcon from './icon_developers.svg';
import ScrollableAnchor from "react-scrollable-anchor";

function About(props) {
    props = {
        title: 'About us',
        items: [
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
                description: 'As a developer at Eko, you’ll be creating the tech and infrastructure for a new era of digital storytelling. Choose your own hardware and software as you lead projects, take an active part in the creative process, enjoy a flat organizational structure and push interactive video to the edge, or over it!'
            },
        ]
    };

    let items = props.items.map((item, i) => (
        <div className="item-container">
            <div className="item" key={i}>
                <img src={item.icon} alt={item.title} />
                <div className="about-title">{item.title}</div>
                <div className="about-description">{item.description}</div>
            </div>
        </div>
    ));

    return (
        <ScrollableAnchor id={'about'}>
            <section>
                <div className="about-inner">
                    <div className="content about">
                        <h4>{props.title}</h4>
                        {items}
                    </div>
                </div>
            </section>
        </ScrollableAnchor>
    );
};

export default About;
