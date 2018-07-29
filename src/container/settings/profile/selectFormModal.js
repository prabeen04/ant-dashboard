import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Modal, Button } from 'antd';
import { closeFormModal } from "../../../actions/selectAction";
class SelectFormModal extends Component {
    render() {
        const { isFormModalOpen, currentValue } = this.props;
        return (
            <div>
                <Modal
                    visible={isFormModalOpen}
                    title="Title"
                    onOk={this.handleOk}
                    onCancel={this.props.closeFormModal}
                //         footer={[
                //             <Button key="back" onClick={this.handleCancel}>Return</Button>,
                //             <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                //                 Submit
                // </Button>,
                //         ]}
                >
                    <div className="form-modal">
                        <Button key="back" onClick={this.props.closeFormModal}>Return</Button>,
                        <Button key="submit" type="primary" onClick={this.handleOk}>Submit</Button>
                    </div>
                    <p>{currentValue.label && currentValue.label}</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
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
        closeFormModal
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectFormModal);