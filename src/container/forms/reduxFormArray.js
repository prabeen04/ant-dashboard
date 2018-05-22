import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import store from '../../store';
import { bindActionCreators } from 'redux';
import { Field, FieldArray, reduxForm, change } from 'redux-form';
import { Input, InputNumber, Select, DatePicker, Upload, Button, Icon } from 'antd'
import { validate } from './validate';
import { setCurrency } from '../../actions/formArrayAction';
import './form.css';
const Option = Select.Option;

class ReduxFormArray extends Component {
    constructor(props) {
        super(props)
        this.state = {
            calculatedValue: 65
        }
        this.renderHiddenInput = this.renderHiddenInput.bind(this);
        this.renderInput = this.renderInput.bind(this);
        this.renderSelect = this.renderSelect.bind(this);
        this.renderSelect2 = this.renderSelect2.bind(this);
        this.renderSelect3 = this.renderSelect3.bind(this);
        this.renderDatePcker = this.renderDatePcker.bind(this);
        this.renderUpload = this.renderUpload.bind(this);
        this.renderFileUpload = this.renderFileUpload.bind(this);
        this.renderMembers = this.renderMembers.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
        this.handleCurrencyCalculation = this.handleCurrencyCalculation.bind(this);
    }
    onSubmit = values => {
        console.log(JSON.stringify(values))

    }
    handleCurrencyChange = (currency) => {
        this.props.setCurrency(currency);
    }
    handleCurrencyCalculation = (value) => {
        return'ajhjahfsa'
    }
    renderHiddenInput = ({ input, label, type, meta: { touched, error }, ...custom }) => (
                <input
                    type='hidden'
                    {...input}
                    {...custom}
                    value='prabeen'
                />
    )
    renderInput = ({ input, label, type, meta: { touched, error }, ...custom }) => (
        <div>
            <label>{label}</label>
            <div>
                <Input
                    placeholder={label}
                    {...input}
                    {...custom}
                />
                {touched && error && <span>{error}</span>}
            </div>

        </div>
    )
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
                // type="number"
                // defaultValue={this.state.amount}
                // onChange={this.handleCurrencyCalculation}
                />
                {touched && error && <span>{error}</span>}
            </div>

