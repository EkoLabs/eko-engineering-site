import React from "react";
import ReactMarkdown from 'react-markdown';
import JobPage from '../JobPage'

let positionText = `
#### Junior Fullstack Developer

##### Key Requirements

* JavaScript - great coding skills and an appetite to learn more (experience with ES6) 
* Software design - some understanding of design patterns and ability to transform ideas into a stable working software that is testable and maintainable
* CSS preprocessors like SASS/LESS/Stylus
* SQL/noSQL databases

##### Nice To have

* Client-side frameworks -  React, Angular or Vue
* Server-side frameworks - Express or Hapi
* Experience with building responsive interfaces for mobile, desktop and everything in between (literally)
* JavaScript ecosystem - packaging (yarn/npm), building (webpack), testing (mocha/jest/jasmine, headless browsers etc.), linting (jshint/eslint/jslint)
* Experience and familiarity with the browser rendering process, Canvas, WebGL, shaders


`;
let positionTextEl = <ReactMarkdown source={positionText} />;

function JuniorFS(){

    return (
        <JobPage positionTextEl={positionTextEl}/>
    )
}

export default JuniorFS;