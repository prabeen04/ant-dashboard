import React, { Component } from 'react';
import Loadable from "react-loadable";
import Navbar from './components/layouts/navbar';
import './App.css';
import AppLoading from './components/loading/appLoading'; 

// const AsyncNavbar = Loadable({
//   loader: () => import('./components/layouts/navbar'),
//   loading: AppLoading,
// })
const App = (props) => {
  return (
    <div className="wrapper">
      <Navbar />
    </div>
  );
}

export default App;
