import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { setGoogleAddress } from '../../actions/googleAction';
import './google.css';

// class GooglePlace extends Component {
//     constructor(props) {
//         super(props);
//         state = { address: '' }
//     }


function GooglePlace(props) {
    const [address, setAddress] = useState('')
    const handleChange = (address) => {
        setAddress(address)
    }

    const handleSelect = (address) => {
        props.setGoogleAddress(address)
        geocodeByAddress(address)
            .then(results => {
                console.log(results)
                getLatLng(results[0])
            })
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error))
    }

    return (
        <div style={{ width: 400 }}>
            <h3>{props.address}</h3>
            <PlacesAutocomplete
                value={address}
                onChange={handleChange}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: 'Search Places ...',
                                className: 'location-search-input'
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {suggestions.map(suggestion => {
                                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div {...getSuggestionItemProps(suggestion, { className, style })}>
                                        <span>{suggestion.description}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
            <br />
        </div>
    )
}
// }

const mapStateToProps = ({ googleReducer }) => ({
    address: googleReducer.address
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setGoogleAddress
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GooglePlace);