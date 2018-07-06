import React, { Component } from 'react'
import { Card, Spin, Icon } from 'antd';
import Transition from 'react-transition-group/Transition'
import JumpStartBox from './jumpStart';
import GooglePlace from '../../components/google/googlePlace';
import LoginWithGoogle from '../../components/google/googleLogin';
import FunnelChart from '../../components/charts/funnelChart';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
};

class Dashboard extends Component {
  constructor(props){
    super(props)

    this.state ={
      isLoading: true
    }
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 2000);
  }
  render() {
    const antIcon = <Icon type="loading" style={{ fontSize: 60, color: 'tomato' }} spin />;
    return (
      <div>
      <div className='flex-container'>
        <JumpStartBox/>
      </div>
      {/* <FunnelChart/> */}
      <LoginWithGoogle/>
      {/* <GooglePlace/> */}
       <Card loading={this.state.isLoading} style={{height: '400px'}}>
       <div className="flex-container" style={{ justifyContent: 'space-evenly'}}>
                <Icon type="loading" style={{ fontSize: 60, color: 'tomato' }} spin />
            </div>
      </Card>
      </div>
    )
  }
}

export default Dashboard;