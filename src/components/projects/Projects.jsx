import React, { useEffect } from "react";
import {isTouchDevice} from "../../utils";
import BezierEasing from  "bezier-easing"
import "./Projects.scss";
import ScrollableAnchor from "react-scrollable-anchor";


let data = {
    projects: [
        {
            title: "That Moment When",
            imageURL: "https://res.cloudinary.com/dlkxfitke/image/upload/w_350,f_auto,q_auto/remote_efu/upload/b706223d6acae0a7f478f77e2eb82be7.jpg",
            URL: "https://eko.com/tmw/101?autoplay=true"
        },
        {
            title: "Bob Dylan",
            subtitle: "Like a Rolling Stone",
            imageURL: "https://d1w2zhnqcy4l8f.cloudfront.net/content/falcon/production/projects/ljfeyc/Bob%20Dylan_Rolling_Stone_medium.png",
            URL: "https://eko.com/music/like-a-rolling-stone?autoplay=true"
        },
        {
            title: "Wizard School Dropout",
            imageURL: "https://eko.com/wp-content/uploads/2019/11/2042_Eko_WSD_3_Thumbnails_01_1920x1080.jpg",
            URL: "https://eko.com/shows/the-choice-is-yours/wizard-school-dropout/eviction-notice/"
        },
        {
            title: "Marvel",
            subtitle: "Coke",
            imageURL: "https://res.cloudinary.com/dc9sc6x9m/image/upload/v1618393974/ad_sharing_image_1920x1080_ouldjl.jpg",
            URL: "https://eko.com/v/coke"
        },
        {
            title: "The Coop",
            imageURL: "https://res.cloudinary.com/dlkxfitke/image/upload/w_350,f_auto,q_auto/fl_lossy/falcon_storage/production/playlists/TheCoop/TheCoop_1-191120225227.jpg",
            URL: "https://eko.com/the-coop/who-killed-ryan?autoplay=true"
        },
        {
            title: "Epic Night",
            imageURL: "https://res.cloudinary.com/dlkxfitke/image/upload/w_350,f_auto,q_auto/fl_lossy/falcon_storage/production/playlists/EpicNight/horiz-epic-night-191115192138.jpg",
            URL: "https://eko.com/shows/the-choice-is-yours/epic-night/"
        },
        {
            title: "Tasty",
            subtitle: "Chocolate Chip Cookie",
            imageURL: "https://res.cloudinary.com/dlkxfitke/image/upload/w_445,f_auto,q_auto/falcon_storage/production/projects/An9Q5B/neta_eko_tasty_68_low_res_768x432-190625133839.jpg",
            URL: "https://eko.com/buzzfeed-tasty-eko-fast/cookies-fast?autoplay=true"
        },
        {
            title: "Clothes Call",
            subtitle: "Create a Girls' Trip Look",
            imageURL: "https://res.cloudinary.com/dlkxfitke/image/upload/w_350,f_auto,q_auto/fl_lossy/falcon_storage/production/projects/MexgR1/eko_cc_592x333_thumbnails_ep05-3-191212001525-768.jpg",
            URL: "https://eko.com/clothes-call/girls-trip-vegas?autoplay=true"
        },
        {
            title: "One on One",
            subtitle: "Detroit Pistons",
            imageURL: "https://d1w2zhnqcy4l8f.cloudfront.net/content/falcon/production/promotions/9olx9y/17_Homepage-Carousel.jpg",
            URL: "https://eko.com/1on1/pistons?autoplay=true"
        },
        {
            title: "#WarGames",
            imageURL: "https://res.cloudinary.com/dlkxfitke/image/upload/w_350,f_auto,q_auto/remote_efu/upload/836b2709232e01b48f203673c213e2b8.jpg",
            URL: "https://eko.com/wargames/episode-one-chasing-bryce?autoplay=true"
        },
        {
            title: "Mind Blown",
            imageURL: "https://d1w2zhnqcy4l8f.cloudfront.net/content/falcon/production/promotions/4sbgwy/landingpages_mindblown.png",
            URL: "https://eko.com/mindblown/stop-with-these-questions?autoplay=true"
        },
        {
            title: "Cook Together",
            subtitle: "Make Tacos like a Pro",
            imageURL: "https://res.cloudinary.com/dlkxfitke/image/upload/w_350,f_auto,q_auto/fl_lossy/falcon_storage/production/projects/zRddYv/FalconProject_High_1920x1080-190916205902-768.jpg",
            URL: "https://eko.com/cook-together/cook-tacos?autoplay=true"
        },
        {
            title: "Coldplay",
            subtitle: "Ink",
            imageURL: "https://d1w2zhnqcy4l8f.cloudfront.net/content/falcon/production/projects/oEZGcv/152112809764508.UHENiOdJpbM7vJfbnu3B_height640.png",
            URL: "https://eko.com/music/coldplay-ink?autoplay=true"
        },
        {
            title: "Charlie Gets Fired",
            imageURL: "https://res.cloudinary.com/dlkxfitke/image/upload/w_350,f_auto,q_auto/falcon_storage/production/projects/agvsRG/charlie%201-171107213501-768.jpg",
            URL: "https://eko.com/charlie/charlie-pitches-a-pilot?autoplay=true"
        },
        {
            title: "Timeline",
            imageURL: "https://res.cloudinary.com/dlkxfitke/image/upload/w_350,f_auto,q_auto/fl_lossy/falcon_storage/production/playlists/5spbsps/horiz-timeline-191115192659.jpg",
            URL: "https://eko.com/timeline/what-the-future?autoplay=true"
        },
        {
            title: "KidHQ",
            imageURL: "https://res.cloudinary.com/dlkxfitke/image/upload/w_350,f_auto,q_auto/v1582030228/eko.engineering/ToyLabWalmart-820x510.jpg",
            URL: "https://kidhq.com/"
        },
        {
            title: "Buzzfeed",
            imageURL: "https://res.cloudinary.com/dlkxfitke/image/upload/w_445,f_auto,q_auto/remote_efu/upload/a912253eeec7e76bf25fc0024f61bbaa.jpg",
            URL: "https://eko.com/buzzfeed-x-eko/V5oPXz?autoplay=true"
        },
        {
            title: "Jeff Buckley",
            subtitle: "Just Like a Woman",
            imageURL: "https://res.cloudinary.com/dlkxfitke/image/upload/w_350,f_auto,q_auto/falcon_storage/production/projects/InWy6m/jeff%20buckley_preview%202-171110165337.jpeg",
            URL: "https://eko.com/v/jeff-buckley-just-like-a-woman?autoplay=true"
        },
        {
            title: "Possibilia",
            imageURL: "https://res.cloudinary.com/dlkxfitke/image/upload/w_445,f_auto,q_auto/falcon_storage/staging/episode/D3iXb9/Possibillia768x432_2.jpg",
            URL: "https://eko.com/v/possibilia?autoplay=true"
        },
    ]
};

