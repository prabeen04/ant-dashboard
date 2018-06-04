import React, { Component } from 'react'
import PropTypes from 'prop-types';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class CalendarInstance extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div style={{ flexBasis: '70%', height: 500 }}>
        <BigCalendar
            style={{ flexBasis: '70%' }}
            events={this.props.events ?this.props.events :[] }
            defaultDate={this.props.defaultDate || new Date()}
            startAccessor={(event) => new Date(event.start)}
            endAccessor={(event) => new Date(event.end)}
            selectable={this.props.selectable}
            popup={this.props.popup}
            onSelecting={(range) => console.log(range)}
            onSelectSlot={(range: { start: Date, end: Date }) =>{
              console.log(range);
              this.props.onSelectSlot(range.start, range.end)
              // console.log(start);
              // console.log(end);
            }}
            onSelectEvent={this.props.handleSelectEvent}
            slotPropGetter={(date, a, b) =>{
              return{className: 'red-background'}
              console.log(date);
              console.log(a);
              console.log(b);
            }}
            eventPropGetter={()=>{}}
          />
      </div>
    )
  }
}
export default CalendarInstance;