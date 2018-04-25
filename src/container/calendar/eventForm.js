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
    renderDatepicker = ({ input, label, type, meta: { touched, error }, ...custom }) => (
        <div>
            <DatePicker
                placeholder={label}
                onChange={this.onDateChange}
                defaultValue={moment("2018-04-18T18:30:00.000Z")}
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
                <Field
                    name="start"
                    label="Start Date"
                    value={moment('2015/01/01', dateFormat)}
                    format={(value, name) => {
                        return value === '' ? null : value
                    }}
                    component={this.renderDatepicker} />
                <Field
                    name="end"
                    label="End Date"
                    value={moment('2015/01/01', dateFormat)}
                    format={(value, name) => {
                        return value === '' ? null : value
                    }}
                    component={this.renderDatepicker} />
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