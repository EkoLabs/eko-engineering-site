import React, { useEffect, useState} from "react";

import "./Position.scss";
import careersData from '../../careersData';

const GREENHOUSE_JOB_URL = "https://boards-api.greenhouse.io/v1/boards/ekoisrael/jobs/JOBID?questions=true";

function Position(props){
    let positionData = careersData.positions.find(position => position.title === props.title);
    const [positionText, setPositionText] = useState(null)
    const [positionError, setPositionError] = useState()

    useEffect(()=>{
        let urlToFetch = GREENHOUSE_JOB_URL.replace(/JOBID/, positionData.greenhouseId);
        fetch(urlToFetch)
            .then(response => response.json())
            .then(data => {
                setPositionText(htmlDecode(data.content));
            })
            .catch(error => {
                console.error(error);
                setPositionError(true);
            })

    },[])


    let positionTextMarkup = {__html: positionText};

    return (
        <section className="position">
            <div className="content">
                { positionText === null && !positionError &&
                <div style={{textAlign: 'center'}}>
                    Sending a fetch request to get information about the position...
                </div> }
                { positionText && <div dangerouslySetInnerHTML={positionTextMarkup} />}
                { positionError && <div>
                    Oh no! Something went wrong while fetching information about the position.<br/>
                    Don't worry though, one of the eko devs probably already knows about it. Plus, the position is great, no need to read a wall of text. Really. <br />
                    Just go ahead and submit your application.
                </div>}

                <div className="legal">
                    <p>Applicants must be legally permitted to work in Israel or in the USA and paperwork will be verified prior to and as a condition to hire.</p>

                    <p>JBF Interlude 2009 Ltd. is an equal opportunity employer and considers all candidates for employment regardless of race, color, religion, sex, national origin, citizenship, age, disability, marital status, military or veteran's status (including protected veterans, as may be required by federal law), sexual orientation, gender identity or any other category protected by law.</p>
                </div>
            </div>
        </section>
    )
}

function htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

export default Position;