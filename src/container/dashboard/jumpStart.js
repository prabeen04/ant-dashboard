import React, { Component } from 'react'
import { Card } from 'antd';
class JumpStartBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 2000);
    }
    render() {

        return (
            <div>
                <Card loading={this.state.isLoading} style={{height: '80px'}}>
                    Whatever content
                </Card>
            </div>
        )
    }
}
export default JumpStartBox;