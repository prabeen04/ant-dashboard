import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import { Input, DatePicker } from 'antd';

class EventForm extends Component {
    constructor(props){
        super(props)
    
        this.renderInput = this.renderInput.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
    }
    onDateChange = (date, dateString) => {
        console.log(date, dateString);
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
    renderDatepicker = ({ input, label, type, meta: { touched, error }, ...custom }) => (
        <div>
            <DatePicker 
                placeholder={label}
                onChange={this.onDateChange}
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
            label="Title"
            component={this.renderDatepicker}/>
        <Field 
            name="desc"
            label="Description"
            component={this.renderDatepicker}/>
        <Field 
            name="desc"
            label="Description"
            component={this.renderInput}/>
        <Field 
            name="desc"
            label="Description"
            component={this.renderInput}/>
      </div>
    )
  }
}
EventForm = reduxForm({
    form: 'eventForm'
})(EventForm)
export default EventForm;