import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class GoogleMap extends Component {
    render() {
        return (
            <div style={{ height: 200, width: 200, margin: '3rem'}}>
                <Map google={this.props.google} zoom={14}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

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

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAYl3tV8A0nsXc7TVHUTEFFHPE9fBmy03s'
})(GoogleMap)