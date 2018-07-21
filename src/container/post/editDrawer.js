import React, { Component } from 'react'
import { Drawer, Button } from 'antd';

class EditDrawer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showDrawer}>Open</Button>
                <Drawer
                    title="Basic Drawer"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
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