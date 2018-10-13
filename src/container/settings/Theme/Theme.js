import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Switch } from 'antd'
import { setDarkTheme, setLightTheme } from "../../../actions/themeActions";


const lightTheme = {
    applicationBackground: '#eee',
    applicationColor: '#444',
    backgroundColor: '#fff',
    color: '#444',
    borderColor: '#eee',
    boxShadowColor: '#aaa',
    opacity: 1
}

const darkTheme = {
    applicationBackground: '#eee',
    applicationColor: '#444',
    backgroundColor: '#fff',
    color: '#444',
    borderColor: '#eee',
    boxShadowColor: '#aaa',
    opacity: 1
}
class Theme extends Component {

    toggleTheme = (checked) => {
        console.log(checked)
        if (checked === true) {
            this.props.setLightTheme(lightTheme)
        } else {
            this.props.setDarkTheme(darkTheme)
        }

    }
    render() {
        const { themeType } = this.props;
        return (
            <div>
                <Switch
                    checked={themeType === 'dark' ? true : false}
                    onChange={this.toggleTheme}
                    checkedChildren="Dark"
                    unCheckedChildren="Light"
                />
            </div>
        )
    }
}

const mapStateToProps = ({ themeReducer }) => ({
    themeType: themeReducer.themeType
})
const mapDispatchToProps = dispatch => bindActionCreators({
    setLightTheme,
    setDarkTheme
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Theme);