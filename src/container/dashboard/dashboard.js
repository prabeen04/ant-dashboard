import React, { Component } from 'react'
import JumpStartBox from './jumpStart';

class Dashboard extends Component {
  render() {
    return (
      <div className='flex-container'>
        <JumpStartBox/>
        <JumpStartBox/>
        <JumpStartBox/>
        <JumpStartBox/>
        <JumpStartBox/>
        <JumpStartBox/>
      </div>
    )
  }
}

export default Dashboard;