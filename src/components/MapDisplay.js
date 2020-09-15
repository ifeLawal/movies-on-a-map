import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export class MapDisplay extends React.Component {
    
    state = {
        lat: 40.7651838,
        lng: -73.9829905,
        zoom: 14,
    }

    componentDidMount()  {
       
    }

    render() {
        // const imgSize = 
        const locationList = this.props.location;

        const mapStyle = {width: "100%", height: "600px"}
        return (
            <Map 
                className=""
                center={[this.state.lat,this.state.lng]}
                zoom={this.state.zoom}
                style={mapStyle}

            >
                <TileLayer 
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                />

                {
                    locationList.map((obj,index) => {
                        const point = [obj.locationInfo.coords[1],obj.locationInfo.coords[0]];

                        return (
                            <Marker position={point} key={index} >
                                <Popup>
                                    <span><strong>Movie: {obj.title}</strong></span>
                                    <img 
                                        style={{width:"90%"}} 
                                        src={process.env.PUBLIC_URL + `/imgs/${obj.moviePoster}`} 
                                        alt={`A scene from the movie ${obj.title}`}/>
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