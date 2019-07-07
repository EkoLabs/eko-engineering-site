import React from "react";
import "./Gallery.scss";

import NewYorker from "../../media/NewYorker.png";
import Forbes from "../../media/Forbes.png";
import RollingStone from "../../media/RollingStone.png";
import Polygon from "../../media/Polygon.png";

function Gallery(props){
    props = {
        title: "In the news",
        items: [
            {
                title: "The Story with a Thousand Endings",
                subtitle: "The New Yorker",
                imageURL: NewYorker,
                URL: ""
            },
            {
                title: "Walmart Toy Lab Is The Best Thing Walmart Has Done All Year",
                subtitle: "Forbes",
                imageURL: Forbes,
                URL: ""
            },
            {
                title: "Bob Dylan Goes Interactive in ‘Like a Rolling Stone’ Clip",
                subtitle: "ROLLINGSTONE",
                imageURL: RollingStone,
                URL: ""
            },
            {
                title: "Proper choose-your-own-adventure TV series are here, but don’t call them that",
                subtitle: "Polygon",
                imageURL: Polygon,
                URL: ""
            },
        ]
    }

    let items = props.items.map((item, i)=>(
        <li className="item" key={i}>
            <a href={item.URL}>
                <img src={item.imageURL} />
                <div className="title">{item.title}</div>
                <div className="subtitle">{item.subtitle}</div>
            </a>
        </li>
    ));

    return(
        <section>
            <div className="content gallery">
                <h4>{props.title}</h4>
                <ul className="items">{items}</ul>
            </div>
        </section>
    )
}

export default Gallery;