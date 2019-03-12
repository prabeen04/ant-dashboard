import React, { Component } from 'react';
import { StyledModal } from '../../components/UI/Antd';

export default function EditEventModal({ title, visible, onClose, onOk, children }) {
    return (
        <div>
            <StyledModal
                title={title || ''}
                visible={visible || null}
                onOk={onOk || null}
                onCancel={onClose || null}
            >
                {children}
            </StyledModal>
        </div>
    )
}

