import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
import './map.css';

const MyPopupMarker = ({ children, position }) => (
    <Marker position={position}>
        <Popup>{children}</Popup>
    </Marker>
)

const MyMarkersList = ({ markers }) => {
    const items = markers.map(({ key, ...props }) => (
        <MyPopupMarker key={key} {...props} />
    ))
    return <div style={{ display: 'none' }}>{items}</div>
}

class MyMap extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lat: 51.505,
            lng: -0.09,
            zoom: 13,
        }
    }
    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <div>
                <Map center={position} zoom={this.state.zoom} viewport={this.state.viewport} className="leaflet-container">
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </Map>
            </div>
        )
    }
}

export default MyMap;