import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { Form, Input, Icon, Select, Checkbox, Button, label } from 'antd';

export class ReduxForm extends Component {
    constructor(props) {
        super(props)

        this.renderInput = this.renderInput.bind(this);
    }

    renderInput = ({ label, input, meta }) => {
        return <div style={{margin: 2}}>
            <label>{label}</label>
            <Input {...input} placeholder={label} />
        </div>
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit}>
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
                </form>
            </div>
        )
    }
}

ReduxForm = reduxForm({
    form: 'reduxForm'
})(ReduxForm);

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxForm)
