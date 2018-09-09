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
    handleChange = (nextTargetKeys, direction, moveKeys) => {
        this.setState({ targetKeys: nextTargetKeys });

        console.log('targetKeys: ', targetKeys);
        console.log('direction: ', direction);
        console.log('moveKeys: ', moveKeys);
    }

    handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });

        console.log('sourceSelectedKeys: ', sourceSelectedKeys);
        console.log('targetSelectedKeys: ', targetSelectedKeys);
    }

    handleScroll = (direction, e) => {
        console.log('direction:', direction);
        console.log('target:', e.target);
    }
    render() {
        return (
            <div>
                <Transfer
                    dataSource={mockData}
                    titles={['Source', 'Target']}
                    targetKeys={this.state.targetKeys}
                    selectedKeys={this.state.selectedKeys}
                    onChange={this.handleChange}
                    onSelectChange={this.handleSelectChange}
                    onScroll={this.handleScroll}
                    render={item => item.title}
                />
            </div>
        )
    }
}

export default Transfer;