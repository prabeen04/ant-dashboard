import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Jbox from './jbox';

class JumpstartSettings extends Component {
  render() {
    const renderJumpstartBox = this.props.jumpStartList.map((box, index) => <Jbox key={box.id} index={index} box={box}/>)
    return (
      <DndProvider backend={HTML5Backend}>
        {renderJumpstartBox}
      </DndProvider>
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