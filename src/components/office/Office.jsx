import React from "react";
import Gallery from "../gallery/Gallery";

import drums from "../../media/office_photos/drums.jpg";
import eko from "../../media/office_photos/eko.jpg";
import juna from "../../media/office_photos/juna.jpg";
import kitchen from "../../media/office_photos/kitchen.jpg";
import mario  from "../../media/office_photos/mario.jpg";
import piano from "../../media/office_photos/piano.jpg";
import pingpong from "../../media/office_photos/pingpong.jpg";
import posters from "../../media/office_photos/posters.jpg";
import ruel from "../../media/office_photos/ruel.jpg";
import shows from "../../media/office_photos/shows.jpg";

let images = [eko, ruel, mario, posters, drums, kitchen, shows, piano, juna,  pingpong];

function Office(){
    let data = {
        title: 'Behind the scenes',
        items: images.map(imageURL => ({imageURL})),
        type: 'medium'
    };

    return (<Gallery data={data} />)
}

export default Office;