import React, { Component } from 'react'
import { Drawer, Button } from 'antd';

class EditDrawer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Drawer
                    title="Edit Post"
                    placement="right"
                    width={600}
                    closable={true}
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