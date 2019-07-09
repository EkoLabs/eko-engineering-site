import React from "react";
import ReactMarkdown from 'react-markdown';
import JobPage from '../JobPage'

let positionText = `
#### DevOps Engineer

##### Key Requirements

* Strong technical skills, good system and infrastructure understanding.
* Experienced with building a full application release cycle (CI/CD).
* Familiar with how modern web applications work and scale.
* Networking, firewall rules management and application security knowledge.
* Well familiar with Linux environment, scripting and programming.
* Good at seeing the bigger picture and system architecture planning


##### Nice To have

* Proven DevOps and Infrastructure experience will be an advantage
* Degree in Computer Science (not a must; we're always looking for super talented people)


`;
let positionTextEl = <ReactMarkdown source={positionText} />;

function DevOps(){

    return (
        <JobPage positionTextEl={positionTextEl}/>
    )
}

export default DevOps;