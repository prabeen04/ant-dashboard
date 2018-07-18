import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

class JumpstartSettings extends Component {
  render() {
    return (
      <div>
        <h1>JumpstartSettings Component</h1>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    jumpStartList: state.dashboardReducer.jumpStartList
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({

  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(JumpstartSettings);