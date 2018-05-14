import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Input, Select } from 'antd'
const Option = Select.Option;

class ReduxFormArray extends Component {
    constructor(props) {
        super(props)

        this.renderInput = this.renderInput.bind(this);
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
    renderMembers = ({ fields, meta: { error, submitFailed } }) => (
        <div className="">

            {fields.map((member, index) => (
                <div key={index} style={{ display: 'flex' }}>
                    {/* <h4>Member #{index + 1}</h4> */}
                    <div className="expense-flex">
                        <Field
                            name={`${member}.expense_types`}
                            component="select"
                            label="Clients"
                            className="form-control">
                            <option value="cellphone">cellphone</option>
                            <option value="travell">travell</option>
                            <option value="hotel">hotel</option>
                            <option value="food">food</option>
                            <option value="others">others</option>
                        </Field>
                    </div>
                    <div className="expense-flex">
                        <Field
                            name={`${member}.expense_date`}
                            component="input"
                            type="date"
                            className="form-control"
                        />
                    </div>
                    <div className="expense-flex">
                        <Field
                            name={`${member}.client_types`}
                            component="select"
                            label="Clients"
                            className="form-control">
                            <option value="Lindelof">Lindelof</option>
                            <option value="baily">baily</option>
                            <option value="jones">jones</option>
                            <option value="rojo">rojo</option>
                            <option value="sanchez">sanchez</option>
                        </Field>
                    </div>
                    <div className="expense-flex">
                        <Field name={`${member}.description`} type="text" component={this.renderInput} label="Description" />
                    </div>
                    <div className="expense-flex">
                        <Field name={`${member}.field1`} type="text" component={this.renderInput} label="field1" />
                    </div>
                    <div className="expense-flex">
                        <Field name={`${member}.field2`} type="text" component={this.renderInput} label="field2" />
                    </div>
                    <div className="expense-flex">
                        <Field name={`${member}.field3`} type="text" component={this.renderInput} label="field3" />
                    </div>
                    <div className="expense-flex">
                        <Field name={`${member}.field4`} type="text" component={this.renderInput} label="field4" />
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
