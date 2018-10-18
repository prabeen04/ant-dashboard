import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CalendarInstance from './calendarInstance';
import { getEvents, addEvent, setDate } from '../../actions/calendar_actions';
import EventForm from './eventForm';
import EventList from './eventList';
import ActionHeader from '../../components/layouts/ActionHeader';
import './calendar.css';
import { Button, Icon, message, Tabs, Tooltip } from 'antd';
import { MainWrapper } from '../../components/UI/Layout';
import { StyledSkeleton } from '../../components/UI/Antd';
const TabPane = Tabs.TabPane;
const dateFormat = 'YYYY-MM-DD';
const timeFormat = 'HH:mm:ss';


class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: "1",
      view: 'week'
    }

    this.handleOk = this.handleOk.bind(this);
    this.success = this.success.bind(this);
    this.eventSelect = this.eventSelect.bind(this);
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
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    if (this.props.isLoading) {
      return (<div className="flex-container" style={{ height: '80vh', justifyContent: 'center', alignItems: 'flex-start' }}>
        <Icon type="loading" style={{ fontSize: 60, color: 'tomato' }} spin />
      </div>)
    }
    // if (this.props.isError) {
    //   return (<p>Some Error occoured...</p>)
    // }
    return (
      <div>
        <ActionHeader
          leftComponent={<LeftActionHeader />}
          rightComponent={<RightActionHeader />}
        />
        <StyledSkeleton active/>
        <div className="flex-container" style={{ height: '520px', margin: '0.5rem' }}>
          {this.state.activeTab === '1'
            ? <CalendarInstance
              events={this.props.events}
              defaultDate={new Date()}
              selectable={true}
              popup={true}
              onSelectEvent={this.eventSelect}
              onSelectSlot={this.handleOk}
            />
            : <p style={{ flexBasis: '70%' }}>Second tab Content</p>

          }

          <MainWrapper className="event-form" >
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
          </MainWrapper>
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