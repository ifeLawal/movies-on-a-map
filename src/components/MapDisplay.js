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
                                    <div style={{maxWidth:"220px"}} className="my-4">
                                        <div className="my-2"><strong>Movie: </strong>{obj.title}</div>
                                        <div className="my-2 mb-4"><strong>Location: </strong>{obj.place_name || obj.locationInfo.address}</div>
                                    <div style={{textAlign:"center"}}><img 
                                        style={{width:"220px"}} 
                                        src={process.env.PUBLIC_URL + `/imgs/${obj.images[0]}`} 
                                        alt={`A scene from the movie ${obj.title}`}/>
                                        </div>
                                    </div>
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