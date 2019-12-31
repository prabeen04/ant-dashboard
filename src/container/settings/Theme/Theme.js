import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Switch } from "antd";
import { setDarkTheme, setLightTheme } from "../../../actions/themeActions";

const lightTheme = {
  applicationBackground: "#eee",
  applicationColor: "#444",
  backgroundColor: "#fff",
  primaryColor: "#1890ff",
  color: "#444",
  borderColor: "#eee",
  inputBorderColor: "#eee",
  boxShadowColor: "#aaa",
  opacity: 1
};

const darkTheme = {
  applicationBackground: "#001529",
  applicationColor: "#fff",
  backgroundColor: "rgba(121, 140, 173, 0.3)",
  primaryColor: "#1890ff",
  color: "#eeeeee",
  borderColor: "#001529",
  inputBorderColor: "rgba(121, 140, 173, 0.3)",
  boxShadowColor: "#001529",
  opacity: 0.3
};
function Theme(props) {
  const { themeType, setDarkTheme, setLightTheme } = props;
  function toggleTheme(checked) {
    if (checked === true) {
      setDarkTheme(darkTheme);
    } else {
      setLightTheme(lightTheme);
    }
  }
  return (
    <div>
      <Switch
        checked={themeType === "light" ? false : true}
        onChange={toggleTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
    </div>
  );
}

const mapStateToProps = ({ themeReducer }) => ({
  themeType: themeReducer.themeType
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setLightTheme,
      setDarkTheme
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Theme);
