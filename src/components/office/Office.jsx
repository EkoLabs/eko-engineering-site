import React from "react";
import Gallery from "../gallery/Gallery";

import buddies from "../../media/office_photos/dog-buddies.jpg";
import happyCoding0 from "../../media/office_photos/happy-coding-0.jpg";
import happyCoding1 from "../../media/office_photos/happy-coding-1.jpg";
import happyHour from "../../media/office_photos/happy-hour.jpg";
import hofshy from "../../media/office_photos/hofshy.jpg";
import lunch from "../../media/office_photos/lunch.jpg";
import maayan from "../../media/office_photos/maayan.jpg";
import ran from "../../media/office_photos/ran.jpg";
import ruel from "../../media/office_photos/ruel.jpg";
import twins from "../../media/office_photos/twins.jpg";

let images = [happyCoding0, happyHour, maayan, happyCoding1, twins, buddies, ran, hofshy, lunch, ruel];

function Office() {
    let data = {
        title: 'Behind the scenes',
        items: images.map(imageURL => ({
            imageURL: imageURL,
            URL: imageURL
        })),
        type: 'medium'
    };

    return (<Gallery data={data} lightbox={true} />)
}

export default Office;