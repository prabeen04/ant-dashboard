import React, { Component } from 'react'
import { Card } from 'antd';
import JumpStartBox from './jumpStart';

class Dashboard extends Component {
  render() {
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
       <Card loading style={{height: '400px'}}>
        <h2>Jumpstart Box</h2>
      </Card>
      </div>
    )
  }
}

export default Dashboard;