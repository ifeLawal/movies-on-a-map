import React from 'react'
import { Card, Row } from 'react-bootstrap'
import '../custom.css'

export default function Location({location}) {
    return (
        <div className="my-3 box-custom">
            <Row border="">
                <div className="col-sm-6">
                    <Card>
                        <Card.Img src={location.images[0]} alt={"A scene from" + location.title}>
                        </Card.Img>
                        <img className="poster" src={location.moviePoster} alt={"A movie poster from" + location.title}/>
                        <Card.Body>
                            <Card.Title>{location.title} ({location.year})
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-sm-6">
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
