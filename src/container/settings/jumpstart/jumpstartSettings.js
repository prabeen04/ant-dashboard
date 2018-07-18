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

export default connect()(JumpstartSettings);