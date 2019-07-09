import React from "react";
import ReactMarkdown from 'react-markdown';
import JobPage from '../JobPage'

let positionText = `
#### Junior Backend Developer

##### Key Requirements

* JavaScript - great coding skills and an appetite to learn more (experience with ES6)
* Nodejs and server-side frameworks (express/hapi) - TBD
* SQL/noSQL databases
* AWS - TBD
* Docker and Linux -TBD
* Architecture - microservices design, messaging (kafka/rabbitMQ/kinesis), TBD
* DevOps - CI/CD pipelines, infrastructure as code (cloudformation/terraform), monitoring
* API design (REST, GraphQL)
* Software design - some understanding of design patterns and ability to transform ideas into a stable working software that is testable and maintainable


##### Nice To have

* DevOps tools and methodologies - CD/CI
* Client-side frameworks -  React, Angular or Vue
* Web infrastructure - optimizing for fast delivery, HTTP, CDNs
* JavaScript ecosystem - packaging (yarn/npm), building (webpack), testing (mocha/jest/jasmine, headless browsers etc.), linting (jshint/eslint/jslint)


`;
let positionTextEl = <ReactMarkdown source={positionText} />;

function JuniorBE(){

    return (
        <JobPage positionTextEl={positionTextEl}/>
    )
}

export default JuniorBE;