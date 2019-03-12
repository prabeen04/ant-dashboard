import React, { Component } from 'react';
import { StyledModal } from '../../components/UI/Antd';

export default function EditEventModal({ title, visible, onClose, onOk }) {
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

