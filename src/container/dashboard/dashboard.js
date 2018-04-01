import React, { Component } from 'react'
import { Card, Spin, Icon } from 'antd';
import JumpStartBox from './jumpStart';

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
    const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
    return (
      <div>
      <div className='flex-container'>
        <JumpStartBox/>
        <JumpStartBox/>
        <JumpStartBox/>
        <JumpStartBox/>
        <JumpStartBox/>
        <JumpStartBox/>
      </div>
       <Card loading={this.state.isLoading} style={{height: '400px'}}>
        <h2>Jumpstart Box {antIcon}</h2>
      </Card>
      </div>
    )
  }
}

export default Dashboard;