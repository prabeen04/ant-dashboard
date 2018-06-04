import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CalendarInstance from './calendarInstance';
import { getEvents, addEvent, setDate } from '../../actions/calendar_actions';
import EventForm from './eventForm';
import EventList from './eventList';
import moment from 'moment';
import './calendar.css';
import { Button, Icon, message, DatePicker, TimePicker, Tabs } from 'antd';
const TabPane = Tabs.TabPane;
const dateFormat = 'YYYY-MM-DD';
const timeFormat = 'HH:mm:ss';


class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: '',
      endDate: '',
      visible: false,
      confirmLoading: false,
      activeTab: "1",
      view: 'week'
    }

    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.success = this.success.bind(this);
    // this.renderEndDate = this.renderEndDate.bind(this);
  }

  onSubmit = (values) => {
    console.log(values)
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
    this.props.setDate(slot)
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
    if (this.props.isLoading) {
      return (<div className="flex-container" style={{ height: '80vh', justifyContent: 'center' }}>
        <Icon type="loading" style={{ fontSize: 60, color: 'tomato' }} spin />
      </div>)
    }
    // if (this.props.isError) {
    //   return (<p>Some Error occoured...</p>)
    // }
    return (
      <div className="flex-container" style={{ height: '520px', backgroundColor: '#fff', margin: '1rem' }}>

        {this.state.activeTab === '1'
          ? <CalendarInstance
            events={this.props.events}
            defaultDate={new Date()}
            selectable={true}
            popup={true}
            onSelectEvent={(event, e) => {
              alert(event.description)
              console.log(e)
            }}
            onSelectSlot={this.handleOk}
          />
          : <p style={{flexBasis: '70%'}}>Second tab Content</p>
          
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
              <EventForm />
            </TabPane>
            <TabPane tab={<span><Icon type="android" />Android</span>} key="2">
                <Button type="primary">submit</Button>
            </TabPane>
          </Tabs>
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
    addEvent: addEvent,
    setDate: setDate
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);