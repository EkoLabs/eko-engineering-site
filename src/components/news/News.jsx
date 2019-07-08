import React from "react";
import Gallery from "../gallery/Gallery";

import NewYorker from "../../media/NewYorker.png";
import Forbes from "../../media/Forbes.png";
import RollingStone from "../../media/RollingStone.png";
import Polygon from "../../media/Polygon.png";

function News(){
    let data = {
        title: "In the news",
        type: 'large',
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
    };

    return (<Gallery data={data} />)
}

export default News;