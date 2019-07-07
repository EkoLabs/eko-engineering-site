import React from "react";
import "./Investors.scss";

import Sequoia from "./logos/Sequoia.svg";
import Sony from "./logos/Sony.svg";
import Intel from "./logos/Intel.svg";
import Samsung from "./logos/Samsung.svg";
import MGM from "./logos/MGM.svg";

function Investors(props) {
    props = {
        title: "Backed by top investors",
        items: [
            {
                imageURL: Sequoia,
            },
            {
                imageURL: Sony,
            },
            {
                imageURL: Intel,
            },
            {
                imageURL: Samsung,
            },
            {
                imageURL: MGM,
            },
        ]
    }

    let items = props.items.map(item => (
        <li className="item">
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