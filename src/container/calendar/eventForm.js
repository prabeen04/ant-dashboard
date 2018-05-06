import React, { Component } from 'react'
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { Input, DatePicker, Button } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;

class EventForm extends Component {
    constructor(props) {
        super(props)

        this.renderInput = this.renderInput.bind(this);
        this.renderStartDate = this.renderStartDate.bind(this);
        this.renderEndDate = this.renderEndDate.bind(this);
        this.eventSubmit = this.eventSubmit.bind(this);
    }
    eventSubmit = (values) => {
        console.log(values)
    }
    renderInput = ({ input, label, type, meta: { touched, error }, ...custom }) => {
        return (
            <div>
                <Input
                    placeholder={label}
                    {...input}
                    {...custom}
                />
                {touched && error && <span>{error}</span>}
            </div>
        )
    }
    renderStartDate = ({ input, meta: { touched, error }, ...custom }) => {
        return (
            <DatePicker {...input} />
        )
    }
    renderEndDate = ({ input, meta: { touched, error }, ...custom }) => {
        return (
            <DatePicker {...input} />
        )
    }
    render() {
        const { handleSubmit, submitting } = this.props
        return (
            <div>
                <form onSubmit={handleSubmit(this.eventSubmit)}>
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
                    <Button type="primary" htmlType="submit">Add Event</Button>
                </form>
            </div>
        )
    }
}
const validate = (values) => {
    const errors = {}
    if(!values.title){
        errors.title = 'required'
    }
    return errors;
}
EventForm = reduxForm({
    form: 'calendarForm',
    validate,
    enableReinitialize: true
})(EventForm)
const mapStateToProps = (state) => {
    console.log()
    return {
        initialValues: {
            startDate: state.calendarReducer.startDate,
            endDate: state.calendarReducer.endDate
        }
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({

    })
}
export default connect(mapStateToProps, mapDispatchToProps)(EventForm);