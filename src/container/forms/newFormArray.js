import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Input, Select, DatePicker } from 'antd'
import {validate} from './validate';

class ReduxFormArray extends Component {
    constructor(props) {
        super(props)

        this.renderField = this.renderField.bind(this);
        this.renderMember = this.renderMember.bind(this);
    }
    onSubmit = values => {
        console.log(JSON.stringify(values))

    }
    renderField = ({ input, label, type, meta: { touched, error } }) => (
        <div>
          <label>{label}</label>
          <div>
            <input {...input} type={type} placeholder={label} />
            {touched && error && <span>{error}</span>}
          </div>
        </div>
      )
       renderMembers = ({ fields, meta: { error, submitFailed } }) => (
        <ul>
          <li>
            <button type="button" onClick={() => fields.push({})}>
              Add Member
            </button>
            {submitFailed && error && <span>{error}</span>}
          </li>
          {fields.map((member, index) => (
            <li key={index}>
              <button
                type="button"
                title="Remove Member"
                onClick={() => fields.remove(index)}
              />
              <h4>Member #{index + 1}</h4>
              <Field
                name={`${member}.firstName`}
                type="text"
                component={this.renderField}
                label="First Name"
              />
              <Field
                name={`${member}.lastName`}
                type="text"
                component={this.renderField}
                label="Last Name"
              />
            </li>
          ))}
        </ul>
      )
       
    render() {
        const { handleSubmit, pristine, reset, submitting  } = this.props;
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
    form: 'newFormArray',
    validate
})(ReduxFormArray)

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxFormArray)
