import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

class CalendarInstance extends Component {
  render() {
    return (
      <div>
        <BigCalendar
            // className="red-background"
            style={{ flexBasis: '70%' }}
            // events={this.props.events ?this.props.events :[] }
            defaultDate={new Date()}
            startAccessor={(event) => new Date(event.start)}
            endAccessor={(event) => new Date(event.end)}
            selectable={true}
            popup={true}
            // formats={formats}
            // onSelectSlot={(slot) => this.handleOk(slot)}
            onSelecting={(range) => console.log(range)}
            onSelectEvent={(event, e) =>{
              alert(event.description)
              console.log(e)
            } }
            // eventPropGetter={event => ({className: 'e-'+event.user.toLowerCase()})}
            slotPropGetter={date =>({className: 'red-background'})}
          />
      </div>
    )
  }
}
export default CalendarInstance;