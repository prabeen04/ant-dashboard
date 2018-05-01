import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { getEvents, addEvent } from '../../actions/calendar_actions';
import EventForm from './eventForm';
import moment from 'moment';
import './calendar.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Button, Icon, message, DatePicker, TimePicker, Tabs } from 'antd';
const TabPane = Tabs.TabPane;
const dateFormat = 'YYYY-MM-DD';
const timeFormat = 'HH:mm:ss';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))
let formats = {
  dayFormat: (date, culture, localizer) =>
    localizer.format(date, 'YYYY-MM-DDTHH:mm:ss.SSSSZ', culture),
}
class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: '',
      endDate: '',
      visible: false,
      confirmLoading: false,
    }

    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.success = this.success.bind(this);
  }

  onSubmit = (values) => {
    console.log(values)
    let eventValues = Object.assign({}, values, { start: this.state.startDate, end: this.state.endDate })
    console.log(eventValues)
    this.success()
    this.props.addEvent(JSON.stringify(values));
  }
  success = () => {
    message.success('Event Added', 10);
  };
  handleOk = (slot) => {
    console.log(slot)
    this.setState({
      startDate: slot.start,
      endDate: slot.end,
      confirmLoading: true,
    });
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }
  componentDidMount() {
    this.props.getEvents();
  }
  render() {
    // console.log(moment(this.state.startDate).toISOString())
    // console.log('------------------------')
    // console.log(moment('2018-04-03T18:30:00.0000Z'))
    const { visible, confirmLoading, startDate, endDate } = this.state;
    const { handleSubmit, pristine, reset, submitting, start, end } = this.props;
    if (this.props.isLoading) {
      return (<div className="flex-container" style={{ height: '80vh', justifyContent: 'center' }}>
        <Icon type="loading" style={{ fontSize: 60, color: 'tomato' }} spin />
      </div>)
    }
    if (this.props.isError) {
      return (<p>Some Error occoured...</p>)
    }
    // console.log(this.state.startDate)
    return (
      <div className="flex-container" style={{ height: '520px', backgroundColor: '#fff', margin: '1rem' }}>
        <BigCalendar
          style={{ flexBasis: '70%' }}
          events={this.props.events}
          defaultDate={new Date()}
          startAccessor={start}
          endAccessor={end}
          selectable={true}
          formats={formats}
          onSelectSlot={(slot) => this.handleOk(slot)}
          onSelecting={(range) => console.log(range)}
        />
        <div className="event-form" >
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <Tabs defaultActiveKey="2">
              <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">
                Tab 1
              </TabPane>
              <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">
                Tab 2
              </TabPane>
            </Tabs>
            <DatePicker value={moment(this.state.startDate).toISOString() === null
              ? ''
              : moment(this.state.StartDate)}
            />
            <DatePicker value={moment(this.state.endDate).toISOString() === null
              ? ''
              : moment(this.state.endDate)}
            />
            <TimePicker value={moment(this.state.startDate).toISOString() === null
              ? ''
              : moment(this.state.startDate, timeFormat)}
            />
            <TimePicker value={moment(this.state.endDate).toISOString() === null
              ? ''
              : moment(this.state.endDate, timeFormat)}
            />
            <EventForm
              startDate={this.state.startDate}
              endDate={this.state.endDate}
            />

            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isLoading: state.calendarReducer.isLoading,
    isError: state.calendarReducer.isError,
    events: state.calendarReducer.events
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEvents: getEvents,
    addEvent: addEvent
  }, dispatch);
};

Calendar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);

export default reduxForm({
  form: 'calendarForm'
})(Calendar);