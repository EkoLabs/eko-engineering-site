import React, {useState} from "react";
import Carousel, { Modal, ModalGateway } from 'react-images';
import "./Gallery.scss";

function Gallery(props){
    const [lightbox, setLightboxState] = useState({
        imageIndex: 0,
        isOpen: false
    });
    let lightboxImages;

    function onItemClick(e, index){
        if (props.lightbox){
            setLightboxState({imageIndex: index, isOpen: true});
            e.preventDefault();
        }
    }

    let items = props.data.items.map((item, i)=> {

        let itemEl = (
                <a href={item.URL} target="_blank" rel="noopener noreferrer" onClick={e => onItemClick(e, i)}>
                    <div className="vaporFrame">
                        <div className="frameContent">
                            <div className="image" style={{backgroundImage: `url(${item.imageURL})`}}></div>
                        </div>
                        <div className="glow"></div>
                    </div>
                    {item.title && (
                        <React.Fragment>
                            <div className="title">{item.title}</div>
                            <div className="subtitle">{item.subtitle}</div>
                        </React.Fragment>
                    )}
                </a>

        );


        return (
            <li className="item" key={i}>{itemEl}</li>
        )
    });

    if (props.lightbox){
        lightboxImages = props.data.items.map(item => ({src: item.imageURL}));
    }
    
    return(
        <section>
            <div className={`content gallery ${props.data.type}`}>
                <h4>{props.data.title}</h4>
                <ul className="items">{items}</ul>
            </div>
            {props.lightbox &&
                <ModalGateway>
                    {lightbox.isOpen ? (
                        <Modal onClose={() => setLightboxState({ isOpen: false })}
                               allowFullscreen={false}
                        >
                            <Carousel currentIndex={lightbox.imageIndex}
                                      views={lightboxImages}
                                      hideControlsWhenIdle={100000}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            }
        </section>
    )
}

export default Gallery;