import React, { Component } from 'react'
import { Card, Spin, Icon } from 'antd';
import JumpStartBox from './jumpStart';
import GooglePlace from '../../components/google/googlePlace';
import { GoogleLogin } from 'react-google-login';

class Dashboard extends Component {
  constructor(props){
    super(props)

    this.state ={
      isLoading: true
    }
    this.responseGoogle = this.responseGoogle.bind(this);
  }
  responseGoogle = (res) => console.log(res)
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
      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
      />
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