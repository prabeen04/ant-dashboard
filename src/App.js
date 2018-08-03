import React, { Component } from 'react';
import Loadable from "react-loadable";
import Navbar from './components/layouts/navbar';
import './App.css';
import BundleLoading from './components/loading/bundleLoading'; 

const AsyncNavbar = Loadable({
  loader: () => import('./components/layouts/navbar'),
  loading: BundleLoading
})
const App = (props) => {
  return (
    <div className="wrapper">
      <AsyncNavbar />
    </div>
  );
}

export default App;
