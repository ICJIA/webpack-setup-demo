import _ from "lodash";
import "./src/styles.css";
import Hello from "./src/Hello.js";
import Head from "./src/Head.js";
import { Helmet } from "react-helmet";

import React, { Component } from "react";
import { render } from "react-dom";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 1 };
    this.log = this.log.bind(this);
    this.btnClick = this.btnClick.bind(this);
  }

  btnClick(e) {
    console.log("click");
    this.setState({ counter: this.state.counter + 1 });
  }
  log(str) {
    console.log(str);
  }

  render() {
    return (
      <div className="myApp">
        <Head />
        <Hello message="Hello from React" />
        <h1>This is a test: {this.state.counter}</h1>
        <button onClick={this.btnClick}>Click me</button>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
