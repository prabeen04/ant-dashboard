import React, { Component } from 'react';
import Loadable from "react-loadable";
import { Icon } from 'antd';
import Navbar from './components/layouts/navbar';
import './App.css';
// const AsyncNavbar = Loadable({
//   loader: () => import('./components/layouts/navbar'),
//   loading: () => (<span>Loading...............</span>)
// })
const App = (props) => {
  return (
    <div className="wrapper">
      <Navbar />
    </div>
  );
}

export default App;
