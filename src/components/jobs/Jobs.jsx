import React from "react";
import "./Jobs.scss";

function Jobs(props){
    props = {
        positions: [
            {
                title: "Junior Frontend Developer",
                location: "Tel Aviv / NYC",
                URL: ""
            },
            {
                title: "Senior Frontend Developer",
                location: "Tel Aviv / NYC",
                URL: ""
            },
            {
                title: "Junior Backend Developer",
                location: "Tel Aviv / NYC",
                URL: ""
            },
            {
                title: "Senior Backend Developer",
                location: "Tel Aviv / NYC",
                URL: ""
            },
            {
                title: "Junior Fullstack Developer",
                location: "Tel Aviv / NYC",
                URL: ""
            },
            {
                title: "Senior Fullstack Developer",
                location: "Tel Aviv / NYC",
                URL: ""
            },
            {
                title: "DevOps Engineer",
                location: "Tel Aviv / NYC",
                URL: ""
            },

        ]
    }
    
    let positionItems = props.positions.map(positionData => (
        <li className="position">
            <a href={positionData.URL} className="title">{positionData.title}</a>
            <div className="location">{positionData.location}</div>
        </li>
    ))

    return (
        <section className="jobs">
            <div className="content">
                <h4>Open positions</h4>
                <ul className="positions">
                    {positionItems}
                </ul>
                <a href="#" className="ctaButton">
                    <div>Didn't find a good fit?</div>
                    <div>Send us your resume anyway</div>
                </a>
                <div className="ctaDescription">
                    We’re always looking for cool people to join our team. Apply now and we’ll reach out to you whenever the right opportunity comes up.
                </div>
            </div>
        </section>
    );
}

export default Jobs;