import React from "react";
import ReactMarkdown from "react-markdown";
import "./Position.scss";
import careersData from '../../careersData';


function Position(props){
    let positionData = careersData.positions.find(position => position.title === props.title);
    let introText;
    if (positionData.introText) {
        introText = <ReactMarkdown source={positionData.introText} />
    } else {
        introText = <ReactMarkdown source={careersData.generalText} />
    }

    return (
        <section className="position">
            <div className="content">
                {introText}
                <hr/>
                <ReactMarkdown source={positionData.text} />

                <h5>About eko</h5>
                <p>eko is the world's only choice-driven content creation and publishing platform. We empower creators to deliver seamless, live-action interactive video experiences through a world-class creative suite, eko Studio, and a highly sophisticated, feature-packed video player.</p>
                <p>Our content to commerce platform combines personalized interactive video, easy to use tools, and turnkey creative solutions to transform eCommerce and introduce consumers to a world of purchase confidence, inspiration, and discovery.</p>  
                <p>We collaborate with the world's most exciting and innovative talent, marketers, brands, and creatives to bring our patented technology to millions of viewers, who can now drive, personalize, and affect the outcomes of their journeys and enjoy experiences that are truly shaped by their choices.</p>

                <h5>About eko engineering</h5>
                <p>We come from diverse engineering backgrounds: from web and design to hardware and embedded systems. We’re also passionate about art, entertainment, technology and everything in between. It’s our unique mix of talents and passions which puts us at the forefront of interactive video.</p>
                <p>Our core technology enables generating and manipulating media streams in real time so we’re constantly solving complex problems by combining proven solutions with bold ideas.</p>

                <h5>Want To Get To Know Us Even Better?</h5>
                <ul>
                    <li>Play with our <a target='_blank' href="https://eko.com/">interactive videos</a> and visit our <a target='_blank' href="https://developer.eko.com">developers site</a>.</li>
                    <li>Find out what makes us laugh on <a target='_blank' href="https://twitter.com/ekoengi?lang=en">Twitter</a>.</li>
                    <li>Discover what keeps our wheels turning on <a target='_blank' href="https://medium.com/ekoengineering">Medium</a>.</li>
                    <li>Check out our open source projects on <a target='_blank' href="https://github.com/EkoLabs">Github</a> (We're especially excited for <a target='_blank' href="https://eko.engineering/sonorous/">Sonorous</a> - our new library for audio on the web)</li>
                </ul>

                <div className="legal">
                    <p>Applicants must be legally permitted to work in Israel or in the USA and paperwork will be verified prior to and as a condition to hire.</p>

                    <p>JBF Interlude 2009 Ltd. is an equal opportunity employer and considers all candidates for employment regardless of race, color, religion, sex, national origin, citizenship, age, disability, marital status, military or veteran's status (including protected veterans, as may be required by federal law), sexual orientation, gender identity or any other category protected by law.</p>
                </div>
            </div>
        </section>
    )
}

export default Position;