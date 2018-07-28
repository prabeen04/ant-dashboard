import React, { Component } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/lib/Creatable';
import { Icon } from 'antd'
import { colourOptions, groupedOptions } from './options';

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};
const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
};

const formatGroupLabel = data => (
    <div style={groupStyles}>
        <span style={{ color: 'lightblue' }}> {data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);
class ProfileSettings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOption: null,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (newValue: any, actionMeta: any) => {
        console.group('Value Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };
    handleInputChange = (inputValue: any, actionMeta: any) => {
        console.group('Input Changed');
        console.log(inputValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    }
    handleChange = (selectedOption) => {
        console.log(selectedOption)
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }
    render() {
        return (
            <div style={{ height: 500, width: 200 }}>
                <h3>ProfileSettings Component</h3>
                <CreatableSelect
                    isClearable
                    defaultValue={colourOptions[1]}
                    options={groupedOptions}
                    formatGroupLabel={formatGroupLabel}
                    onChange={this.handleChange}
                    onInputChange={this.handleInputChange}
                />
            </div>
        )
    }
}

export default ProfileSettings;