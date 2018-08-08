import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class GoogleMap extends Component {
    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={6}
                    initialCenter={{
                        lat: 40.854885,
                        lng: -88.081807
                    }}
                    // center= {this.props.latLng}
                >

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} 
                        position={this.props.latLng}/>

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            <h1>{'this.state.selectedPlace.name'}</h1>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        )
    }
}

// export default GoogleMap;
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAYl3tV8A0nsXc7TVHUTEFFHPE9fBmy03s'
})(GoogleMap)