import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Modal, Button } from 'antd';
import { closeFormModal, newOptionCreate } from "../../../actions/selectAction";
import '../settings.css'
class SelectFormModal extends Component {
    render() {
        const { isFormModalOpen, currentValue } = this.props;
        return (
            <div>
                <Modal
                    visible={isFormModalOpen}
                    title="Title"
                    onCancel={this.props.closeFormModal}
                    footer={null}
                >
                    <div className="form-modal">
                        <div className="form-items">
                            <p>{currentValue.label && currentValue.label}</p>
                            <p>{currentValue.label && currentValue.label}</p>
                            <p>{currentValue.label && currentValue.label}</p>
                            <p>{currentValue.label && currentValue.label}</p>
                        </div>
                        <div className="form-buttons">
                            <Button key="back" onClick={this.props.closeFormModal}>Return</Button>
                            <Button key="submit" type="primary" onClick={this.props.newOptionCreate}>Submit</Button>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        isFormModalOpen: state.selectReducer.isFormModalOpen,
        currentValue: state.selectReducer.currentValue
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        closeFormModal,
        newOptionCreate
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectFormModal);