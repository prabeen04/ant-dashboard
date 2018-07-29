import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Modal, Button } from 'antd';

class SelectFormModal extends Component {
    render() {
        const { isFormModalOpen, currentValue } = this.props;
        return (
            <div>
                <Modal
                    visible={isFormModalOpen}
                    title="Title"
                    // onOk={this.handleOk}
                    // onCancel={this.handleCancel}
            //         footer={[
            //             <Button key="back" onClick={this.handleCancel}>Return</Button>,
            //             <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
            //                 Submit
            // </Button>,
            //         ]}
                >
                    <p>Some contents...</p>
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

    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectFormModal);