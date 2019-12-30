import React, { Component } from "react";
import { Spring } from "react-spring";
import SpringTransition from "./SpringTransition";
import SpringTrail from "./SpringTrail";

export default function Spring() {
  return (
    <React.Fragment>
      <SpringTransition />
      <SpringTrail />
    </React.Fragment>
  );
}
