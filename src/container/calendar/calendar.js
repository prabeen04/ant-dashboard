import React, { Component } from 'react'
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

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: "1",
      view: 'week',
      isModalVisible: false,
      selectedEvent: {}
    }
  }

  success = () => {
    message.success('Event Added', 10);
  };
  handleOk = (slot) => {
    this.props.setDate(slot)
  }
  eventSelect = (event) => {
    console.log(event)
  }
  onSelectEvent = (event) => {
    console.log(event)
    this.setState({
      isModalVisible: true,
      selectedEvent: event
    })
  }
  onModalClose = () => this.setState({ isModalVisible: false, selectedEvent: {} })
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    if (this.props.isLoading) {
      return (<div className="flex-container" style={{ height: '80vh', justifyContent: 'center', alignItems: 'center' }}>
        <Icon type="loading" style={{ fontSize: 60, color: 'tomato' }} spin />
      </div>)
    }
    // if (this.props.isError) {
    //   return (<p>Some Error occoured...</p>)
    // }
    return (
      <React.Fragment>
        <ActionHeader
          leftComponent={<LeftActionHeader />}
          rightComponent={<RightActionHeader />}
        />

        <div className="flex-container" style={{ height: '520px', margin: '0.5rem' }}>
          {this.state.activeTab === '1'
            ? <CalendarInstance
              events={this.props.events}
              defaultDate={new Date()}
              selectable={true}
              popup={true}
              onSelectEvent={this.onSelectEvent}
              onSelectSlot={this.handleOk}
            />
            : <p style={{ flexBasis: '70%' }}>Second tab Content</p>

          }

          <MainWrapper className="event-form" >
            <StyledTabs
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
            </StyledTabs>
          </MainWrapper>
        </div>
        <EditEventModal
          title='Event Detail'
          visible={this.state.isModalVisible}
          onClose={this.onModalClose}
          onOk={this.onModalClose}
        >
          <p>Modal</p>
          <p>{this.state.selectedEvent.description}</p>
        </EditEventModal>
      </React.Fragment>
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
    setDate: setDate
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);

const LeftActionHeader = props => {
  return (<React.Fragment>
    <Tooltip title="Grid View">
      <Icon
        type="appstore-o"
        style={{ fontSize: 25, cursor: 'pointer', marginRight: '0.5rem' }}
      />
    </Tooltip>
    <Tooltip title="List View">
      <Icon
        type="profile"
        style={{ fontSize: 25, cursor: 'pointer' }}
      />
    </Tooltip>
  </React.Fragment>
  )
}

const RightActionHeader = props => {
  return (<React.Fragment>
    <Tooltip title="Car">
      <Icon
        type="car"
        style={{ fontSize: 25, cursor: 'pointer', marginRight: '0.5rem' }}
      />
    </Tooltip>
    <Tooltip title="User">
      <Icon
        type="user"
        style={{ fontSize: 25, cursor: 'pointer' }}
      />
    </Tooltip>
  </React.Fragment>
  )
}