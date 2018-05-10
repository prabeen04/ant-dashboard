import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { Form, Input, Icon, Select, Checkbox, Button, label } from 'antd';
const Option = Select.Option;

export class ReduxForm extends Component {
    constructor(props) {
        super(props)

        this.renderInput = this.renderInput.bind(this);
        this.renderSelect = this.renderSelect.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit = (values) => {
        console.log(values);
    }
    renderInput = ({ label, input, meta }) => {
        return <div style={{ margin: 2 }}>
            <label>{label}</label>
            <Input {...input} placeholder={label} />
        </div>
    }
    renderSelect = ({ label, input, meta }) => {
        return <div style={{ margin: 2 }}>
            <Select {...input}/>
        </div>
    }
    render() {
        const { handleSubmit, submitting } = this.props;
        return (
            <div>
                <h3>Redux Form Component</h3>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Field
                        name="firstName"
                        label="First Name"
                        component={this.renderInput}
                    />
                    <Field
                        name="lastName"
                        label="Last Name"
                        component={this.renderInput}
                    />
                    <Field
                        name="location"
                        label="Location"
                        component={this.renderInput}
                    />
                     <Field
                        name="street"
                        label="Street"
                        component={this.renderInput}
                    />
                    <Field
                        name="city"
                        component={this.renderSelect}>
                        <option value="jack">Jack</option>
                        <option value="lucy">Lucy</option>
                    </Field>
                    <Button htmlType="submit" type="primary" icon="poweroff" loading={submitting}>Submit</Button>
                </form>
            </div>
        )
    }
}

ReduxForm = reduxForm({
    form: 'reduxForm'
})(ReduxForm);

const mapStateToProps = (state) => {
    return {
        initialValues: {
            firstName: state.formReducer.firstName,
            lastName: state.formReducer.lastName,
            location: state.formReducer.location,
        }
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxForm)
