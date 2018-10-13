import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Switch } from 'antd'
import { setDarkTheme, setLightTheme } from "../../../actions/themeActions";
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

const mapStateToProps = ({ themeReducer }) => ({})
const mapDispatchToProps = dispatch => bindActionCreators({
    setLightTheme,
    setDarkTheme
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Theme);