import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { getEvents, addEvent } from '../../actions/calendar_actions';
import EventForm from './eventForm';
import EventList from './eventList';
import moment from 'moment';
import './calendar.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Button, Icon, message, DatePicker, TimePicker, Tabs } from 'antd';
const TabPane = Tabs.TabPane;
const dateFormat = 'YYYY-MM-DD';
const timeFormat = 'HH:mm:ss';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: '',
      endDate: '',
      visible: false,
      confirmLoading: false,
      activeTab: "2",
      view: 'week'
    }

    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.success = this.success.bind(this);
  }

  onSubmit = (values) => {
    console.log(JSON.stringify(values))
    // let eventValues = Object.assign({}, values,{ start: moment(this.state.startDate), end:  moment(this.state.endDate)})
    // console.log(JSON.stringify(eventValues))
    this.success()
    // this.props.addEvent(eventValues);
  }
  success = () => {
    message.success('Event Added', 10);
  };
  handleOk = (slot) => {
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
    console.log(moment(this.state.startDate).toDate())
    return (
      <div className="flex-container" style={{ height: '520px', backgroundColor: '#fff', margin: '1rem' }}>
        {this.state.activeTab === '1'
          ? <BigCalendar
            style={{ flexBasis: '70%' }}
            events={this.props.events ?this.props.events :[] }
            defaultDate={new Date()}
            startAccessor={(event) => new Date(event.start)}
            endAccessor={(event) => new Date(event.end)}
            selectable={true}
            // formats={formats}
            onSelectSlot={(slot) => this.handleOk(slot)}
            onSelecting={(range) => console.log(range)}
            onSelectEvent={(event, e) =>{
              alert(event.description)
              console.log(e)
            } }
          />
          :
          <BigCalendar
            style={{ flexBasis: '70%', backgroundColor: '#f4f4f4' }}
            events={this.props.events}
            defaultDate={new Date()}
            view={this.state.view}
            startAccessor={(event) => new Date(event.start)}
            endAccessor={(event) => new Date(event.end)}
            selectable={true}
            // formats={formats}
            onView={(view) => this.setState({
              view: view
            })}
            onSelectSlot={(slot) => this.handleOk(slot)}
            onSelecting={(range) => console.log(range)}
          />
        }

        <div className="event-form" >
          <Tabs
            defaultActiveKey={this.state.activeTab}
            onChange={(activeKey) => {
              this.setState({
                activeTab: activeKey.toString()
              })
            }}>
            <TabPane tab={<span><Icon type="apple" />Apple</span>} key="1">
               <form onSubmit={handleSubmit(this.onSubmit)}>

               <DatePicker value={moment(this.state.startDate).toISOString() === null
                  ? null
                  : moment(this.state.startDate)}
                />
                <TimePicker value={moment(this.state.startDate).toISOString() === null
                  ? null
                  : moment(this.state.startDate, timeFormat)}
                />
                <DatePicker value={moment(this.state.endDate).toISOString() === null
                  ? null
                  : moment(this.state.endDate)}
                />                
                <TimePicker value={moment(this.state.endDate).toISOString() === null
                  ? null
                  : moment(this.state.endDate, timeFormat)}
                />
                <EventForm
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                />

                <Button type="primary" htmlType="submit">submit</Button>
              </form>
            </TabPane>
            <TabPane tab={<span><Icon type="android" />Android</span>} key="2">
              <form onSubmit={handleSubmit(this.onSubmit)}>

                <DatePicker value={moment(this.state.startDate).toISOString() === null
                  ? null
                  : moment(this.state.startDate)}
                />
                <DatePicker value={moment(this.state.endDate).toISOString() === null
                  ? null
                  : moment(this.state.endDate)}
                />
                <EventForm
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                />

                <Button type="primary" htmlType="submit">submit</Button>
              </form>
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state)
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
