import React, { Component } from 'react'
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { DatePicker, Button } from 'antd';
import PlaceInput from '../../components/common/forms/placeInput'
import { addEvent } from '../../actions/calendar_actions';
import { Input } from "../../components/UI/Elements";
import { StyledDatePicker } from "../../components/UI/Antd";
const { MonthPicker, RangePicker } = DatePicker;

class EventForm extends Component {
    constructor(props) {
        super(props)
        this.renderInput = this.renderInput.bind(this);
        this.renderDate = this.renderDate.bind(this);
        this.eventSubmit = this.eventSubmit.bind(this);
    }
    eventSubmit = (values) => {
        console.log(values)
        this.props.addEvent(values)
    }
    renderInput = ({ input, label, type, meta: { touched, error }, ...custom }) => {
        return (
            <div>
                <Input
                    placeholder={label}
                    {...input}
                    {...custom}
                />
                {touched && error && <span style={{ color: 'tomato' }}>{error}</span>}
            </div>
        )
    }
    renderDate = ({ input, meta: { touched, error }, ...custom }) => {
        return (
            <div>
                <StyledDatePicker {...input} disabled={true}
                />
                {touched && error && <span style={{ color: 'tomato' }}>{error}</span>}
            </div>
        )
    }
    render() {
        const { handleSubmit, submitting } = this.props
        return (
            <div>
                <form onSubmit={handleSubmit(this.eventSubmit)}>
                    <Field
                        name="start"
                        label="Start Date"
                        component={this.renderDate} />
                    <Field
                        name="end"
                        label="End Date"
                        component={this.renderDate}
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
                        component={PlaceInput} />
                    <Button type="primary" htmlType="submit">Add Event</Button>
                </form>
            </div>
        )
    }
}
const validate = (values) => {
    const errors = {}
    if (!values.start) {
        errors.startDate = 'required'
    }
    if (!values.end) {
        errors.endDate = 'required'
    }
    if (!values.title) {
        errors.title = 'required'
    }
    if (!values.user) {
        errors.user = 'required'
    }
    if (!values.description) {
        errors.description = 'required'
    }

    return errors;
}
EventForm = reduxForm({
    form: 'calendarForm',
    validate,
    enableReinitialize: true
})(EventForm)
const mapStateToProps = (state) => {
    return {
        initialValues: {
            start: state.calendarReducer.startDate,
            end: state.calendarReducer.endDate
        }
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addEvent
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(EventForm);