import React from "react";
import Gallery from "../gallery/Gallery";

import AdAge from "../../media/AdAge.png";
import Forbes from "../../media/Forbes.png";
import RollingStone from "../../media/RollingStone.png";
import Polygon from "../../media/Polygon.png";

function News(){
    let data = {
        title: "In the news",
        type: 'large',
        items: [
            {
                title: "It's a Proctor & Gamble Super Bowl ad",
                subtitle: "AdAge",
                imageURL: AdAge,
                URL: "https://adage.com/article/special-report-super-bowl/its-procter-gamble-super-bowl-ad-tide-returns-along-crowd-shaped-corporate-spot/2230371"
            },
            {
                title: "Bob Dylan Goes Interactive in ‘Like a Rolling Stone’ Clip",
                subtitle: "ROLLINGSTONE",
                imageURL: RollingStone,
                URL: "https://www.rollingstone.com/music/music-news/bob-dylan-goes-interactive-in-like-a-rolling-stone-clip-203780/"
            },
            {
                title: "Proper choose-your-own-adventure TV series are here, but don’t call them that",
                subtitle: "Polygon",
                imageURL: Polygon,
                URL: "https://www.polygon.com/2017/11/14/16637752/choose-your-own-adventure-tv-sony-eko-hbo-twitch"
            },
            {
                title: "Walmart Toy Lab Is The Best Thing Walmart Has Done All Year",
                subtitle: "Forbes",
                imageURL: Forbes,
                URL: "https://www.forbes.com/sites/christopherwalton/2018/11/30/walmart-toy-lab-is-the-best-thing-walmart-has-done-all-year/#118db1e743e4"
            },
        ]
    };

    return (<Gallery data={data} />)
}

export default News;