import React, { Component } from 'react';
import Script from 'react-load-script';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import '../../google/google.css'
class PlaceInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isScriptLoaded: false,
            address: ''
        }
    }
    handleScriptLoad = () => {
        console.log('script is loaded')
        this.setState({ isScriptLoaded: true })
    }
    render() {
        const { input, width, label, onSelect, meta:{touched, error}, ...rest} = this.props
        return (
            <div>
                <Script
                    url="https://maps.googleapis.com/maps/api/js?key=AIzaSyAYl3tV8A0nsXc7TVHUTEFFHPE9fBmy03s&libraries=places"
                    onLoad={this.handleScriptLoad.bind(this)}
                />
                {this.state.isScriptLoaded &&
                    <PlacesAutocomplete
                        value={input.value}
                        onChange={input.onChange}
                        onSelect={onSelect}
                    >
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div style={{ width: width || '100%'}}>
                                <input
                                    {...getInputProps({
                                        placeholder:label,
                                        className: 'location-search-input',
                                    })}
                                />
                                <div className="autocomplete-dropdown-container">
                                    {loading && <div>Loading...</div>}
                                    {suggestions.map(suggestion => {
                                        const className = suggestion.active
                                            ? 'suggestion-item--active'
                                            : 'suggestion-item';
                                        return (
                                            <div
                                                {...getSuggestionItemProps(suggestion, {
                                                    className
                                                })}
                                            >
                                                <span>{suggestion.description}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </PlacesAutocomplete>

                }
            </div>
        )
    }
}

export default PlaceInput;