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
                
                <h1>A Map View of Movie Scenes Located in</h1>
                
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