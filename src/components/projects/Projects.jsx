import React, { useEffect} from "react";
import BezierEasing from  "bezier-easing"
import "./Projects.scss";



function Projects(){
    let gridRef = React.createRef();
    let itemsCoords = [];

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
        gridRef.current.classList.add("active");
    }

    function mouseLeave(index){
        hoverTimeout = setTimeout(()=>{
            let hexItems = gridRef.current.querySelectorAll('.hex');
            let currentItem = hexItems[index];
            for (let x=0; x<hexItems.length; x++){
                let gridItem = hexItems[x];
                gridItem.style.transform= ``;
            }
            currentItem.style.zIndex = 1;
            currentItem.classList.remove("hover");
            gridRef.current.classList.remove("active");
        }, 300);

    }

    let hexGrid = [];
    let activeHexes = [
         5,6,7,
        16,17,18,19,
         28,29,30
    ];
    for (let x=0;x<35;x++){
        let hexItem;
        if (activeHexes.includes(x)) {
                hexItem = (
                    <li className="hex"
                        key={x}
                        onMouseEnter={() => mouseEnter(x)}
                        onMouseLeave={() => mouseLeave(x)}
                    >
                        <div className="hexIn">
                            <a className="hexLink" href="#">
                                <img src={`https://picsum.photos/300/300?${Math.random().toFixed(2)}`} alt=""/>
                                <div className="title">distance</div>
                            </a>
                        </div>
                    </li>
                );
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
        <section className="projects">
            <div className="content">
                <h4>Driven by Eko technology</h4>
            </div>
            <ul className="hexGrid" ref={gridRef}>
            {hexGrid}
            </ul>
        </section>
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