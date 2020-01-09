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
                Check out our <a href="https://eko.com" target="_blank" rel="noopener noreferrer">website</a> and the <a href="https://developer.eko.com" target="_blank"  rel="noopener noreferrer">developers site</a> to get a better sense of what it’s all about.
                <hr/>
                <ReactMarkdown source={positionData.text} />
                <div className="legal">
                    <p>Applicants must be legally permitted to work in Israel or in the USA and paperwork will be verified prior to and as a condition to hire.</p>

                    <p>JBF Interlude 2009 Ltd. is an equal opportunity employer and considers all candidates for employment regardless of race, color, religion, sex, national origin, citizenship, age, disability, marital status, military or veteran's status (including protected veterans, as may be required by federal law), sexual orientation, gender identity or any other category protected by law.</p>
                </div>
            </div>
        </section>
    )
}

export default Position;