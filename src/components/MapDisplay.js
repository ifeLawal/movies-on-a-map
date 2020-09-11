/* global map */
/* global L */

import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export class MapDisplay extends React.Component {
    
    // constructor(props) {
    //     super(props)

        
    // }

    state = {
        lat: 40.721812,
        lng: -73.9828486,
        zoom: 14,
    }

    componentDidMount()  {
       
    }

    render() {
        // const imgSize = 
        const placeholder = [{title:"They Came Together",poster:"http://onthesetofnewyork.com/locations/theycametogether/theycametogether30.jpg",coords:[40.7641964,-73.9639248]},
                             {title:"Alien Space Avenger ",poster:"http://onthesetofnewyork.com/locations/alienspaceavenger/alienspaceavenger12.jpg",coords:[40.7677275,-73.9826591]}];

        const mapStyle = {width: "100%", height: "900px"}
        return (
            <Map 
                center={[this.state.lat,this.state.lng]}
                zoom={this.state.zoom}
                style={mapStyle}

            >
                <TileLayer 
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                />

                {
                    placeholder.map((obj,index) => {
                        const point = [obj.coords[0],obj.coords[1]];

                        return (
                            <Marker position={point} key={index} >
                                <Popup>
                                    <span>Movie: {obj.title}</span>
                                    <img style={{width:"100%"}} src={obj.poster} alt={`Movie image from ${obj.title}`}/>
                                </Popup>
                            </Marker>
                        )
                    })
                }
            </Map>
        )
    }
}

export default MapDisplay;