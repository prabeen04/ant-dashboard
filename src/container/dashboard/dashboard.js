import React, { Component, lazy, Suspense } from 'react';
import { Card, Spin, Icon, Popover } from 'antd';
import classNames from 'classnames';
import { MainWrapper, StyledActionHeader } from "../../components/UI/Layout";
// import JumpStartBox from './jumpStart';
// import Settings from '../settings/settings';
import DashboardHeader from './dashboardHeader';
// import Charts from '../charts/charts';
import GooglePlace from '../../components/google/googlePlace';
import LoginWithGoogle from '../../components/google/googleLogin';
import FunnelChart from '../../components/charts/funnelChart';
import TransitionComponent from '../../components/animation/transition';
import PlaceInput from '../../components/common/forms/placeInput';
const JumpStartBox = lazy(() => import('./jumpStart'))
const Charts = lazy(() => import('./../charts/charts'))
const Settings = lazy(() => import('../settings/settings'))

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      isFetching: true,
      isPopover: true
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
      isFetching: true
    })
    setTimeout(() => {
      this.setState({
        isFetching: false
      })
    }, 500)
  }

  render() {
    const antIcon = <Icon type="loading" style={{ fontSize: 60, color: 'tomato' }} spin />;
    const blurClass = classNames({
      'blur-wrapper': this.state.isFetching
    });
    return (
      <div className={blurClass}>
        <DashboardHeader fetchChartData={this.fetchChartData} />
        <div className='flex-container'>
          <Suspense fallback={<div>Loading ...</div>}>
            <JumpStartBox />
          </Suspense>
        </div>
        {/* <TransitionComponent/> */}
        {/* <FunnelChart/> */}
        {/* <LoginWithGoogle /> */}
        {/* <GooglePlace/> */}
        {/* <PlaceInput/> */}
        <Suspense fallback={<div>Loading Charts ...</div>}>
          <Charts />
        </Suspense>
        <Suspense fallback={<div>Loading Settings ...</div>}>
          <Settings />
        </Suspense>
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