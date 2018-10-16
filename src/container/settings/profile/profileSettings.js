import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form'
import Select from 'react-select';
import { Icon, Button, Divider } from 'antd'
import { colourOptions, groupedOptions } from './options';
import Creatable from "./creatableSelect";
import SelectFormModal from "./selectFormModal";
import { StyledReactSelect, StyledCreatable } from "../../../components/UI/Elements";

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
            selectedCustomOptions: []
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
    handleCustomOptionChange = (option) => {
        console.log(option)
    }
    renderSelect = ({ input, meta: { error, isTouched }, ...custom }) => {
        console.log('...custom')
        console.log(...custom)
        return (
            <StyledReactSelect
                isClearable
                isMulti
                options={groupedOptions}
                formatGroupLabel={formatGroupLabel}
                placeholder="Choose Color or Flavour ..."
                {...input}
                onChange={input.onChange}
                onBlur={() => input.onBlur()}
                defaultValue={[]}
                {...custom}
            />
        )
    }

    onSubmit = values => console.log(values)
    render() {
        // const { selectedOption } = this.state;
        const { handleSubmit, submitting, selectedOptions } = this.props;
        return (
            <div style={{ height: 500, width: 400 }}>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <h3>Option group</h3>
                    {selectedOptions &&
                        selectedOptions.map((option, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <h2>{option.label}</h2>
                                        <div style={{ flexBasis: '80%' }}>
                                            <StyledReactSelect
                                                isClearable
                                                options={optionTypes}
                                                formatGroupLabel={formatGroupLabel}
                                                placeholder="Choose position ..."
                                                styles={{ width: 200 }}
                                                onChange={this.handleCustomOptionChange}
                                            />
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                    <Field
                        name="selectItem"
                        component={this.renderSelect}
                    // onChange={this.handleChange}
                    />
                    <Button type="primary" htmlType="submit">Submit</Button>
                </form>
                <Divider />
                <h3>Creatable Select box</h3>
                <StyledCreatable
                    isClearable
                    options={optionTypes}
                    formatGroupLabel={formatGroupLabel}
                    placeholder="Choose position ..."
                    styles={{ width: 200 }}
                    className="prabeen"
                    onChange={this.handleCustomOptionChange}
                />
                <Creatable />
                <SelectFormModal />
            </div>
        )
    }
}
ProfileSettings = reduxForm({
    form: 'profileSettingsForm'
})(ProfileSettings)
const selector = formValueSelector('profileSettingsForm')

const mapStateToProps = (state) => ({
    selectedOptions: selector(state, 'selectItem')
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings);