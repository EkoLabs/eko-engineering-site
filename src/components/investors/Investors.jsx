import React from "react";
import "./Investors.scss";

import Sequoia from "./logos/Sequoia.svg";
import NEA from "./logos/NEA.svg";
import Marker from "./logos/Marker.svg";
import Innovation from "./logos/Innovation_white.png";
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
                imageURL: Sequoia,
                URL: "https://www.sequoiacap.com/companies/eko/",
                name: "Sequoia"

            },
            {
                imageURL: NEA,
                URL: "http://www.nea.com/",
                name: "NEA"
            },
            {
                imageURL: Marker,
                URL: "http://www.marker-llc.com/",
                name: "Marker"
            },
            {
                imageURL: Innovation,
                URL: "http://www.innovationendeavors.com/",
                name: "Innovation Endeavors"
            },
            {
                imageURL: Sony,
                URL: "http://www.sonypictures.com/corp/press_releases/2016/06_16/061616_interlude.html",
                name: "Sony"
            },
            {
                imageURL: MGM,
                URL: "http://www.businesswire.com/news/home/20151208005564/en/Interlude-Announces-Strategic-Investment-Metro-Goldwyn-Mayer-Studios",
                name: "Sony"

            },
            {
                imageURL: Intel,
                URL: "http://www.intelcapital.com/",
                name: "Intel Capital"
            },
            {
                imageURL: Warner,
                URL:
                    "http://www.wmg.com/news/warner-music-group-becomes-founding-major-label-partner-interlude-music-19996"
            },
            {
                imageURL: Samsung,
                URL: "http://www.businesswire.com/news/home/20151105005316/en/Samsung-Strategic-Investment-Interlude",
                name: "Samsung"
            },
            {
                imageURL: Wpp,
                URL: "http://www.wpp.com/wpp/companies/atinterlude/",
                name: "WPP"
            },
            {
                imageURL: Walmart,
                URL: "https://news.walmart.com/2018/10/11/walmart-and-eko-announce-joint-venture-to-create-interactive-storytelling-for-entertainment-and-retail",
                name: "Walmart"
            }
        ]
    };

    let items = props.items.map((item, i) => (
        <a target="_blank" rel="noopener noreferrer" href={item.URL} key={i}>
            <li className="item" key={i} title={item.name}>
                <img src={item.imageURL} alt={item.name} key={i}/>
            </li>
        </a>
    ));

    return (
        <section>
            <div className="content investors">
                <h4>{props.title}</h4>
                <ul className="items">{items}</ul>
            </div>
        </section>
    )

}
export default Investors;