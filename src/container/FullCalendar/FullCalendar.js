import React, { Component } from 'react';
import { connect } from "react-redux";
import $ from 'jquery';
// import 'moment/min/moment.min.js';
// import 'fullcalendar/dist/fullcalendar.print.min.css';
import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar/dist/fullcalendar.js';
import './FullCalendar.css';

class FullCalendar extends Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {
    const { calendar } = this.refs;

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
    return (
      <div className="full-calendar-wrapper">
        <div ref="calendar"></div>
      </div>
    )
  }
}

const mapStateToProps = ({ calendarReducer }) => ({
  events: calendarReducer.events
})
export default connect(mapStateToProps)(FullCalendar);