import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button, Icon } from 'antd';
import { closeJumpstartModal } from '../../actions/dashboardAction'
class JumpStartModal extends Component {
  render() {
    return (
      <div>
        <Modal
          title="Basic Modal"
          visible={this.props.isModalOpen}
          onOk={this.handleOk}
          onCancel={this.props.closeJumpstartModal}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    return{
        isModalOpen: state.dashboardReducer.isModalOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        closeJumpstartModal
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(JumpStartModal);