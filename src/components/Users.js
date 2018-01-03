import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello.js";

export default class App extends Component {
  render() {
    return (
      <div className="myApp">
        <Hello message="This is the user page" />
      </div>
    );
  }
}
