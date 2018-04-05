import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import { Input, DatePicker } from 'antd';
import { addEvent } from '../../actions/calendar_actions';

class EventForm extends Component {
    constructor(props) {
        super(props)

        this.renderInput = this.renderInput.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit = (values) => {
        console.log('values')
        this.props.addEvent(values);
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
                value={Date.now()}
                {...input}
                {...custom}
            />
            {touched && error && <span>{error}</span>}
        </div>
    )
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Field
                        name="startDate"
                        label="Start Date"
                        format={(value, name) => {
                            return value === '' ? null : value
                        }}
                        component={this.renderDatepicker} />
                    <Field
                        name="endDate"
                        label="End Date"
                        format={(value, name) => {
                            return value === '' ? null : value
                        }}
                        component={this.renderDatepicker} />
                    <Field
                        name="desc"
                        label="Description"
                        component={this.renderInput} />
                    <Field
                        name="desc"
                        label="Description"
                        component={this.renderInput} />
                </form>
            </div>
        )
    }
}
EventForm = reduxForm({
    form: 'eventForm'
})(EventForm)
export default EventForm;