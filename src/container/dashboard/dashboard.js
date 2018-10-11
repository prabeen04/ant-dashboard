import React, { Component } from 'react';
import { Card, Spin, Icon, Popover } from 'antd';
import classNames from 'classnames';
import JumpStartBox from './jumpStart';
import Settings from '../settings/settings';
import DashboardHeader from './dashboardHeader';
import Charts from '../charts/charts';
import GooglePlace from '../../components/google/googlePlace';
import LoginWithGoogle from '../../components/google/googleLogin';
import FunnelChart from '../../components/charts/funnelChart';
import TransitionComponent from '../../components/animation/transition';
import PlaceInput from '../../components/common/forms/placeInput';
class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      isFetching: true,
      isPopover: false
    }
    this.fetchChartData = this.fetchChartData.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
        isFetching: false
      })
    }, 1000);
  }
  fetchChartData() {
    this.setState({
      isFetching: true,
      isPopover: true
    })
    setTimeout(() => {
      this.setState({
        isFetching: false
      })
    }, 500)
  }
  handleVisibleChange = () => this.setState({isPopover: true})
  render() {
    const antIcon = <Icon type="loading" style={{ fontSize: 60, color: 'tomato' }} spin />;
    const blurClass = classNames({
      'blur-wrapper': this.state.isFetching
    });
    return (
      <div className={blurClass}>
        <Popover
          title="Title"
          trigger="click"
          visible={this.state.isPopover}
          onVisibleChange={this.handleVisibleChange}
        >
          <DashboardHeader fetchChartData={this.fetchChartData} />
        </Popover>
        <div className='flex-container'>
          <JumpStartBox />
        </div>
        {/* <TransitionComponent/> */}
        {/* <FunnelChart/> */}
        {/* <LoginWithGoogle /> */}
        {/* <GooglePlace/> */}
        {/* <PlaceInput/> */}
        <Charts />
        <Settings />
        <Card loading={this.state.isLoading} style={{ height: '400px' }}>
          <div className="flex-container" style={{ justifyContent: 'space-evenly' }}>
            <Icon type="loading" style={{ fontSize: 60, color: 'tomato' }} spin />
          </div>
        </Card>
      </div>
    )
  }
}

export default Dashboard;