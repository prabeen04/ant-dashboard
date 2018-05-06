import React, { Component } from 'react'
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { Input, DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;

class EventForm extends Component {
    constructor(props) {
        super(props)      

        this.renderInput = this.renderInput.bind(this);
        this.renderStartDate = this.renderStartDate.bind(this);
        this.renderEndDate = this.renderEndDate.bind(this);
    }

    renderInput = ({ input, label, type, meta: { touched, error }, ...custom }) => {
        return (
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
    }
    renderStartDate = ({ input, label, value, type, meta: { touched, error }, ...custom }) => {
        // console.log(value)
        return (
            <DatePicker {...input} />
        )
    }
    renderEndDate = ({ input, label, type, meta: { touched, error }, ...custom }) => {
        
        return (
            <DatePicker {...input} />
        )
    }
    render() {
        console.log(this.props)
        return (
            <div>
               <form >
                <Field
                    name="startDate"
                    label="Start Date"
                    component={this.renderStartDate} />
                <Field
                    name="endDate"
                    label="End Date"
                    component={this.renderEndDate}
                    />
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
                </form> 
            </div>
        )
    }
}
EventForm = reduxForm({
    form: 'calendarEventForm',
    enableReinitialize: true
})
const mapStateToProps = state =>{
    return{
        initialValues: {
            startDate: state.calendarReducer.start,
            endDate: state.calendarReducer.end
        }
    }
}

const mapDispatchToProps = dispatch =>{
    return bindActionCreators({

    })
}
export default connect(mapStateToProps, mapDispatchToProps)(EventForm);