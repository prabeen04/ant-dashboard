import React, { Component } from 'react'
import { Drawer, Button } from 'antd';

class EditDrawer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.props.handleOpen}>Open</Button>
                <Drawer
                    title="Edit Post"
                    placement="right"
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