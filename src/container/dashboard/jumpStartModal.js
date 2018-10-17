import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button, Icon } from 'antd';
import { StyledModal } from '../../components/UI/Antd';
import { closeJumpstartModal } from '../../actions/dashboardAction'
class JumpStartModal extends Component {
  render() {
    return (
      <div>
        <StyledModal
          title={this.props.jumpstartData.title}
          visible={this.props.isModalOpen}
          onOk={this.handleOk}
          onCancel={this.props.closeJumpstartModal}
        >
          <p>{this.props.jumpstartData.title}</p>
          <p>{this.props.jumpstartData.value}</p>
        </StyledModal>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    return{
        isModalOpen: state.dashboardReducer.isModalOpen,
        jumpstartData: state.dashboardReducer.jumpstartData
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        closeJumpstartModal
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(JumpStartModal);