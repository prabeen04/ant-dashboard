import React, { Component } from 'react';
import { Card, Spin, Icon } from 'antd';
import classNames from 'classnames';
import JumpStartBox from './jumpStart';
import Settings from '../settings/settings'; 
import DashboardHeader from './dashboardHeader';
import Charts from '../charts/charts';
import GooglePlace from '../../components/google/googlePlace';
import LoginWithGoogle from '../../components/google/googleLogin';
import FunnelChart from '../../components/charts/funnelChart';
import TransitionComponent from '../../components/animation/transition';
class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      isFetching: false
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 2000);
  }
  render() {
    const antIcon = <Icon type="loading" style={{ fontSize: 60, color: 'tomato' }} spin />;
    const blurClass = classNames({
      'blur-wrapper': this.state.isFetching
  });
    return (
      <div className={blurClass}>
          <DashboardHeader />
        <div className='flex-container'>
          <JumpStartBox />
        </div>
        {/* <TransitionComponent/> */}
        {/* <FunnelChart/> */}
        {/* <LoginWithGoogle /> */}
        {/* <GooglePlace/> */}
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