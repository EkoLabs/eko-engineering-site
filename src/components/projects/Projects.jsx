import React, { useEffect} from "react";
import {isTouchDevice} from "../../utils";
import BezierEasing from  "bezier-easing"
import "./Projects.scss";
import ScrollableAnchor from "react-scrollable-anchor";


let data = {
    projects: [
        {
            title: "Mind Blown",
            imageURL: "https://d1w2zhnqcy4l8f.cloudfront.net/content/falcon/production/promotions/4sbgwy/landingpages_mindblown.png",
            URL: "https://helloeko.com/mindblown/stop-with-these-questions?autoplay=true"
        },
        {
            title: "Bob Dylan",
            subtitle: "Like a Rolling Stone",
            imageURL: "https://d1w2zhnqcy4l8f.cloudfront.net/content/falcon/production/projects/ljfeyc/Bob%20Dylan_Rolling_Stone_medium.png",
            URL: "https://helloeko.com/music/like-a-rolling-stone?autoplay=true"
        },
        {
            title: "Marvel",
            subtitle: "Coke",
            imageURL: "https://d2zoj4vo9uf0uk.cloudfront.net/wp-content/uploads/2016/02/07010009/ad_sharing_image_1920x1080.jpg",
            URL: "https://helloeko.com/v/coke"
        },        {
            title: "One on One",
            subtitle: "Detroit Pistons",
            imageURL: "https://d1w2zhnqcy4l8f.cloudfront.net/content/falcon/production/promotions/9olx9y/17_Homepage-Carousel.jpg",
            URL: "https://helloeko.com/1on1/pistons?autoplay=true"
        },
        {
            title: "#WarGames",
            imageURL: "https://res.cloudinary.com/dlkxfitke/image/upload/w_350,f_auto,q_auto/remote_efu/upload/836b2709232e01b48f203673c213e2b8.jpg",
            URL: "https://helloeko.com/wargames/episode-one-chasing-bryce?autoplay=true"
        },
        {
            title: "Tasty",
            subtitle: "Chocolate Chip Cookie",
            imageURL: "https://res.cloudinary.com/dlkxfitke/image/upload/w_445,f_auto,q_auto/falcon_storage/production/projects/An9Q5B/neta_eko_tasty_68_low_res_768x432-190625133839.jpg",
            URL: "https://helloeko.com/buzzfeed-tasty-eko-fast/cookies-fast?autoplay=true"
        },
        {
            title: "That Moment When",
            imageURL: "https://res.cloudinary.com/dlkxfitke/image/upload/w_350,f_auto,q_auto/remote_efu/upload/b706223d6acae0a7f478f77e2eb82be7.jpg",
            URL: "https://helloeko.com/tmw/101?autoplay=true"
        },
        {
            title: "Coldplay",
            subtitle: "Ink",
            imageURL: "https://d1w2zhnqcy4l8f.cloudfront.net/content/falcon/production/projects/oEZGcv/152112809764508.UHENiOdJpbM7vJfbnu3B_height640.png",
            URL: "https://helloeko.com/music/coldplay-ink?autoplay=true"
        },
        {
            title: "Charlie Gets Fired",
            imageURL: "https://res.cloudinary.com/dlkxfitke/image/upload/w_350,f_auto,q_auto/falcon_storage/production/projects/agvsRG/charlie%201-171107213501-768.jpg",
            URL: "https://helloeko.com/charlie/charlie-pitches-a-pilot?autoplay=true"
        },
        {
            title: "Jeff Buckley",
            subtitle: "Just Like a Woman",
            imageURL: "https://res.cloudinary.com/dlkxfitke/image/upload/w_350,f_auto,q_auto/falcon_storage/production/projects/InWy6m/jeff%20buckley_preview%202-171110165337.jpeg",
            URL: "https://helloeko.com/v/jeff-buckley-just-like-a-woman?autoplay=true"
        },
        {
            title: "Possibilia",
            imageURL: "https://res.cloudinary.com/dlkxfitke/image/upload/w_445,f_auto,q_auto/falcon_storage/staging/episode/D3iXb9/Possibillia768x432_2.jpg",
            URL: "https://helloeko.com/v/possibilia?autoplay=true"
        },
        {
            title: "Buzzfeed",
            imageURL: "https://res.cloudinary.com/dlkxfitke/image/upload/w_445,f_auto,q_auto/remote_efu/upload/a912253eeec7e76bf25fc0024f61bbaa.jpg",
            URL: "https://helloeko.com/buzzfeed-x-eko/V5oPXz?autoplay=true"
        },
    ]
};

let itemsCoords = [];
function Projects(){
    let gridRef = React.createRef();

    let hoverTimeout;

    useEffect(() => {
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
        16,17,18,19,
         28,29,30
    ];
    let projectDataIndex = 0;
    for (let x=0;x<35;x++){
        let hexItem;
        let itemData = data.projects[projectDataIndex];

        if (activeHexes.includes(x) && itemData) {
                hexItem = (
                    <li className="hex"
                        key={x}
                        onMouseEnter={() => { if (!isTouchDevice()) mouseEnter(x) }}
                        onMouseLeave={() => { if (!isTouchDevice()) mouseLeave(x) }}
                    >
                        <div className="hexIn">
                            <a className="hexLink" href={itemData.URL} target="_blank" rel="noopener noreferrer">
                                <img src={itemData.imageURL} alt=""/>
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