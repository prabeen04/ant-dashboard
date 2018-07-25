import React, { Component } from 'react'
import { Drawer, Button } from 'antd';
import DrawerTitle from './drawerTitle';
import './post.css';

class EditDrawer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Drawer
                    title={<DrawerTitle title="Test Drawer"/>}
                    placement="right"
                    width={600}
                    closable={true}
                    wrapClassName={'red-background'}
                    onClose={this.props.handleClose}
                    visible={this.props.open}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </div>
        )
    }
}

export default EditDrawer;