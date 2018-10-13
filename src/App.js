import React, { Component } from 'react';
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import Navbar from './components/layouts/navbar';
import { ApplicationWrapper } from "./components/UI/Layout";
import './App.css';

// const theme = {
//   // applicationBackground: '#001529',
//   // applicationColor: '#fff',
//   // backgroundColor: 'rgba(121, 140, 173, 0.3)',
//   // color: '#eeeeee',
//   // borderColor: '#001529',
//   // boxShadowColor: '#001529',
//   // opacity: 0.3,
//   applicationBackground: '#eee',
//   applicationColor: '#444',
//   backgroundColor: '#fff',
//   color: '#444',
//   borderColor: '#eee',
//   boxShadowColor: '#aaa',
//   opacity: 1
// }
const App = (props) => {
  console.log(props)
  return (
    <ThemeProvider theme={props.theme}>
        <Navbar />
    </ThemeProvider>
  );
}

const mapStateToProps = ({ themeReducer }) => ({theme: themeReducer.theme})
export default connect(mapStateToProps)(App);
