import React, { Component } from 'react';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
class ProfileSettings extends Component {
    render() {
        return (
            <div>
                <h3>ProfileSettings Component</h3>
            </div>
        )
    }
}

export default ProfileSettings;