import React, { Component } from 'react'
import moment from 'moment';
import { Field } from 'redux-form';
import { Input } from 'antd';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// const { MonthPicker, RangePicker } = DatePicker;

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
    renderInput = ({ input, label, type, meta: { touched, error }, ...custom }) =>{ 
        return(
        <div>
            <Input
                placeholder={label}
                value={this.props.start || null}
                {...input}
                {...custom}
            />
            {touched && error && <span>{error}</span>}
        </div>
    )}
    render() {
        console.log(this.props.start)
        return (
            <div>
                {/* <DatePicker 
                    defaultValue={this.props.start 
                        ? moment(this.props.start, 'YYYY-MM-DD') 
                        : moment('2018-04-17T18:30:00.000Z', 'YYYY-MM-DD')} /> */}
                <DatePicker
                        selected={this.props.start 
                            ? moment(this.props.start, 'YYYY-MM-DD') 
                            : moment('2018-04-17T18:30:00.000Z', 'YYYY-MM-DD')}/>        
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