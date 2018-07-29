import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CreatableSelect from 'react-select/lib/Creatable';
import { optionChange, newOptionCreate } from '../../../actions/selectAction';
import { colourOptions } from './options';

const createOption = (label: string) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ''),
  });
class Creatable extends Component {
    handleChange = (newValue: any, actionMeta: any) => {
        console.group('Value Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
        this.setState({ value: newValue });
    };
    handleCreate = (inputValue: any) => {
        this.setState({ isLoading: true });
        console.group('Option created');
        console.log('Wait a moment...');
        setTimeout(() => {
            const { options } = this.state;
            const newOption = createOption(inputValue);
            console.log(newOption);
            console.groupEnd();
            this.setState({
                isLoading: false,
                options: [...options, newOption],
                value: newOption,
            });
        }, 1000);
    };
    render() {
        const { isLoading, options, value } = this.props;
        return (
            <CreatableSelect
                isClearable
                isDisabled={isLoading}
                isLoading={isLoading}
                onChange={this.props.optionChange}
                onCreateOption={this.props.newOptionCreate}
                options={colourOptions}
                value={value}
            />
        );
    }
}

const mapStateToProps = state => {
    return{
        colourOptions: state.selectReducer.colourOptions,       
        currentValue:  state.selectReducer.currentValue,
        isLoading: state.selectReducer.isLoading
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        optionChange,
        newOptionCreate
    }, dispatch)
}
export default connect(mapStateToProps)(Creatable);