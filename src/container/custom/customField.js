import React, { Component } from 'react'

class CustomField extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'prabeen ',
            email: 'sdg@kndf.vd',
            phone: '643231313',
            fields: [
                { type: 'text', name: 'name' },
                { type: 'email', name: 'email' },
                { type: 'number', name: 'phone' }
            ]
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }
    render() {
        const renderFields = this.state.fields.map((field, index) => {
            return (
                <input
                    key={index}
                    type={field.type}
                    name={field.name}
                    placeholder={field.name}
                    value="ksdmv"
                    // value={() => { return 'dsgsdg'
                        // if (field.name === 'name') {
                        //     return this.state.name
                        // }
                        // if (field.name === 'email') {
                        //     return this.state.email
                        // }
                        // if (field.name === 'phone') {
                        //     return this.state.phone
                        // }
                    // }}
                    onChange={this.handleChange}
                />
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