import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor'

import "./Jobs.scss";

function Jobs(props){
    props = {
        positions: [
            {
                title: "Junior Frontend Developer",
                location: "Tel Aviv / NYC",
                URL: "/positions/junior-frontend-developer"
            },
            {
                title: "Senior Frontend Developer",
                location: "Tel Aviv / NYC",
                URL: "/positions/senior-frontend-developer"
            },
            {
                title: "Junior Backend Developer",
                location: "Tel Aviv / NYC",
                URL: "/positions/junior-backend-developer"
            },
            {
                title: "Senior Backend Developer",
                location: "Tel Aviv / NYC",
                URL: "/positions/senior-backend-developer"
            },
            {
                title: "Junior Fullstack Developer",
                location: "Tel Aviv / NYC",
                URL: "/positions/junior-fullstack-developer"
            },
            {
                title: "Senior Fullstack Developer",
                location: "Tel Aviv / NYC",
                URL: "/positions/senior-fullstack-developer"
            },
            {
                title: "DevOps Engineer",
                location: "Tel Aviv / NYC",
                URL: "/positions/devops-engineer"
            },

        ]
    }
    
    let positionItems = props.positions.map((positionData , i)=> (
        <li className="position" key={i}>
            <a href={positionData.URL} className="title">{positionData.title}</a>
            <div className="location">{positionData.location}</div>
        </li>
    ))

    return (
        <ScrollableAnchor id={'careers'}>
            <section className="jobs">
                <div className="content">
                    <h4>Open positions</h4>
                    <ul className="positions">
                        {positionItems}
                    </ul>

                    <div className="ctaDescription">
                        <em>Didn't find a good fit? Send us your resume anyway</em>
                        We’re always looking for cool people to join our team. Apply now and we’ll reach out to you whenever the right opportunity comes up.
                    </div>
                    <a href="#" className="ctaButton">Send resume</a>
                </div>
            </section>
        </ScrollableAnchor>
    );
}

export default Jobs;