import React from 'react'
import { Container } from 'react-bootstrap'
// import { ScrapedData } from '../staticScrapedData'
import MapDisplay from './Map'
import Navbar from './Navbar';

export const MapLocation = () => {
    return (
        <Container className="mt-3">
            <Navbar />
            <h1>Map of Scenes</h1>
            <MapDisplay />
        </Container>
    )
}

export default MapLocation;