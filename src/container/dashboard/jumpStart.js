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
                <Card style={{height: '100px', flexGrow: 1}}>
                    <h2>Jumpstart Box</h2>
                </Card>
            </div>
        )
    }
}
export default JumpStartBox;