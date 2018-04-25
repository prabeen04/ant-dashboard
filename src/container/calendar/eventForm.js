import React, { Component } from 'react'
import moment from 'moment';
import { Field } from 'redux-form';
import { Input, DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

class EventForm extends Component {
    constructor(props) {
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
                value={this.props.start || null}
                {...input}
                {...custom}
            />
            {touched && error && <span>{error}</span>}
        </div>
    )
    
    render() {
        console.log(this.props.start)
        return (
            <div>
                <Field
                    name="start"
                    label="Start Date"
                    value={moment(this.props.start || null, dateFormat)}
                    component={DatePicker} />
                <Field
                    name="end"
                    label="End Date"
                    value={moment(this.props.end || null, dateFormat)}
                    component={DatePicker} />
                <Field
                    name="title"
                    label="Title"
                    component={this.renderInput} />
                <Field
                    name="user"
                    label="User"
                    component={this.renderInput} />
                <Field
                    name="description"
                    label="Description"
                    component={this.renderInput} />

            </div>
        )
    }
}
export default EventForm;