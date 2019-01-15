import React, { Component, lazy, Suspense } from 'react';
import { Icon } from 'antd';
import classNames from 'classnames';
import DashboardHeader from './dashboardHeader';
import LoginWithGoogle from '../../components/google/googleLogin';
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
    }, 500);
  }
  fetchChartData() {
    this.setState({
      isFetching: true
    })
    setTimeout(() => {
      this.setState({
        isFetching: false
      })
    }, 300)
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
        <Suspense fallback={<div>Loading Charts ...</div>}>
          <Charts />
        </Suspense>
        <Suspense fallback={<div>Loading Settings ...</div>}>
          <Settings />
        </Suspense>
        <LoginWithGoogle buttonText='Login with Google' />
      </div>
    )
  }
}

export default Dashboard;