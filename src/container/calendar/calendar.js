import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvents, setDate } from '../../actions/calendar_actions';
import CalendarInstance from './calendarInstance';
import EditEventModal from "./EditEventModal";
import EventForm from './eventForm';
import ActionHeader from '../../components/layouts/ActionHeader';
import './calendar.css';
import { Button, Icon, message, Tabs, Tooltip } from 'antd';
import { MainWrapper } from '../../components/UI/Layout';
import { StyledTabs } from '../../components/UI/Antd';
const TabPane = Tabs.TabPane;

function Calendar(props) {
  const [activeTab, setActiveTab] = useState('1')
  const [view, setView] = useState('week')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState({})

  useEffect(() => {
    props.getEvents();
  }, [])
  const success = () => message.success('Event Added', 10);
  const handleOk = slot => props.setDate(slot)

  const onSelectEvent = (event) => {
    setIsModalVisible(true)
    setSelectedEvent(event)
  }
  const onModalClose = () => {
    setIsModalVisible(false)
    setSelectedEvent({})
  }

  if (props.isLoading) {
    return (<div className="flex-container" style={{ height: '80vh', justifyContent: 'center', alignItems: 'center' }}>
      <Icon type="loading" style={{ fontSize: 60, color: 'tomato' }} spin />
    </div>)
  }

  return (
    <React.Fragment>
      <ActionHeader
        leftComponent={null}
        rightComponent={null}
      />

      <div className="flex-container" style={{ height: '520px', margin: '0.5rem' }}>
        <CalendarInstance
          events={props.events}
          defaultDate={new Date()}
          selectable={true}
          popup={true}
          onSelectEvent={onSelectEvent}
          onSelectSlot={handleOk}
        />

        <MainWrapper className="event-form" >
          <StyledTabs
            defaultActiveKey={activeTab}
            onChange={(activeKey) => {
              setActiveTab(activeKey.toString())
            }}>
            <TabPane tab={<span><Icon type="Apple" />Event</span>} key="1">
              <EventForm />
            </TabPane>
          </StyledTabs>
        </MainWrapper>
      </div>
      <EditEventModal
        title='Event Detail'
        visible={isModalVisible}
        onClose={onModalClose}
        onOk={onModalClose}
      >
        <p>Modal</p>
        <p>{selectedEvent.description}</p>
      </EditEventModal>
    </React.Fragment>
  )
}

const mapStateToProps = ({ calendarReducer }) => ({
  isLoading: calendarReducer.isLoading,
  isError: calendarReducer.isError,
  events: calendarReducer.events
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getEvents,
  setDate
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
