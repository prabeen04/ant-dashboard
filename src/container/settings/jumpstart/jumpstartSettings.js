import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import '../settings.css';

class JumpstartSettings extends Component {
  render() {
    const renderJumpstartBox = this.props.jumpStartList.map((box, index) => {
      return <p key={box.id}>{box.value}</p>
    })
    return (
      <div>
        <h1>JumpstartSettings Component</h1>
        {renderJumpstartBox}
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