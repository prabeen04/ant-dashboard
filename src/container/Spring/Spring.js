import React, { Component } from "react";
import { Spring } from "react-spring";
import SpringTransition from "./SpringTransition";
import SpringTrail from "./SpringTrail";
class Spring_ extends Component {
  render() {
    return (
      <React.Fragment>
        <SpringTransition />
        <SpringTrail />
      </React.Fragment>
    );
  }
}

export default Spring_;
