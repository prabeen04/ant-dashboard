import React, { Component } from 'react'
import { Drawer, Button } from 'antd';
import './post.css'
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
                    maskStyle={{backgroundColor: 'tomato'}}
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