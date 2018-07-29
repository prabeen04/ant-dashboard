import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Modal, Button } from 'antd';

class SelectFormModal extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
const mapStateToProps = state => {
    return{
        isFormModalOpen: state.selectReducer.isFormModalOpen,
        currentValue: state.selectReducer.currentValue
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({

    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectFormModal);