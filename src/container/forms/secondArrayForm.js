import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm, FieldArray, formValueSelector } from 'redux-form';
import { validateSecondArray } from './validation/secondArrayValidate';
import { Select, Input, InputNumber, Button, Icon, } from 'antd';
const Option = Select.Option;

class SecondArrayForm extends Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
        this.renderInput = this.renderInput.bind(this);
        this.renderSelect = this.renderSelect.bind(this);
        this.renderMembers = this.renderMembers.bind(this);
        this.renderOptions = this.renderOptions.bind(this);
        this.fillData = this.fillData.bind(this);
        this.renderInputNumber = this.renderInputNumber.bind(this);
    }
    onSubmit = (values) => {
        console.log(values)
    }
    renderOptions = () => {
        return this.props.teams.map(( team, index) => {
            return <Option key={index} value={team.team}>{team.team}</Option>
        })
    }
    fillData = (member, value) => { 
        this.props.teams.forEach((team, index ) => {
            if(team.team === value){
                this.props.change(`${member}field2`,team.team)
                this.props.change(`${member}field3`, team.captain)
                this.props.change(`${member}field4`, team.trophy)
            }
        })
    }
    renderInputNumber = ({ input, label, type, meta: { touched, error }, ...custom }) => (
        <div>
            <label>{label}</label>
            <div>
                <InputNumber
                    placeholder={label}
                    {...input}
                    {...custom}
                    min={0}
                    max={100}
                />
                {touched && error && <span>{error}</span>}
            </div>

        </div>
    )
    renderInput = ({ input, label, type, meta: { touched, error }, ...custom }) => {
        // console.log(input)
        return <div>
            <label>{label}</label>
            <Input
                {...input}
                {...custom}
            />
            {touched && error && <span>{error}</span>}
        </div>
    }
    renderSelect = ({ input, label, type, meta: { touched, error }, ...custom }) => {
        return <div>
            <label>{label}</label>
            <Select
                {...input}
                {...custom}               
            >
            {this.renderOptions()}
            </Select>
            {touched && error && <span>{error}</span>}
        </div>
    }
    renderMembers = ({ change, fields, meta: { error, submitFailed } }) => (
        <div>
            {fields.map((member, index) => (
                <div key={index} style={{ display: 'flex' }}>
                    <div className="array-field">
                        <Field
                            name={`${member}.select1`}
                            component={this.renderSelect}
                            label="select1"
                            onChange = {(e, value) =>{
                                this.fillData(member, value)
                            }}
                        />
                    </div>
                    <div className="array-field">
                        <Field name={`${member}.field2`} component={this.renderInput} label="field2"disabled style={{backgroundColor: '#eee', color: '#444'}}/>
                    </div>

                    <div className="array-field">
                        <Field name={`${member}.field3`} component={this.renderInput} label="field3" disabled/>
                    </div>

                    <div className="array-field">
                        <Field name={`${member}.field4`} component={this.renderInputNumber} label="field4"disabled />
                    </div>
                    <div className="array-field">
                        <Field name={`${member}.field5`} component={this.renderInputNumber} label="field5" 
                        onChange={(e, value) => {
                            console.log(typeof value)
                        }}
                        normalize={(value) => +value} 
                        validate={(value) => isNaN(+value) ? "Please enter a number" : undefined}
                        />
                    </div>

                    <div className="array-field">
                        <Field name={`${member}.field6`} component={this.renderInput} label="field6" />
                    </div>
                    <button
                        type="button"
                        onClick={() => fields.remove(index)} >
                        delete
                    </button>
                </div>
            ))}
            <div className="">
                <button
                    type="button"
                    onClick={() => fields.push({})}
                >add
                </button>
                {submitFailed && error && <span>{error}</span>}
            </div>
        </div>
    );
    componentWillReceiveProps(nextProps, x){
        // console.log(nextProps.testValue)
    }
    render() {
        const { handleSubmit, submitting } = this.props;
        return (
            <div>
                <h1>SecondArrayForm</h1>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Field
                        name='team'
                        label='Team'
                        component={this.renderInput}
                    />
                    <Field
                        name='league'
                        label='League'
                        component={this.renderSelect}
                    />
                    <Field name='calcVal'
                        label='Calculated Value'
                        type='number'
                        component='input'
                        value={this.props.calculatedValue}
                        />
                    <FieldArray
                        name='member'
                        component={this.renderMembers} 
                    />
                    <br />
                    
                    <Button type="primary" htmlType="submit">Submit</Button>
                </form>
            </div>
        )
    }
}
const selector = formValueSelector('secondReduxForm');

SecondArrayForm = reduxForm({
    form: 'secondReduxForm',
    validate: validateSecondArray
})(SecondArrayForm)

const mapStateToProps = (state) => ({
    teams: state.secondArrayReducer.teams,
    // testValue: selector(state, 'member'),
    calculatedValue: state.secondArrayReducer.calculatedValue
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondArrayForm)
