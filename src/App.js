import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Navbar from './components/layouts/navbar';
import './App.css';

class App extends Component {
  
  render() {
    console.log(this.props.isAuthenticated)
    if(!this.props.isAuthenticated){ 
      console.log('navigate here');
      <Redirect to="/login"/>
    }
    return (
      <div className="wrapper">
        <Navbar />       
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return{
    isAuthenticated: state.authReducer.isAuthenticated
  }
}
export default connect(mapStateToProps)(App);
