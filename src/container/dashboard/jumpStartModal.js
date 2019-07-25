import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button, Icon } from 'antd';
import { StyledModal } from '../../components/UI/Antd';
import { closeJumpstartModal } from '../../actions/dashboardAction'

function JumpStartModal(props) {
  return (
    <div>
      <StyledModal
        title={props.jumpstartData.title}
        visible={props.isModalOpen}
        onCancel={props.closeJumpstartModal}
      >
        <p>{props.jumpstartData.title}</p>
        <p>{props.jumpstartData.value}</p>
      </StyledModal>
    </div>
  )
}
const mapStateToProps = ({ dashboardReducer }) => ({
  isModalOpen: dashboardReducer.isModalOpen,
  jumpstartData: dashboardReducer.jumpstartData
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ closeJumpstartModal }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(JumpStartModal);