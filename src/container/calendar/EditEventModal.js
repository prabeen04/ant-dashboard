import React, { Component } from 'react';
import { StyledModal } from '../../components/UI/Antd';

class EditEventModal extends Component {
    render() {
        const { title, visible, onClose, onOk } = this.props
        return (
            <div>
                <StyledModal
                    title={title || ''}
                    visible={visible || null}
                    onOk={onOk || null}
                    onCancel={onClose || null}
                >
                    {this.props.children}
                </StyledModal>
            </div>
        )
    }
}

export default EditEventModal;