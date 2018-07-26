import React, { Component } from 'react'
import { Drawer, Button } from 'antd';

class ProfileDrawer extends Component {
    render() {
        return (
            <div>
                <Drawer
                    visible={this.props.open}
                    title={'cgcgh'}
                    placement="right"
                    width={600}
                    closable={true}
                >
                    hjghj
                </Drawer>
            </div>
        )
    }
}
export default ProfileDrawer;