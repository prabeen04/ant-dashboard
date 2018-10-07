import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form';
import { Button, Skeleton, Drawer } from "antd";
import { getEvents } from "../../actions/calendar_actions";
import $ from 'jquery';
// import 'moment/min/moment.min.js';
// import 'fullcalendar/dist/fullcalendar.print.min.css';
import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar/dist/fullcalendar.js';
import './FullCalendar.css';
import TextInput from '../../components/common/forms/textInput';
import DateInput from '../../components/common/forms/DateInput'

class FullCalendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerVisible: false
    }
  }
  renderInput = ({ input, label, type, meta: { touched, error }, ...custom }) => {
    return (
      <div>
        <TextInput
          placeholder={label}
          {...input}
          {...custom}
        />
        {touched && error && <span style={{ color: 'tomato' }}>{error}</span>}
      </div>
    )
  }
  renderDate = ({ input, label, type, meta: { touched, error }, ...custom }) => {
    return (
      <div>
        <DateInput
          placeholder={label}
          {...input}
          {...custom}
        />
        {touched && error && <span style={{ color: 'tomato' }}>{error}</span>}
      </div>
    )
  }
  onDrawerClose = () => {
    this.setState({ drawerVisible: false })
  }
  componentDidMount() {
    const { calendar } = this.refs;
    this.props.getEvents();
    $(calendar).fullCalendar({
      header: {
        left: 'today prev,next',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      height: 550,
      selectable: true,
      selectHelper: true,
      select: this.handleSelect,
      eventClick: this.handleEventClick,
      themeSystem: 'standard',
      nowIndicator: true,
      events: this.props.events
    });
  }
  handleSelect = (a, b, c, d) => {
    this.setState({ drawerVisible: true })
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
  }
  handleEventClick = (a, b, c) => {
    alert(a.title)
    console.log(a)
    console.log(b)
    console.log(c)
  }
  render() {
    const { isError, isLoading } = this.props;
    if (isLoading) {
      <div style={{ width: '100vw', height: '80vh', display: 'flex', justifyContent: 'center' }}>
        <Skeleton paragraph={{ rows: 8 }} />
      </div>
    }

    return (
      <div className="full-calendar-wrapper">
        <div ref="calendar"></div>
        <Drawer
          title="Create Event"
          placement="right"
          closable={false}
          width={500}
          onClose={this.onDrawerClose}
          visible={this.state.drawerVisible}
        >
          <div className="flex-container-column" style={{ justifyContent: 'flex-start' }}>
            <form>
              <Field
                name="startDate"
                label="Start Date"
                component={this.renderDate}
              />
              <Field
                name="endDate"
                label="End Date"
                component={this.renderDate}
              />
              <Field
                name="title"
                label="Title"
                component={this.renderInput}
              />
              <Field
                name="description"
                label="Description"
                component={this.renderInput}
              />
              <Button type="primary" htmlType="submit">Create Event</Button>
            </form>
          </div>
        </Drawer>
      </div>
    )
  }
}
FullCalendar = reduxForm({
  form: 'fullCalendarForm'
})(FullCalendar)

const mapStateToProps = ({ calendarReducer }) => ({
  events: calendarReducer.events,
  isLoading: calendarReducer.isLoading,
  isError: calendarReducer.isError,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getEvents
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FullCalendar);