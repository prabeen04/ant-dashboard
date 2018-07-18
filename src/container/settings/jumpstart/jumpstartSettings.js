import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import '../settings.css';

class JumpstartSettings extends Component {
  render() {
    const renderJumpstartBox = this.props.jumpStartList.map((box, index) => {
      return <div key={box.id} className="jumpstart-box-dnd">
              {box.value}
            </div>
    })
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