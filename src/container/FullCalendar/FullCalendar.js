import React, { Component } from 'react';
import $ from 'jquery';
import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar/dist/fullcalendar.print.min.css';
import 'fullcalendar/dist/fullcalendar.js';
import './FullCalendar.css';

class FullCalendar extends Component {
  constructor(props){
    super(props)

  }
  componentDidMount(){
    const { calendar } = this.refs;

    $(calendar).fullCalendar({events: this.props.events});
  }
  render() {
    return (
      <div className="full-calendar-wrapper">
        <h3>FullCalendar Component</h3>
        <div ref="calendar"></div>
      </div>
    )
  }
}

export default FullCalendar;