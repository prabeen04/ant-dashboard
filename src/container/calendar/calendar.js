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
          defaultDate={new Date()}
          startAccessor='startDate'
          endAccessor='endDate'
          selectable={true}
          onSelecting={(range)=>console.log(range)}
        />
      </div>
    )
  }
}

export default Calendar;