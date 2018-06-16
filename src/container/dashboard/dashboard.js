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
    const antIcon = <Icon type="loading" style={{ fontSize: 60, color: 'tomato' }} spin />;
    return (
      <div>
      <div className='flex-container'>
        <JumpStartBox/>
      </div>
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