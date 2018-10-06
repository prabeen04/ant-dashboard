import React, { Component } from 'react';
import { connect } from "react-redux";
import { Skeleton, Drawer } from "antd";
import $ from 'jquery';
// import 'moment/min/moment.min.js';
// import 'fullcalendar/dist/fullcalendar.print.min.css';
import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar/dist/fullcalendar.js';
import './FullCalendar.css';

class FullCalendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerVisible: false
    }
  }
  onDrawerClose = () => {
    this.setState({drawerVisible: false})
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
    this.setState({drawerVisible: true})
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
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={this.onDrawerClose}
          visible={this.state.drawerVisible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    )
  }
}

const mapStateToProps = ({ calendarReducer }) => ({
  events: calendarReducer.events
})
export default connect(mapStateToProps)(FullCalendar);