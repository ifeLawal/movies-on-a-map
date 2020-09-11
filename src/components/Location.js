import React from 'react'
import { Card, Row } from 'react-bootstrap'

import Carousel from './Carousel'

import '../custom.css'

export default function Location({location}) {
    return (
        <div className="my-3 box-custom">
            <Row border="">
                <div className="col-lg-6 col-md-12">
                    <Card>
                        <Carousel 
                            images={location.images}
                            alt={"A scene from" + location.title}
                        />
                        <img className="poster d-lg-block d-none" src={location.moviePoster} alt={"A movie poster from" + location.title}/>
                        <Card.Body>
                            <Card.Title className="movie-title">{location.title} ({location.year})
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-6 col-md-12">
                    <Card className="p-2">
                        <Card.Title>
                            Address:
                        </Card.Title>
                        <Card.Subtitle>
                            {location.locationInfo.address} 
                        </Card.Subtitle>
                        <p className="mt-3"><strong>Neighborhood:</strong> {location.neighborhood}</p>
                        
                        <p><strong>Comment:</strong> {location.comment}</p>
                        
                    </Card>
                </div>
            </Row>
        </div>
    )
}
