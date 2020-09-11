import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

import * as Icon from 'react-bootstrap-icons';


 export const Carousel = (props) => {
    // new state variable
    const [index, setIndex] = useState(0);
    // const [img, setImg] = useState(props.images[index]);
    const size = 30;

    // function handleCarousel(amount) {
    //     setIndex(amount);
    //     setImg(props.images[amount]);
    // }

    return (
        <div className="w-100 carousel">
            <Card.Img MapLocation
                src={props.images[index]} 
                alt={props.alt} 
            ></Card.Img>
            <Icon.ArrowLeftCircleFill 
                className="carousel-icon-left" 
                size={size}
                onClick={() => setIndex(index - 1 < 0 ? props.images.length - 1 : index - 1)}
            />
            <Icon.ArrowRightCircleFill 
                className="carousel-icon-right" 
                size={size}
                onClick={() => setIndex((index + 1) % props.images.length)}    
            />
        </div>
    )
}

export default Carousel;