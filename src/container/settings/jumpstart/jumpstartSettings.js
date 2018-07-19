import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Jbox from './jbox';
import '../settings.css';

class JumpstartSettings extends Component {
  render() {
    const renderJumpstartBox = this.props.jumpStartList.map((box, index) => <Jbox box={box}/>)
    return (
      <div>
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
JumpstartSettings = DragDropContext(HTML5Backend)(JumpstartSettings)
export default connect(mapStateToProps, mapDispatchToProps)(JumpstartSettings);