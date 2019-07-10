import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor'
import careersData from "../../careersData";
import "./Jobs.scss";

function Jobs(){

    let positionItems = careersData.positions.map((positionData, i) => {
        let url = `/positions/${positionData.title.toLowerCase().replace(/ /g,'-')}`;

        return <li className="position" key={i}>
            <a href={url} className="title">{positionData.title}</a>
            <div className="location">Tel Aviv / NYC</div>
        </li>
    });

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
                    <a href="#contact" className="ctaButton">Send resume</a>
                </div>
            </section>
        </ScrollableAnchor>
    );
}

export default Jobs;