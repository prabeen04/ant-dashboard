import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import eventList from './eventList';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class Calendar extends Component {
  render() {
    return (
      <div style={{height: '520px'}}>
        <BigCalendar
        events={eventList}
        startAccessor='startDate'
        endAccessor='endDate'
        selectable={true}
        onSelecting={(e)=>console.log(e)}/>
      </div>
    )
  }
}

export default Calendar;