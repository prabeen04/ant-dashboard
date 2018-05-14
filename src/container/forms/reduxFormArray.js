import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Input, Select, DatePicker } from 'antd'
import './form.css';
const Option = Select.Option;
const required = value => (value ? undefined : 'Required')
class ReduxFormArray extends Component {
    constructor(props) {
        super(props)

        this.renderInput = this.renderInput.bind(this);
        this.renderSelect = this.renderSelect.bind(this);
        this.renderDatePcker = this.renderDatePcker.bind(this);
        this.renderMembers = this.renderMembers.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit = values => {
        console.log(values)
    }
    renderInput = ({ input, label, type, meta: { touched, error }, ...custom }) => (
        <div>
            <Input
                placeholder={label}
                {...input}
                {...custom}
            />
            {touched && error && <span>{error}</span>}
        </div>
    )
    renderSelect = ({ input, label, type, meta: { touched, error }, ...custom }) => (
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
    )
    renderDatePcker = ({ input, label, type, meta: { touched, error }, ...custom }) => (
        <div>
            <DatePicker
                defaultValue={null}
                placeholder={label}
                // format="yyyy/mm/dd"
                {...input}
                {...custom}
                value= {input.value != '' ? moment(moment(input.value).format('DD MMM YYYY')) : null}
            />
            {touched && error && <span>{error}</span>}
        </div>
    )
    renderMembers = ({ fields, meta: { error, submitFailed } }) => (
        <div className="">

            {fields.map((member, index) => (
                <div key={index} style={{ display: 'flex' }}>
                    {/* <h4>Member #{index + 1}</h4> */}
                    <div className="array-field">
                        <Field
                            name={`${member}.select1`}
                            component={this.renderSelect}
                           />
                    </div>
                    <div className="array-field">
                        <Field
                            name={`${member}.date`}
                            component={this.renderDatePcker}
                            validate={[required]}
                        />
                    </div>
                    <div className="array-field">
                        <Field
                            name={`${member}.select2`}
                            component={this.renderSelect}
                           />
                    </div>
                    <div className="array-field">
                        <Field name={`${member}.description`} component={this.renderInput} label="Description" />
                    </div>
                    <div className="array-field">
                        <Field name={`${member}.field1`} component={this.renderInput} label="field1" />
                    </div>
                    <div className="array-field">
                        <Field name={`${member}.field2`} component={this.renderInput} label="field2" />
                    </div>
                    <div className="array-field">
                        <Field name={`${member}.field3`} component={this.renderInput} label="field3" />
                    </div>
                    <div className="array-field">
                        <Field name={`${member}.field4`} component={this.renderInput} label="field4" />
                    </div>

                    <button
                        onClick={() => fields.remove(index)} >
                        delete
                    </button>
                </div>
            ))}
            <div className="">
                <button
                    onClick={() => fields.push({})}
                >add
                </button>
                {submitFailed && error && <span>{error}</span>}
            </div>
        </div>
    )
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <FieldArray name="members" component={this.renderMembers} />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

ReduxFormArray = reduxForm({
    form: 'formArray'
})(ReduxFormArray)

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxFormArray)
