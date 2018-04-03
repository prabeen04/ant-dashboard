import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { getEvents } from '../../actions/calendar_actions';
import moment from 'moment';
import eventList from './eventList';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Modal, Button } from 'antd';

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
    }, 2000);
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }
  componentDidMount(){
    this.props.getEvents();
  }
  render() {
    const { visible, confirmLoading, startDate, endDate } = this.state;
    console.log(this.props)
    if(this.props.isLoading){
      return(<p>Loading...</p>)
    }
    return (
      <div style={{ height: '520px' }}>
        <Modal title="Title"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{startDate}</p>
          <p>{endDate}</p>
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
const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  isError: state.isError,
  events: state.events
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEvents: getEvents
  }, dispatch);
};

Calendar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);

export default reduxForm({
  form: 'calendarForm'
})(Calendar);