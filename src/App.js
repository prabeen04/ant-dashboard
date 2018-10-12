import React, { Component } from 'react';
import { ThemeProvider } from "styled-components";
import Navbar from './components/layouts/navbar';
import './App.css';

const App = (props) => {
  return (
    <ThemeProvider theme={{
      backgroundColor: '#001529',
      color: '#eeeeee'
    }}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
