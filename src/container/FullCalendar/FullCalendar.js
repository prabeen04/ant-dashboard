import React, { Component } from 'react';
import $ from 'jquery';
import { calendar } from 'fullcalendar';
import './FullCalendar.css';

class FullCalendar extends Component {
  constructor(props){
    super(props)

  }
  componentDidMount(){
    console.log($)
  }
  render() {
    return (
      <div className="full-calendar-wrapper">
        <h3>FullCalendar Component</h3>
      </div>
    )
  }
}

export default FullCalendar;