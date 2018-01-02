import _ from "lodash";
import "./src/styles.css";
import Hello from "./src/Hello.js";

import React, { Component } from "react";
import { render } from "react-dom";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 1 };
    this.log = this.log.bind(this);
  }

  log(str) {
    console.log(str);
  }

  render() {
    return (
      <div>
        <Hello />
        <h1>This is a test: {this.state.counter}</h1>
        {this.log("test")}
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