        </div>
    )
    renderSelect = ({ input, label, type, meta: { touched, error }, ...custom }) => (
        <div>
            <label>{label}</label>
            <div>
                <Select
                    placeholder={label}
                    {...input}
                    {...custom}
                >
                    <Option value="cellphone">cellphone</Option>
                    <Option value="travell">travell</Option>
                    <Option value="hotel">hotel</Option>
                    <Option value="food">food</Option>
                    <Option value="others">others</Option>
                </Select>
                {touched && error && <span>{error}</span>}
            </div>

        </div>
    )
    renderSelect2 = ({ input, label, type, meta: { touched, error }, ...custom }) => {
        console.log(input)
        return <div>
            <label>{label}</label>
            <div>
                <Select
                    placeholder={label}
                    defaultValue={this.props.currency && 'euro'}
                    {...input}
                    {...custom}
                // defaultValue='euro'
                //  value={this.props.currency !== null ?this.props.currency : 'euro'}
                // onChange={(val)=>this.props.setCurrency(val)}
                >
                    <Option value="dollar" key="dollar">Dollar</Option>
                    <Option value="rupees" key="rupees">Rupees</Option>
                    <Option value="euro" key="euro">Euro</Option>
                    <Option value="pound" key="pound">Pound</Option>
                </Select>
                {touched && error && <span>{error}</span>}
            </div>

        </div>
    }
    renderSelect3 = ({ input, label, amount, type, meta: { touched, error }, ...custom }) => {
        return <div>
            <label>{label}</label>
            <div>
                <select
                    placeholder={label}
                    {...input}
                    {...custom}
                >
                    <option value="dollar">Dollar</option>
                    <option value="rupees">Rupees</option>
                    <option value="euro">Euro</option>
                    <option value="pound">Pound</option>
                </select>
                {touched && error && <span>{error}</span>}
            </div>

        </div>
    }
    renderDatePcker = ({ input, label, type, meta: { touched, error }, ...custom }) => (
        <div>
            <label>{label}</label>
            <div>
                <DatePicker
                    defaultValue={null}
                    placeholder={label}
                    // format="yyyy/mm/dd"
                    {...input}
                    {...custom}
                    value={input.value != '' ? moment(moment(input.value).format('DD MMM YYYY')) : null}
                />
                {touched && error && <span>{`${error}`}</span>}
            </div>

        </div>
    )
    renderUpload = ({ input, label, type, meta: { touched, error }, ...custom }) => (
        <div>
            <label>{label}</label>
            <div>
                <Upload {...input}>
                    <Button>
                        <Icon type="upload" /> Click to Upload
                    </Button>
                </Upload>

                {touched && error && <span>{`${error}`}</span>}
            </div>

        </div>
    )
    renderFileUpload = ({ input, label, type, meta: { touched, error }, ...custom }) => (
        <div>
            <label>{label}</label>
            <div>
                <input
                    type="file"
                    {...input}
                />
                {touched && error && <span>{`${error}`}</span>}
            </div>

        </div>
    )
    renderMembers = ({ change, fields, meta: { error, submitFailed } }) => (
        <div>
            {fields.map((member, index) => (
                <div key={index} style={{ display: 'flex' }}>
                    <div className="array-field">
                        <Field
                            name={`${member}.date`}
                            component={this.renderDatePcker}
                            label="date"
                        />
                    </div>
                    <div className="array-field">
                        <Field
                            name={`${member}.select1`}
                            component={this.renderSelect}
                            label="select1"
                        />
                    </div>
                    <div className="array-field">
                        <Field
                            name={`${member}.select2`}
                            component={this.renderSelect}
                            label="select2"
                        />
                    </div>
                    <div className="array-field">
                        <Field name={`${member}.description`} component={this.renderInput} label="Description" />
                    </div>
                    <div className="array-field">
                        <Field name={`${member}.field1`} component={this.renderSelect3} label="field1"
                            value={this.props.currency && 'euro'}
                            onChange={(e, value) => this.props.setCurrency(value)} />
                    </div>
                    <div className="array-field">
                        <Field name={`${member}.field2`} component={this.renderInputNumber} label="Amount"
                            onChange={(e, value) => {
                                console.log(member)
                                change(`${member}.field3`, this.handleCurrencyCalculation('sdgsdg'))
                            }} />
                    </div>
                       
                    <div className="array-field">
                        <Field name={`${member}.field3`} component={this.renderInput} label="field3" />
                    </div>
                    <Field name={`${member}.hidden`} component={this.renderHiddenInput} type='hidden'
                          />
                    <div className="array-field">
                        <Field name={`${member}.field4`} component={this.renderInput} label="field4" />
                    </div>
                    {/* <div>
                        <Upload>
                            <Button>
                                <Icon type="upload" /> Click to Upload
                            </Button>
                        </Upload>
                    </div> */}
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
                    onClick={() => fields.push({ field1: this.props.currency || 'rupees' })}
                >add
                </button>
                {submitFailed && error && <span>{error}</span>}
            </div>
        </div>
    );
    // shouldComponentUpdate(a){
    //     return false;
    // }
    render() {
        const { handleSubmit, pristine, reset, submitting, change } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <FieldArray name="members" component={this.renderMembers} change={change} />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

const required = value => (value ? undefined : 'Required')

ReduxFormArray = reduxForm({
    form: 'formArray',
    validate,
    // enableReinitialize: true,
})(ReduxFormArray)

const mapStateToProps = (state) => {
    return {
        initialValues: {
            "members": [{
                field1: state.formArrayReducer.currency
            }]
        },
        currency: state.formArrayReducer.currency
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setCurrency: setCurrency
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxFormArray)
