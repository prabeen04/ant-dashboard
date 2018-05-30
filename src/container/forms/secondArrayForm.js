import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm, FieldArray, change, formValueSelector } from 'redux-form';
import { validateSecondArray } from './validation/secondArrayValidate';
import { Select, Input, InputNumber, Button, Icon, } from 'antd';
import './form.css';
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
        this.renderCalculatedValue = this.renderCalculatedValue.bind(this);
        this.handleTotalCalculation = this.handleTotalCalculation.bind(this);
    }
    onSubmit = (values) => {
        console.log(values)
    }
    renderOptions = () => {
        return this.props.teams.map((team, index) => {
            return <option key={index} value={team.team}>{team.team}</option>
        })
    }
    fillData = (member, value) => {
        this.props.teams.forEach((team, index) => {
            if (team.team === value) {
                this.props.change(`${member}field2`, team.team)
                this.props.change(`${member}field3`, team.captain)
                this.props.change(`${member}field4`, team.trophy)
            }
        })
    }
    handleTotalCalculation = (value, field, fieldValues) => {
        if (field === 'field5') {
            if (fieldValues.field4 === undefined) {
                return 0.0
            }
            if (fieldValues.field4) {
                if (!fieldValues.field6 && !fieldValues.field7) {
                    return 0
                }
                let discountAmount = (fieldValues.field4 * ((100 - value) / 100))
                let taxableAmount = (discountAmount * ((100 + fieldValues.field6) / 100))
                return ((parseFloat(taxableAmount)) * fieldValues.field7).toFixed(2)
            }
        }
        if (field === 'field6') {
            if (fieldValues.field4 === undefined) {
                return 0.0
            }
            if (fieldValues.field4) {
                if (!fieldValues.field5 && !fieldValues.field7) {
                    return 0
                }
                let discountAmount = (fieldValues.field4 * ((100 - fieldValues.field5) / 100))
                let taxableAmount = (discountAmount * ((100 + value) / 100))
                return ((parseFloat(taxableAmount)) * fieldValues.field7).toFixed(2)
                // return (value + fieldValues.field4 + fieldValues.field5) * fieldValues.field7
            }
        }
        if (field === 'field7') {
            if (fieldValues.field4 === undefined) {
                return 0.0
            }
            if (fieldValues.field4) {
                if (!fieldValues.field5 && !fieldValues.field6) {
                    return 0
                }
                let discountAmount = (fieldValues.field4 * ((100 - fieldValues.field5) / 100))
                let taxableAmount = (discountAmount * ((100 + fieldValues.field6) / 100))
                return ((parseFloat(taxableAmount)) * value).toFixed(2)
                // return value * (fieldValues.field4 + fieldValues.field5 + fieldValues.field6)
            }
        }
        if (field === 'select1') {
            // if (value === undefined) {
            //     return 0.0
            // }
            if (fieldValues.field5 && fieldValues.field6 && fieldValues.field7) {
                console.log(fieldValues.field4)
                if (!fieldValues.field4) {
                    return 0
                }
                let discountAmount = (fieldValues.field4 * ((100 - fieldValues.field5) / 100))
                let taxableAmount = (discountAmount * ((100 + fieldValues.field6) / 100))
                return ((parseFloat(taxableAmount)) * fieldValues.field7).toFixed(2)
                // return value * (fieldValues.field4 + fieldValues.field5 + fieldValues.field6)
            }
        }

    }
    renderCalculatedValue = ({ input, label, type, meta: { touched, error }, ...custom }) => (
        <div>
            <label>{label}</label>
            <div>
                <input
                    placeholder={label}
                    {...input}
                    {...custom}
                    type="number"
                    min={0}
                    style={{ border: '1px solid #ccc', width: 200, height: 32, borderRadius: 4 }}
                    value={this.props.calculatedValue}
                />
                {touched && error && <span>{error}</span>}
            </div>

        </div>
    )
    renderInputNumber = ({ input, label, type, meta: { touched, error }, ...custom }) => (
        <div>
            <label>{label}</label>
            <div>
                <input
                    placeholder={label}
                    {...input}
                    {...custom}
                    min={0}
                    max={100}
                    type="number"
                    style={{ border: '1px solid #ccc', width: 150, height: 32, borderRadius: 4 }}
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
            <select
                {...input}
                {...custom}
                style={{ border: '1px solid #ccc', width: 180, height: 32, borderRadius: 4 }}
            >
                {this.renderOptions()}
            </select>
            {touched && error && <span>{error}</span>}
        </div>
    }
    renderMembers = ({ change, fields, meta: { error, submitFailed } }) => {
        return (
            <div>
                {fields.map((member, index) => {
                    // console.log(fields.get(index))
                    return (
                        < div key={index} style={{ display: 'flex' }
                        }>
                            <div className="array-field">
                                <Field
                                    name={`${member}.select1`}
                                    component={this.renderSelect}
                                    label="select1"
                                    onChange={(e, value) => {
                                        const sleep = () => new Promise(resolve => this.fillData(member, value))
                                        sleep().then(()=>{
                                            console.log('promise resolved')
                                            change(`${member}.field8`, this.handleTotalCalculation(value, 'select1', fields.get(index)))                                            
                                        })
                                        // this.fillData(member, value)
                                        // setTimeout(()=>{
                                        //     change(`${member}.field8`, this.handleTotalCalculation(value, 'select1', fields.get(index)))
                                        // },1000)
                                    }}
                                />
                            </div>
                            <div className="array-field">
                                <Field name={`${member}.field2`} component={this.renderInput} label="field2" disabled style={{ backgroundColor: '#eee', color: '#444' }} />
                            </div>

                            <div className="array-field">
                                <Field name={`${member}.field3`} component={this.renderInput} label="field3" disabled />
                            </div>

                            <div className="array-field">
                                <Field name={`${member}.field4`} component={this.renderInputNumber} label="field4" disabled
                                    normalize={(value) => +value}
                                />
                            </div>
                            <div className="array-field">
                                <Field name={`${member}.field5`} component={this.renderInputNumber} label="field5"
                                    onChange={(e, value) => {
                                        change(`${member}.field8`, this.handleTotalCalculation(value, 'field5', fields.get(index)))
                                    }}
                                    normalize={(value) => +value}
                                // validate={(value) => isNaN(+value) ? "Please enter a number" : undefined}
                                />
                            </div>

                            <div className="array-field">
                                <Field name={`${member}.field6`} component={this.renderInputNumber} label="field6"
                                    onChange={(e, value) => {
                                        change(`${member}.field8`, this.handleTotalCalculation(value, 'field6', fields.get(index)))
                                    }}
                                    normalize={(value) => +value}
                                />
                            </div>
                            <div className="array-field">
                                <Field name={`${member}.field7`} component={this.renderInputNumber} label="field7"
                                    onChange={(e, value) => {
                                        change(`${member}.field8`, this.handleTotalCalculation(value, 'field7', fields.get(index)))
                                    }}
                                    normalize={(value) => +value}
                                />
                            </div>
                            <div className="array-field">
                                <Field name={`${member}.field8`} component={this.renderInputNumber} label="field8"
                                    // onChange={(e, value) => {
                                    //     change(`${member}.field7`, this.handleTotalCalculation(value, 'field7', fields.get(index)))
                                    // }}
                                    normalize={(value) => +value}
                                    disabled
                                />
                            </div>
                            <button
                                type="button"
                                onClick={() => fields.remove(index)} >
                                delete
                    </button>
                        </div>
                    )
                })
                }
                <div className="">
                    <button
                        type="button"
                        onClick={() => fields.push({})}
                    >add
                </button>
                    {submitFailed && error && <span>{error}</span>}
                </div>
            </div >
        )
    };
    componentWillReceiveProps(nextProps, x) {
        // console.log(nextProps.testValue)
        if (nextProps.testValue) {
            nextProps.testValue.forEach(val => {
                // console.log(val.field8)
            })
            nextProps.testValue.map((value) => {
                console.log(value.field8)
            })
            // nextProps.testValue.reduce((a, b) => {
            //     console.log(a)
            //     console.log(b)
            // })
        }

    }
    render() {
        const { handleSubmit, pristine, reset, submitting, change } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    {/* <Field
                        name='team'
                        label='Team'
                        component={this.renderInput}
                    />
                    <Field
                        name='league'
                        label='League'
                        component={this.renderSelect}
                    /> */}
                    <Field name='calcVal'
                        label='Calculated Value'
                        type='number'
                        component={this.renderCalculatedValue}
                    />
                    <FieldArray
                        name='member'
                        component={this.renderMembers}
                        change={change}
                    />
                    <br />

                    <Button type="primary" htmlType="submit">Submit</Button>
                </form>
            </div>
        )
    }
}

SecondArrayForm = reduxForm({
    form: 'secondReduxForm',
    validate: validateSecondArray
})(SecondArrayForm)
const selector = formValueSelector('secondReduxForm');

const mapStateToProps = (state, props) => {
    const testValue = selector(state, `member`)
    return {
        teams: state.secondArrayReducer.teams,
        calculatedValue: state.secondArrayReducer.calculatedValue,
        initialValues: {
            // "members": [{
            //     // select1: 'food',
            //     // field1: state.formArrayReducer.currency
            // }]
        },
        testValue
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondArrayForm)
