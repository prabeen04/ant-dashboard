import React, { Component } from 'react';
import Script from 'react-load-script';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class PlaceInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isScriptLoaded: false,
            value: null
        }
    }
    handleScriptLoad = () => {
        console.log('script is loaded')
        this.setState({ isScriptLoaded: true })
    }
    render() {
        return (
            <div>
                <Script
                    url="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"
                    onLoad={this.handleScriptLoad.bind(this)}
                />
                {this.state.isScriptLoaded &&
                    <PlacesAutocomplete
                        value={this.state.value}
                        onChange={value => this.setState({ value })}
                    />
                }
            </div>
        )
    }
}

export default PlaceInput;