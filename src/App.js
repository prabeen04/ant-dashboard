import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from './components/layouts/navbar';
import { ApplicationWrapper } from "./components/UI/Layout";
import './App.css';

const App = (props) => {
  console.log(props)
  return (
    <ThemeProvider theme={props.theme}>
        <Navbar />
    </ThemeProvider>
  );
}

const mapStateToProps = ({ themeReducer }) => ({theme: themeReducer.theme})
export default withRouter(connect(mapStateToProps)(App));
