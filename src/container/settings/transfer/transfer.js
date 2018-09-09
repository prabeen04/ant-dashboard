import React, { Component } from 'react'
import { Transfer } from "antd";
const mockData = [];
for (let i = 0; i < 20; i++) {
    mockData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        disabled: i % 3 < 1,
    });
}

const targetKeys = mockData
    .filter(item => +item.key % 3 > 1)
    .map(item => item.key);

class Transfer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            targetKeys,
            selectedKeys: [],
        }
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Transfer;