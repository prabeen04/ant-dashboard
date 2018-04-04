import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import { Input } from 'antd';

class EventForm extends Component {
    constructor(props){
        super(props)
    
        this.renderInput = this.renderInput.bind(this);
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
  render() {
      console.log(this.props)
    return (
      <div>
        EventForm Component
        <Field 
        name="title"
        conponent={this.renderInput}/>
      </div>
    )
  }
}
EventForm = reduxForm({
    form: 'eventForm'
})(EventForm)
export default EventForm;