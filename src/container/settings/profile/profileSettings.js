import React, { Component } from 'react';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
class ProfileSettings extends Component {
    state = {
        selectedOption: null,
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }
    render() {
        return (
            <div>
                <h3>ProfileSettings Component</h3>
                <Select
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    allowCreate={true}
                    placeholder="Select your favourite(s)"
                />
            </div>
        )
    }
}

export default ProfileSettings;