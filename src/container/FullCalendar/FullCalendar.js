import React, { Component } from 'react';
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
      themeSystem: 'standard',
      nowIndicator: true,
      events: [
        {
          start: '2018-10-06',
          end: '2018-10-08',
          title: 'Test event',
          // rendering: 'background',
          color: 'tomato'
        },
      ]
    });
  }
  handleSelect = (a, b, c, d) => {
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
  }
  render() {
    return (
      <div className="full-calendar-wrapper">
        <div ref="calendar"></div>
      </div>
    )
  }
}

export default FullCalendar;