import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class Calendar extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Calendar;