import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import eventList from './eventList';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Modal, Button } from 'antd';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class Calendar extends Component {
  constructor(props){
    super(props)
    this.state = {
      ModalText: '',
      visible: false,
      confirmLoading: false,
    }
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (slot) => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
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
  render() {
    return (
      <div style={{height: '520px'}}>
      <Modal title="Title"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
        </Modal>
        <BigCalendar
          events={eventList}
          defaultDate={new Date()}
          startAccessor='startDate'
          endAccessor='endDate'
          selectable={true}
          onSelectSlot={(slot)=>this.handleOk(slot)}
          onSelecting={(range)=>console.log(range)}
        />
      </div>
    )
  }
}

export default Calendar;