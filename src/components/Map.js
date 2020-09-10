/* global map */
/* global L */

import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export class MapDisplay extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            lat: 40.721812,
            lng: -73.9828486,
            zoom: 14,
        }
    }

    componentDidMount()  {
       
    }

    render() {
        const mapStyle = {width: "100%", height: "900px"}
        return (
            <Map 
                center={[this.state.lat,this.state.lng]}
                zoom={this.state.zoom}
                style={mapStyle}

            >
                <TileLayer 
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                />
            </Map>
        )
    }
}

export default MapDisplay;