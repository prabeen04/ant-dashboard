import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, FieldArray, reduxform } from 'redux-form'
import Select from 'react-select';
import { Icon } from 'antd'
import { colourOptions, groupedOptions } from './options';
import Creatable from "./creatableSelect";
import SelectFormModal from "./selectFormModal";
const optionTypes = [
    { value: 'vanilla', label: 'Vanilla', rating: 'safe' },
    { value: 'chocolate', label: 'Chocolate', rating: 'good' },
    { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
    { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' },
]
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
        <span style={{ color: 'blue' }}> {data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);
class ProfileSettings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOption: null,
            selectedOptions: []
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (selectedOption) => {
        console.log(selectedOption)
        this.setState((prevState) => ({
            selectedOption: selectedOption,
        }))
        console.log(`Option selected:`, selectedOption);
    }
    render() {
        const { selectedOption } = this.state;
        return (
            <div style={{ height: 500, width: 400 }}>
                <h3>Option group</h3>
                {selectedOption &&
                    selectedOption.map((option, i) => {
                        return (
                            <React.Fragment key={i}>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <h2>{option.label}</h2>
                                    <div style={{ flexBasis: '80%' }}>
                                        <Select
                                            isClearable
                                            options={optionTypes}
                                            formatGroupLabel={formatGroupLabel}
                                            placeholder="Chose position ..."
                                            styles={{ width: 200 }}
                                        />
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
                <Select
                    isClearable
                    isMulti
                    options={groupedOptions}
                    formatGroupLabel={formatGroupLabel}
                    onChange={this.handleChange}
                    placeholder="Choose Color or Flavour ..."
                />
                <br />
                <h3>Creatable Select box</h3>
                <Creatable />
                <SelectFormModal />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings);