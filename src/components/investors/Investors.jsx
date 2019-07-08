import React from "react";
import "./Investors.scss";

import Sequoia from "./logos/Sequoia.svg";
import NEA from "./logos/NEA.svg";
import Marker from "./logos/Marker.svg";
import Innovation from "./logos/Innovation.png";
import Sony from "./logos/Sony.svg";
import MGM from "./logos/MGM.svg";
import Intel from "./logos/Intel.svg";
import Warner from "./logos/Warner.svg";
import Samsung from "./logos/Samsung.svg";
import Wpp from "./logos/Wpp.svg";
import Walmart from "./logos/Walmart.svg";

function Investors(props) {
    props = {
        title: "Backed by top investors",
        items: [
            {
                imageURL: Sequoia
            },
            {
                imageURL: NEA
            },
            {
                imageURL: Marker
            },
            {
                imageURL: Innovation
            },
            {
                imageURL: Sony
            },
            {
                imageURL: MGM
            },
            {
                imageURL: Intel
            },
            {
                imageURL: Warner
            },
            {
                imageURL: Samsung
            },
            {
                imageURL: Wpp
            },
            {
                imageURL: Walmart
            },
        ]
    }

    let items = props.items.map((item, i) => (
        <li className="item" key={i}>
            <img src={item.imageURL} alt="Eko investor" />
        </li>
    ));

    return(
        <section>
            <div className="content investors">
                <h4>{props.title}</h4>
                <ul className="items">{items}</ul>
            </div>
        </section>
    )

}
export default Investors;