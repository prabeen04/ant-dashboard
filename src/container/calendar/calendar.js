import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { getEvents, addEvent } from '../../actions/calendar_actions';
import moment from 'moment';
import eventList from './eventList';
import EventForm from './eventForm';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Modal, Button, Icon } from 'antd';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: '',
      endDate: '',
      visible: false,
      confirmLoading: false,
    }

    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit = (values) => {
    console.log('values')
    this.props.addEvent(values);
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (slot) => {
    console.log(slot)
    this.showModal();
    this.setState({
      startDate: JSON.stringify(slot.start),
      endDate: JSON.stringify(slot.end),
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 20000);
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
    const { handleSubmit, pristine, reset, submitting } = this.props;

    if (this.props.isLoading) {
      return (<div className="flex-container" style={{ height: '80vh', justifyContent: 'center' }}>
        <Icon type="loading" style={{ fontSize: 60, color: 'tomato' }} spin />
      </div>)
    }
    if (this.props.isError) {
      return (<p>Some Error occoured...</p>)
    }
    return (
      <div style={{ height: '520px', backgroundColor: '#fff' }}>
        <Modal title="Title"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        > <form onSubmit={handleSubmit(this.onSubmit)}>
            <EventForm />
            <p>{startDate}</p>
            <p>{endDate}</p>
            <button type="submit">submit</button>
          </form>
        </Modal>
        <BigCalendar
          events={eventList}
          defaultDate={new Date()}
          startAccessor='startDate'
          endAccessor='endDate'
          selectable={true}
          onSelectSlot={(slot) => this.handleOk(slot)}
          onSelecting={(range) => console.log(range)}
        />
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