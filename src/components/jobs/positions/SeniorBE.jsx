import React from "react";
import ReactMarkdown from 'react-markdown';
import JobPage from '../JobPage'

let positionText = `
#### Senior Backend Developer

##### Key Requirements

* JavaScript - great coding skills and an appetite to learn more (experience with ES6)
* Software design - deep understanding of design patterns and ability to transform ideas into a stable working software that is testable and maintainable
* Web infrastructure - optimizing for fast delivery, HTTP, CDNs
* SQL/noSQL databases
* Server-side frameworks - Express or Hapi
* JavaScript ecosystem - packaging (yarn/npm), building (webpack), testing (mocha/jest/jasmine, headless browsers etc.), linting (jshint/eslint/jslint)


##### Nice To have

* DevOps tools and methodologies - CD/CI
* Client-side frameworks -  React, Angular or Vue


`;
let positionTextEl = <ReactMarkdown source={positionText} />;

function SeniorBE(){

    return (
        <JobPage positionTextEl={positionTextEl}/>
    )
}

export default SeniorBE;