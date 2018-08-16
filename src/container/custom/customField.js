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
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }
    render() {
        const renderFields = this.state.fields.map((field, index) => {
            return (
                <input type={field.type} name={field.name} placeholder={field.name} />
            )
        })
        return (
            <div>
                <h2>CustomField Component</h2>
                <form>
                {renderFields}
                <button type="submit" onClick={this.handleSubmit}>Send</button>
                </form>
            </div>
        )
    }
}
export default CustomField