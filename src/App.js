import React, { Component } from 'react';
import Loadable from "react-loadable";
// import Navbar from './components/layouts/navbar';
import './App.css';
const AsyncNavbar = Loadable({
  loader: () => import('./components/layouts/navbar'),
  loading: () => <p>Loading...............</p>
})
const App = (props) => {
  return (
    <div className="wrapper">
      <AsyncNavbar />
    </div>
  );
}

export default App;
