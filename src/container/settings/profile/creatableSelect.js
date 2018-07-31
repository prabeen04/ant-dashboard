import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field } from "redux-form";
import { Button } from "antd";
import CreatableSelect from 'react-select/lib/Creatable';
import { optionChange, openFormModal } from '../../../actions/selectAction';

const createOption = (label: string) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ''),
});
class Creatable extends Component {
    renderCreatableSelect = ({ input, ...custom }) => {
        const { value, onBlur, onChange } = input;
        return <CreatableSelect
            {...input}
            // {...custom}
            // isClearable
            // isDisabled={this.props.isLoading}
            isLoading={this.props.isLoading}
            onChange={(value) => input.onChange(value)}
            onCreateOption={this.props.openFormModal}
            options={this.props.colourOptions}
            value={input.value}
            onBlur={() => input.onBlur(input.value)}
        // value={custom.custom}
        />
    }
    onSubmit = (values) => {
        console.log(values)
    }
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
        const { handleSubmit, isLoading, colourOptions, currentValue } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Field
                        name='creatableSelect'
                        component={this.renderCreatableSelect}
                    />
                    <Button htmlType='submit' type='primary'>Submit</Button>

                </form>
            </div>

        );
    }
}
Creatable = reduxForm({
    form: 'creatableForm',
    enableReinitialize: true
})(Creatable)
const mapStateToProps = state => {
    return {
        colourOptions: state.selectReducer.colourOptions,
        currentValue: state.selectReducer.currentValue,
        isLoading: state.selectReducer.isLoading,
        initialValues: {
            creatableSelect: state.selectReducer.currentValue,
        }
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        optionChange,
        openFormModal
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Creatable);