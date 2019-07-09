import React from "react";
import ReactMarkdown from 'react-markdown';
import JobPage from '../JobPage'

let positionText = `
#### Senior Frontend Developer

##### Key Requirements

* An eye for detail and a sense of discomfort when pixels are in the wrong place
* JavaScript - great coding skills and an appetite to learn more (experience with ES6)
* Software design - deep understanding of design patterns and ability to transform ideas into a stable working software that is testable and maintainable
* CSS preprocessors like SASS/LESS/Stylus, CSS architecture methodologies like BEM/OOCSS/SMACSS
* Experience with building responsive interfaces for mobile, desktop and everything in between (literally)
* Web infrastructure - optimizing for fast delivery, HTTP, CDNs, browser compatibility
* JavaScript ecosystem - packaging (yarn/npm), building (webpack), testing (mocha/jest/jasmine, headless browsers etc.), linting (jshint/eslint/jslint)


##### Nice To have

* Client-side frameworks -  React, Angular or Vue
* Web animations - CSS animation and/or animation libraries like GSAP 
* Familiarity with the browser rendering process, Canvas, WebGL, shaders


`;
let positionTextEl = <ReactMarkdown source={positionText} />;

function SeniorFE(){

    return (
        <JobPage positionTextEl={positionTextEl}/>
    )
}

export default SeniorFE;