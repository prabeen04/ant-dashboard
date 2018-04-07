import React, { Component } from 'react'
import { Card } from 'antd';
const { Meta } = Card;

class ProfileCard extends Component {
    render() {
        return (
            <div>
                <Card
                    hoverable
                    style={{ width: 200 }}
                    cover={<img alt="example" src="https:/lorempixel.com/200/160" />}>
                    <Meta
                        title="title"
                        description="description"
                    />
                </Card>
            </div>
        )
    }
}
export default ProfileCard;