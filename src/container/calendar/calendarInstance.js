import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

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
            defaultDate={new Date()}
            startAccessor={(event) => new Date(event.start)}
            endAccessor={(event) => new Date(event.end)}
            selectable={true}
            popup={true}
            onSelecting={(range) => console.log(range)}
            onSelectEvent={(event, e) =>{
              alert(event.description)
              console.log(e)
            } }
            slotPropGetter={date =>({className: 'red-background'})}
          />
      </div>
    )
  }
}
export default CalendarInstance;