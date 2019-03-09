import React, { Component } from 'react';
import { Drawer, Button } from 'antd';
import ProfileTimeline from './profileTimeline';

function ProfileDrawer(props) {
    return (
        <div>
            <Drawer
                visible={props.open}
                title={props.user.name}
                placement="right"
                width={600}
                closable={true}
                onClose={props.onClose}
            >
                <ProfileTimeline />
            </Drawer>
        </div>
    )
}
export default ProfileDrawer;