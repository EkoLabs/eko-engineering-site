import React from "react";
import "./Gallery.scss";

function Gallery(props){
    let items = props.data.items.map((item, i)=> {

        let itemEl;
        if (item.title){
            itemEl = (
                    <a href={item.URL}>
                        <div className="vaporFrame">
                            <div className="frameContent">
                                <div className="image" style={{backgroundImage: `url(${item.imageURL})`}}></div>
                            </div>
                            <div className="glow"></div>
                        </div>
                        <div className="title">{item.title}</div>
                        <div className="subtitle">{item.subtitle}</div>
                    </a>

            )
        } else {
            itemEl = (
                <div className="vaporFrame">
                    <div className="frameContent">
                        <div className="image" style={{backgroundImage: `url(${item.imageURL})`}}></div>
                    </div>
                    <div className="glow"></div>
                </div>

            )
        }

        return (
            <li className="item" key={i}>{itemEl}</li>
        )
    });

    return(
        <section>
            <div className={`content gallery ${props.data.type}`}>
                <h4>{props.data.title}</h4>
                <ul className="items">{items}</ul>
            </div>
        </section>
    )
}

export default Gallery;