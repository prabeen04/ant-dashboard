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
    handleChange = address => {
        this.setState({ address });
    };

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
                        value={this.state.address}
                        onChange={this.handleChange}
                        onSelect={onSelect}
                    >
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div style={{ width}}>
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
                                        // inline style for demonstration purpose
                                        const style = suggestion.active
                                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                        return (
                                            <div
                                                {...getSuggestionItemProps(suggestion, {
                                                    className,
                                                    style,
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