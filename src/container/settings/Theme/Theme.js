import React, { Component } from 'react'

class Theme extends Component {
    render() {
        return (
            <div>
                <Switch
                    checked={this.props.theme === 'dark'}
                    onChange={this.props.toggleTheme}
                    checkedChildren="Dark"
                    unCheckedChildren="Light"
                />
            </div>
        )
    }
}

export default Theme;