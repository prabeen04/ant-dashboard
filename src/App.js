import React, { Component } from 'react';
import { ThemeProvider } from "styled-components";
import Navbar from './components/layouts/navbar';
import { ApplicationWrapper } from "./components/UI/Layout";
import './App.css';

const theme = {
  applicationBackground: '#001529',
  applicationColor: '#fff',
  backgroundColor: '#001529',
  color: '#eeeeee',
  borderColor: '#001529',
  boxShadowColor: '#001529',
  opacity: 0.3
}
const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <ApplicationWrapper>
        <Navbar />
      </ApplicationWrapper>
    </ThemeProvider>
  );
}

export default App;
