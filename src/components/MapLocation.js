import React from 'react'
import { Container } from 'react-bootstrap'
import Location from './Location'

import { ScrapedData } from '../data/staticScrapedData'
import { Helper } from '../helpers'

import MapDisplay from './MapDisplay'
import Navbar from './Navbar';

export const MapLocation = () => {
    const testData = Helper.locationList;
    
    return (
        <div>
            <Navbar />
            <Container className="my-3">
                
                <h1 className="my-4">Pins of Movie Scenes Located in NYC</h1>
                <div className="mb-4">
                    Each pin represents a movie scene shot in NYC. <strong>By clicking on the pin</strong> you can <strong>see a picture from the movie, the title of the movie, and the address.
                    </strong></div>
                
                <div className="d-md-flex">
                    <MapDisplay 
                        location={testData}
                    />
                    {/* <div className="h-100 col-md-5 mr-2 map-list">
                        {testData.map((location,index) => {
                            return <Location 
                                key={index}
                                location={location}
                            />
                        })}
                    </div> */}
                </div>
            </Container>
        </div>
    )
}

export default MapLocation;