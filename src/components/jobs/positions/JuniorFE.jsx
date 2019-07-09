import React from "react";
import ReactMarkdown from 'react-markdown';
import JobPage from '../JobPage'

let positionText = `
#### Junior Frontend Developer

##### Key Requirements

* An eye for detail and a sense of discomfort when pixels are in the wrong place
* JavaScript - great coding skills and an appetite to learn more
* CSS preprocessors like SASS/LESS/Stylus

##### Nice To have

* Experience with ES6
* Client-side frameworks -  React, Angular or Vue
* Experience with building responsive interfaces for mobile, desktop and everything in between (literally)
* Web animations - CSS animation and/or animation libraries like GSAP 
* Software design - some understanding of design patterns and ability to transform ideas into a stable working software that is testable and maintainable

`;
let positionTextEl = <ReactMarkdown source={positionText} />;

function JuniorFE(){

    return (
        <JobPage positionTextEl={positionTextEl}/>
    )
}

export default JuniorFE;