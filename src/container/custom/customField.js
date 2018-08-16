import React, { Component } from 'react'

class CustomField extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fields: [
                { type: 'text', name: 'name' },
                { type: 'email', name: 'email' },
                { type: 'number', name: 'phone' }
            ]
        }
    }
    render() {
        return (
            <div>
                <h2>CustomField Component</h2>
            </div>
        )
    }
}
export default CustomField