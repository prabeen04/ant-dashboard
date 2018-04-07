import React, { Component } from 'react'
import { Card } from 'antd';
const { Meta } = Card;

class ProfileCard extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Card
                    hoverable
                    style={{ width: 200, height: 200 }}
                    cover={<img style={{ width: '100%', height: 150 }} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                    <Meta
                        title={this.props.name}
                    />
                </Card>
            </div>
        )
    }
}
export default ProfileCard;