let itemsCoords = [];
function Projects(){
    let gridRef = React.createRef();

    let hoverTimeout;

    useEffect (() => {
        itemsCoords = [];
        for (const gridItem of gridRef.current.querySelectorAll('.hex')){
            let coords = getOffset(gridItem);
            itemsCoords.push(coords);
        }
    }, []);
    

    function mouseEnter(index){
        if (!itemsCoords.length) return;

        clearTimeout(hoverTimeout);
        
        let hexItems = gridRef.current.querySelectorAll('.hex');
        let currentItem = hexItems[index];
        let maxDistance = 500;
        let minScale = 0.3;
        let maxScale = 1.1;

        for (let x=0; x<hexItems.length; x++){
            let gridItem = hexItems[x];
            let distance = getDistance(itemsCoords[x], itemsCoords[index]);

            maxDistance = Math.max(distance, maxDistance);
            let newScale = (1 - sizeEasing(Math.min(maxDistance, distance) / maxDistance)) * (maxScale - minScale) + minScale;
            gridItem.style.transform= `scale(${newScale})`;
        }
        currentItem.style.zIndex = 5;
        currentItem.classList.add("hover");
        gridRef.current && gridRef.current.classList.add("active");
    }

    function mouseLeave(index){
        if (gridRef.current) {
            let hexItems = gridRef.current.querySelectorAll('.hex');
            let currentItem = hexItems[index];
            currentItem.classList.remove("hover");

            hoverTimeout = setTimeout(() => {
                for (let x = 0; x < hexItems.length; x++) {
                    let gridItem = hexItems[x];
                    gridItem.style.transform = ``;
                }
                currentItem.style.zIndex = 1;
                gridRef.current && gridRef.current.classList.remove("active");
            }, 150);

        }
    }

    let hexGrid = [];
    let activeHexes = [
         4, 5, 6, 7, 8,
        15, 16,17,18,19, 20,
         26, 27, 28,29,30, 31, 32
    ];
    let projectDataIndex = 0;
    for (let x=0;x<35;x++){
        let hexItem;
        let itemData = data.projects[projectDataIndex];

        if (activeHexes.includes(x) && itemData) {
                let transformedImageUrl = `https://res.cloudinary.com/dlkxfitke/image/fetch/w_330/${itemData.imageURL}`

                hexItem = (
                    <li className="hex"
                        key={x}
                        onMouseEnter={() => { if (!isTouchDevice()) mouseEnter(x) }}
                        onMouseLeave={() => { if (!isTouchDevice()) mouseLeave(x) }}
                    >
                        <div className="hexIn">
                            <a className="hexLink" href={itemData.URL} target="_blank" rel="noopener noreferrer">
                                <img src={transformedImageUrl} alt=""/>
                                <div className="hexText">
                                    <div className="title">{itemData.title}</div>
                                    { itemData.subtitle &&  <div className="subtitle">{itemData.subtitle}</div> }
                                </div>
                            </a>
                        </div>
                    </li>
                );

                projectDataIndex++;
        } else {
            hexItem = (
                <li className="hex" key={x}>
                <div className="hexIn">
                    <div className="hexDud"></div>
                </div>
            </li>
            );
        }

        hexGrid.push(hexItem);
    }

    return (
        <ScrollableAnchor id={'ecosystem'}>
            <section className="projects">
                <div className="content">
                    <h4>Driven by eko technology</h4>
                </div>
                <ul className="hexGrid" ref={gridRef}>
                {hexGrid}
                </ul>
            </section>
        </ScrollableAnchor>
    )
}

const sizeEasing  = BezierEasing(0,0.5,1,1);

function getDistance(e1, e2){
    let a = e1.left - e2.left;
    let b = e1.top - e2.top;

    return Math.sqrt( a*a + b*b );
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}

export default Projects;